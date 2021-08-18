import { graphql } from "gatsby"
import React from "react"
import Cards from "../components/Cards"
import Hero from "../components/Hero"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import ContactPage from "../components/contact-page"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata title="Home" description="Portfolio of Jay Yoo" />
      <Hero />

      <div className="bg-black-100 py-12 lg:py-16">
        {data.portfolio && data.portfolio.nodes.length > 0 ? (
          <Cards items={data.portfolio.nodes} />
        ) : (
          <div className="container">No projects found.</div>
        )}
      </div>
      <img src="banner_bottom.jpg" alt="Thank You!"/>
      <ContactPage />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query HomeQuery {
  portfolio: allContentfulPortfolio(sort: { fields: [contentful_id], order: DESC }) {
    nodes {
      ...PortfolioCard
    }
  }
}
`
