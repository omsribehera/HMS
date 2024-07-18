// eslint-disable-next-line no-unused-vars
import React from 'react'
import Hero from "../components/Hero"
import Biography from "../components/Biography"

const About = () => {
  return (
    <>
      <Hero
        title={"Learn more About us | Medplus Medical"}
        imageUrl={"/about.png"}/>
        <Biography imageUrl={"/whoweare.png"}/>
    </>
  )
}

export default About