import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import ContactPage from "../components/contact-page"

const AboutPage = ({ data }) => (
  <Layout>
    <SiteMetadata title="About" description="Sample description" />
    <div className="bg-black">
      <div className="container py-12 lg:pb-16">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 xl:w-3/5 pb-8 md:pb-0">
            <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-white-900 sm:text-4xl">
              About me
            </h1>
            <div className="mt-4 leading-loose">
              For three years I've worked in various roles as a Clean up artist, animator and F/X animator. On Looney Tunes (2021), and
              Green Eggs and Ham. Both Warner Bros. shows. I have taken the skills from these jobs, studied storyboards, and films to
              create a storyboard portfolio. <br/> <br /> Thank you for taking a look at my work, and please contact me if you are interested in
              hiring me.
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
    <ContactPage />
  </Layout>
)

export default AboutPage