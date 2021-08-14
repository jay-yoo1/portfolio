import classNames from "classnames"
import React, { useState } from "react"
import Button from "../components/Button"

const Newsletter = () => {
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const [disabled, setDisabled] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    setDisabled(true)
    setMessage("Sending...")
  }

  return (
    <div className="container py-12 lg:py-16">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
        Contact Me
      </h2>
      <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" className="mt-8 sm:flex">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Name
          <input type="text" name="name" id="name" aria-label="Name"   className="appearance-none w-full sm:max-w-xs px-5 py-3 border border-gray-400 leading-snug rounded-md text-gray-900 bg-white placeholder-gray-600 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out" />
        </label>
        <label>
          Email
          <input type="email" name="email" id="email" aria-label="Email address"
            className="appearance-none w-full sm:max-w-xs px-5 py-3 border border-gray-400 leading-snug rounded-md text-gray-900 bg-white placeholder-gray-600 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"
            placeholder="Enter your email"
            required
          />
        </label>
        <label>
          Subject
          <input type="text" name="subject" id="subject"   className="appearance-none w-full sm:max-w-xs px-5 py-3 border border-gray-400 leading-snug rounded-md text-gray-900 bg-white placeholder-gray-600 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"/>
        </label>
        <br/> <br/>
        <label>
          Message
          <textarea name="message" id="message" rows="5"  className="appearance-none w-full sm:max-w-xs px-5 py-3 border border-gray-400 leading-snug rounded-md text-gray-900 bg-white placeholder-gray-600 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out" />
        </label>
        < div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0" >
          <Button type="submit" disabled={disabled}>Send</Button>
        </div>
      </form>
    </div>
  )
}

export default Newsletter