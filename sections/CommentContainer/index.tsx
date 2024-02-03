import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

interface CommentsProps {
    _id: string;
}

const CommentContainer: React.FC<CommentsProps> = ({ _id }) => {
    const [commentMessage, setCommentMessage] = useState('');
    const [comments, setComments] = useState<any[]>([]);
    const [commentLoader, setCommentLoader] = useState(false);
    const router = useRouter();

    const handleAddComment = async () => {
        try {
            const res = await fetch('/api/addComment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    modelId: _id,
                    comment: commentMessage
                })
            });
            const data = await res.json();
            console.log(data);
            toast.success('Comment added successfully');
            setCommentMessage('');
            setTimeout(() => {
                router.reload();
            }
                , 1000);
        } catch (err) {
            console.log(err);
        }
    };


    const getComments = async () => {
        try {
            console.log("Fetching comments", _id);
            const res = await fetch(`/api/getComments?modelId=${_id}`);
            const data = await res.json();
            console.log("Commentssss", data);
            setComments(data);
            setCommentLoader(false);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getComments();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(comments);



    return (
        <>
            <textarea
                className='w-full h-20 p-5 bg-gray-700 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blueLight'
                placeholder='Write your comments here'
                value={commentMessage}
                onChange={(e) => setCommentMessage(e.target.value)}
            />
            <div className='flex gap-5'>
                <button
                    onClick={handleAddComment}
                    className='bg-blueLight text-white rounded-lg px-4 py-2 mt-5'>Add comment</button>
            </div>

            {
                commentLoader ?
                    <div className='flex justify-center items-center'>
                        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blueLight'></div>
                    </div>
                    :
                    <div className='mt-5'>
                        <h2 className='text-white'>Comments: {comments.length}</h2>
                        {
                            comments.map((comment, index) => (
                                <div key={index} className='p-5 w-20 rounded-lg my-5' style={{ background: '#28333c' }}>
                                    <p className='text-white'>{comment.comment}</p>
                                </div>
                            ))
                        }
                    </div>



            }

            <ToastContainer theme='dark' />
        </>
    );
};

export default CommentContainer;
