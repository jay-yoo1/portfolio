/** @jsx jsx */
import { jsx } from 'theme-ui'
import Form from './form'

const ContactPage = () => (
  <div className="container py-12 lg:py-16">
    <div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white-900 leading-tight tracking-tight">
        Contact Me
      </h2>
      <Form />
    </div>
  </div>
)
export default ContactPage
