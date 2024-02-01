import React from 'react'

const Loader = () => {
    return (
        <div className="relative">
            <div className="absolute animate-spin top-50 left-50 rounded-full h-32 w-32 border-t-2 border-b-2 border-white-900"></div>
        </div>
    )
}

export default Loader