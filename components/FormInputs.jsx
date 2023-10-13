'use client'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const FormInputs = () => {

  const { data: session, status } = useSession()


  const [formData, setFormData] = useState({
    name: session?.user.name || '',
    email: session?.user.email || '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    toast.success('Thank you, your message has been sent')

    setFormData({
      name: session?.user.name || '',
      email: session?.user.email || '',
      subject: '',
      message: ''
    })
  }

  if (status == 'loading') {
    return (
      <div>
        {/* <Skeleton count={5} baseColor="#202020" highlightColor="#444" /> */}
        <div className="mb-8">
            <label className="block text-[#9F9F9F] text-sm font-bold mb-2" htmlFor="name">
              You Name
            </label>
            <Skeleton height={35} />
          </div>
          <div className="mb-8">
            <label className="block text-[#9F9F9F] text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <Skeleton height={35} />
          </div>
          <div className="mb-8">
            <label className="block text-[#9F9F9F] text-sm font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <Skeleton height={35} />
          </div>
          <div className="mb-8">
            <label className="block text-[#9F9F9F] text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <Skeleton height={35} />
          </div>
          <Skeleton height={35} width={256} />
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <label className="block text-[#9F9F9F] text-sm font-bold mb-2" htmlFor="name">
              You Name
            </label>
            <input
              className="shadow appearance-none border rounded-xl w-full py-4 px-6  leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Joe Shmoe"
              value={formData.name}
              onChange={(e) => setFormData(prevState => ({...prevState, name: e.target.value }))}
              required
            />
          </div>
          <div className="mb-8">
            <label className="block text-[#9F9F9F] text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded-xl w-full py-4 px-6  leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Abc@def.com"
              value={formData.email}
              onChange={(e) => setFormData(prevState => ({...prevState, email: e.target.value }))}
              required
            />
          </div>
          <div className="mb-8">
            <label className="block text-[#9F9F9F] text-sm font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              className="shadow appearance-none border rounded-xl w-full py-4 px-6  leading-tight focus:outline-none focus:shadow-outline"
              id="subject"
              type="text"
              placeholder="This field is Optional"
              value={formData.subject}
              onChange={(e) => setFormData(prevState => ({...prevState, subject: e.target.value }))}
            />
          </div>
          <div className="mb-8">
            <label className="block text-[#9F9F9F] text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded-xl w-full py-4 px-6  leading-tight focus:outline-none focus:shadow-outline resize-none"
              id="message"
              rows="5"
              placeholder="Hi! i’d like to ask about..."
              value={formData.message}
              onChange={(e) => setFormData(prevState => ({...prevState, message: e.target.value }))}
              required
            ></textarea>
          </div>
          <button
            className="btn-fill max-h-[55px] w-64"
            type="submit"
          >
            Submit
          </button>
        </form>
  )
}

export default FormInputs