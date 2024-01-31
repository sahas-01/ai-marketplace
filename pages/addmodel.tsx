import Navbar from '@/components/Navbar'
import SEOHead from '@/utils/SEOHead'
import React from 'react'
import { useState } from 'react'

const AddModel = () => {

  const initialModelData = {
    title: '',
    shortDescription: '',
    longDescription: '',
    category: '',
    useCases: '',
    developedBy: '',
  }

  const [modelData, setModelData] = useState(initialModelData)

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
    if (data.status === 201) {
      alert('Model Added Successfully')
      setModelData(initialModelData)
    } else {
      alert(data.message);
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
          className="bg-[#1a1e27] w-8/12 h-fit rounded-xl p-5 mt-3"
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
              className="block h-12 bg-[#ffffff12] text-white rounded-lg px-2 border border-slate-600 py-5 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
                            transition transform duration-100 ease-out
                            "
              required
            />
          </div>
          <div className="flex relative m-0">
            <input
              type='text'
              className="block h-12 bg-[#ffffff12] text-white rounded-lg px-2 border border-slate-600 py-5 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
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
              className="block h-fit bg-[#ffffff12] text-white rounded-lg px-2 border border-slate-600 py-5 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
            transition transform duration-100 ease-out resize-none 
            "
              rows={10} cols={50} placeholder='Long Description' value={modelData.longDescription} onChange={(e) => setModelData({ ...modelData, longDescription: e.target.value })} />
          </div>
          <div className="flex relative m-0">
            <input
              type='text'
              className="block h-12 bg-[#ffffff12] text-white rounded-lg px-2 border border-slate-600 py-5 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
                            transition transform duration-100 ease-out
                            "
              placeholder='Category'
              value={modelData.category}
              onChange={(e) =>
                setModelData({ ...modelData, category: e.target.value })
              }
            />
          </div>
          <div className="flex relative m-0">
            <textarea
              className="block h-fit bg-[#ffffff12] text-white rounded-lg px-2 border border-slate-600 py-5 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
            transition transform duration-100 ease-out resize-none 
            "
              rows={10} cols={50} placeholder='Use Cases' value={modelData.useCases} onChange={(e) => setModelData({ ...modelData, useCases: e.target.value })} />
          </div>
          <div className='flex relative m-0'>
            <input
              type='text'
              className="block h-12 bg-[#ffffff12] text-white rounded-lg px-2 border border-slate-600 py-5 mt-5 mb-2 mr-10 text-sm w-full focus:outline-none
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
              className="block bg-sky-700 text-white text-lg font-bold rounded-xl px-2 py-3 mt-5 mb-2 mr-10 w-full focus:outline-none transition transform duration-100 ease-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddModel