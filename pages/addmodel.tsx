import Navbar from '@/components/Navbar'
import SEOHead from '@/utils/SEOHead'
import { useRouter } from 'next/router';
import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddModel = () => {

  const initialModelData = {
    title: '',
    shortDescription: '',
    longDescription: '',
    category: '',
    useCases: '',
    developedBy: '',
    codeSnippet: '',
    isDemo: false,
    status: 'Not ready'
  }

  const [modelData, setModelData] = useState(initialModelData)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(modelData)
    const res = await fetch('/api/addModelData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(modelData),
    })
    const data = await res.json()
    if (data.message == 'Data saved successfully!') {
      toast.success(data.message, { position: "top-right" })
      setTimeout(() => {
        router.push('/models')
      }
        , 4000)
      setModelData(initialModelData)
    } else {
      toast.error(data.message, { position: "top-center" })
    }
  }

  return (
    <>
      <SEOHead titleString='AI MarketPlace-Atlan | Add Model' />
      <Navbar />
      <div
        className="flex flex-col items-center 
                justify-center"
      >
        <form
          className="bg-formBg w-8/12 h-fit rounded-xl p-5 mt-3"
          onSubmit={handleSubmit}
        >
          <h2 className="font-bold text-white text-2xl text-center">
            Add Model
          </h2>
          <div className="flex relative m-0">
            <input
              type="text"
              placeholder="Title"
              value={modelData.title}
              onChange={(e) =>
                setModelData({ ...modelData, title: e.target.value })
              }
              id="username"
              className="block h-12 bg-inputsBg text-white rounded-lg px-2 border border-slate-600 py-5 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
                            transition transform duration-100 ease-out
                            "
              required
            />
          </div>
          <div className="flex relative m-0">
            <input
              type='text'
              className="block h-12 bg-inputsBg text-white rounded-lg px-2 border border-slate-600 py-5 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
                            transition transform duration-100 ease-out
                            "
              placeholder='Short Description(in a sentence)'
              value={modelData.shortDescription}
              onChange={(e) =>
                setModelData({ ...modelData, shortDescription: e.target.value })
              }
            />
          </div>
          <div className="flex relative m-0">
            <textarea
              className="block h-fit bg-inputsBg text-white rounded-lg px-2 border border-slate-600 py-5 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
            transition transform duration-100 ease-out resize-none 
            "
              rows={10} cols={50} placeholder='Long Description' value={modelData.longDescription} onChange={(e) => setModelData({ ...modelData, longDescription: e.target.value })} />
          </div>
          <div className="flex relative m-0">
            <input
              type='text'
              className="block h-15 bg-inputsBg text-white rounded-lg px-2 border border-slate-600 py-5 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
                            transition transform duration-100 ease-out
                            "
              placeholder='Category'
              value={modelData.category}
              onChange={(e) =>
                setModelData({ ...modelData, category: e.target.value })
              }
            />
            {/* eslint-disable-next-line jsx-a11y/role-supports-aria-props */}
            <select name="Status" id="status"
              value={modelData.status}
              aria-placeholder='Status'
              onChange={(e) => setModelData({ ...modelData, status: e.target.value })}
              className='h-15 bg-inputsBg text-white rounded-lg px-2 border border-slate-600 py-5 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none'
            >
              <option value="Select Category" className="bg-[#080020] p-5 m-8 text-white">
                Select Category
              </option>
              <option value="Not ready" className="bg-[#080020] p-5 m-8 text-white">
                Not ready
              </option>
              <option value="testing" className="bg-[#080020] p-5 m-8 text-white">
                Testing
              </option>
              <option value="production" className="bg-[#080020] p-5 m-8 text-white">
                Production
              </option>
            </select>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-white mr-3">Demo:</span>
            <label className="radio-label text-white mx-2">
              <input
                type="radio"
                value="true"
                className='mx-2'
                checked={modelData.isDemo === true}
                onChange={() => setModelData({ ...modelData, isDemo: true })}
              />
              Yes
            </label>
            <label className="radio-label text-white mx-2">
              <input
                type="radio"
                value="false"
                className='mx-2'
                checked={modelData.isDemo === false}
                onChange={() => setModelData({ ...modelData, isDemo: false })}
              />
              No
            </label>
          </div>

          <div className="flex relative m-0">
            <textarea
              className="block h-fit bg-inputsBg text-white rounded-lg px-2 border border-slate-600 py-5 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
            transition transform duration-100 ease-out resize-none 
            "
              rows={10} cols={50} placeholder='Use Cases' value={modelData.useCases} onChange={(e) => setModelData({ ...modelData, useCases: e.target.value })} />
          </div>
          <div className="flex relative m-0">
            <textarea
              className="block h-fit bg-inputsBg text-white rounded-lg px-2 border border-slate-600 py-5 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
            transition transform duration-100 ease-out resize-none 
            "
              rows={10} cols={50} placeholder='Code Snippet' value={modelData.codeSnippet} onChange={(e) => setModelData({ ...modelData, codeSnippet: e.target.value })} />
          </div>
          <div className='flex relative m-0'>
            <input
              type='text'
              className="block h-12 bg-inputsBg text-white rounded-lg px-2 border border-slate-600 py-5 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
                            transition transform duration-100 ease-out
                            "
              placeholder='Developed By'
              value={modelData.developedBy}
              onChange={(e) =>
                setModelData({ ...modelData, developedBy: e.target.value })
              }
            />
          </div>

          {/* Button to submit the form */}
          <div className="flex align-center justify-center">
            <button
              type="submit"
              className="block bg-blueLight hover:bg-blue-700 text-white text-lg font-bold rounded-xl px-2 py-3 mt-5 mb-2 mr-10 w-full focus:outline-none transition transform duration-100 ease-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer theme="dark" />
    </>
  )
}

export default AddModel