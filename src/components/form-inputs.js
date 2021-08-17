import React from 'react'
import { Textarea, Input } from 'theme-ui'

const LabeledInput = ({ as = Input, label, ...props }) => {
  const name = label.toLowerCase()
  const Component = as
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Component name={name} id={name} {...props} />
    </>
  )
}

const FormInput = ({ ...props }) => (
  <>
    <LabeledInput
      className="appearance-none w-full border-gray-400 leading-snug rounded-md text-gray-900 bg-white placeholder-gray-600 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"
      label='Name'
      type='text'
      required
      placeholder='Enter your name'
      {...props}
    />
    <LabeledInput
      className="appearance-none w-full border-gray-400 leading-snug rounded-md text-gray-900 bg-white placeholder-gray-600 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"
      label='Email'
      type='email'
      required
      placeholder='Enter your email'
      {...props}
    />
    <LabeledInput
      className="appearance-none w-full border-gray-400 leading-snug rounded-md text-gray-900 bg-white placeholder-gray-600 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"
      label='Message'
      as={Textarea}
      required
      minLength={10}
      rows={5}
      placeholder='Leave a message here'
      {...props}
    />
  </>
)

export default FormInput
