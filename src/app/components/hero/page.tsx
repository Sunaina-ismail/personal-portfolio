import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <section className='home'>
             <div className='img-box-1'><Image className='img' src={"/hero.jpg"} alt='hero-img' layout="fill"/></div>
        <div className='home-content'>
            <h3>Hi,</h3>
            <h1>I&apos;m <span>SUNAINA</span><br />a Frontend Developer</h1>
              <p>I'm a Frontend Developer with a passion for crafting engaging and responsive web experiences.I enjoy the process of learning new technologies, experimenting with fresh ideas, and optimizing websites for both performance and accessibility. </p>

        <div className='btn-box'>
            <button className='btn-1'><a href="/components/contact">Connect</a></button>
            <button className='btn-2'><a href="https://static-resume-sunaina-ismails-projects.vercel.app/">My CV</a></button>
        </div>
        </div>
        <div className='img-box'><Image className='img' src={"/hero.jpg"} alt='hero-img' layout="fill"/></div>
    </section>
  )
}