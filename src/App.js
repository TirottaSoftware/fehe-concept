import { useLayoutEffect, useRef } from 'react'
import ImageWrapper from './components/ImageWrapper'
import ImageWithText from './sections/ImageWithText'
import Section from './components/Section'
import hero from './assets/img/hero.png'
import glasses01 from './assets/img/glasses-01.png'
import glasses02 from './assets/img/glasses-02.png'
import signature from './assets/img/fehe-signature.png'
import model01 from './assets/img/01.png'
import model02 from './assets/img/02.png'
import model03 from './assets/img/03.png'
import model04 from './assets/img/04.png'
import model05 from './assets/img/05.png'
import './globals.css'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useLayoutEffect(() => {
    gsap.to(".text-reveal", {
      backgroundPositionX: "0%",
      duration: 1,
      delay: .5
    });

    gsap.to(".text-split", {
      backgroundPositionX: "0%",
      duration: 1,
      scrollTrigger: {
        trigger: ".text-split",
        scrub: 1,
        start: "top center",
        end: "bottom center"
      }
    });

    gsap.from('img', {
      scrollTrigger: {
        trigger: 'img'
      },
      duration: 1.5,
      opacity: 0,
      yPercent: 50,
      ease: "power4",
    });

    gsap.from('.benefit-container h2', {
      scrollTrigger: {
        trigger: '.benefit-container'
      },
      y: 150,
      opacity: 0,
      stagger: 0.5
    })

    gsap.from('.model-container .model-wrapper', {
      scrollTrigger: {
        trigger: '.model-container'
      },
      y: 150,
      duration: 1,
      opacity: 0,
      stagger: 0.25
    })

    const ctx = gsap.context((self) => {
      const ps = self.selector('.about-iwt p');
      const rps = self.selector('.about-riwt p');

      gsap.from(ps, {
        scrollTrigger: {
          trigger: ps
        },
        y: 150,
        opacity: 0,
        stagger: 0.25
      })

      gsap.from(rps, {
        scrollTrigger: {
          trigger: rps
        },
        y: 150,
        opacity: 0,
        stagger: 0.25
      })
    }, 'section'); // <- Scope!

    gsap.from('.scrollscale', {
      scrollTrigger: {
        trigger: '.scrollscale'
      },
      y: 150,
      opacity: 0,
      scale: 0,
      duration: 2
    })

    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <>
      <div className='h-screen flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-5xl lg:text-7xl text-[#292929] text-center font-medium relative text-reveal'>A deep dive into modernity.</h1>
          <ImageWrapper src={hero} alt="Hero" />
        </div>
      </div>
      <Section name="about">
        <h2 className='text-7xl font-normal text-[#292929] text-split'>Prolonged exposure to UV rays can be harmful for your eyesight.</h2>
        <ImageWithText src={glasses01} heading='' buttonLabel='' className='mt-20 about-iwt'>
          <p className='text-color-text my-4 text-xl'>During the sunny days</p>
          <p className='text-color-text my-4 text-xl'>Continuous exposure to UV rays modifies lens proteins</p>
          <p className='text-color-text my-4 text-xl'>Leading to Corneal damage</p>
          <p className='text-color-text my-4 text-xl'>Cataract formation</p>
          <p className='text-color-text my-4 text-xl'>And macular degeneration</p>
          <p className='text-color-text my-4 text-xl'>Over time, cataracts can make vision blurry</p>
          <p className='text-color-text my-4 text-xl'>Hazy, or less colorful</p>
          <p className='text-color-text my-4 text-xl'>Such chronic effects</p>
          <p className='text-color-text my-4 text-xl'>Are the ultimate cause</p>
          <p className='text-color-text my-4 text-xl'>Of decreased vision.</p>
        </ImageWithText>
        <ImageWithText src={glasses02} heading='' buttonLabel='' className='mt-20 about-riwt' imageFirst>
          <hr />
          <p className='text-color-text mb-4 mt-8 text-xl'>Your eyes cannot be replaced with new ones.</p>
          <p className='text-color-text my-4 text-xl'>Neither can your sunglasses</p>
          <p className='text-color-text my-4 text-xl'>With a 100% UV Protection</p>
          <p className='text-color-text my-4 text-xl'>Your eyes can be safe</p>
          <p className='text-color-text my-4 text-xl'>As well as your vision during the sunny days.</p>
          <p className='text-color-text my-4 text-xl'>Harmful UV rays can no longer be an enemy</p>
          <p className='text-color-text my-4 text-xl'>That’s why we believe in</p>
          <p className='text-color-text my-4 text-xl'>At Fehe.</p>
        </ImageWithText>
      </Section>
      <Section name="benefits">
        <div className='benefit-container'>
          <h2 className='text-7xl text-center my-20'>100% UV Absorption</h2>
          <h2 className='text-7xl text-center my-20'>Two-Year Warranty.</h2>
          <h2 className='text-7xl text-center my-20'>Always trendy.</h2>
        </div>
        <div className='w-full h-screen mt-20 relative model-container'>
          <ImageWrapper className="model-wrapper w-[200px] lg:w-1/4 top-0 left-0 absolute" src={model01} alt="model01" />
          <ImageWrapper className="model-wrapper w-[200px] lg:w-1/4 top-20 right-10 absolute" src={model02} alt="model02" />
          <ImageWrapper className="model-wrapper w-[200px] lg:w-1/4 top-64 left-10 lg:left-[40%] absolute" src={model03} alt="model03" />
          <ImageWrapper className="model-wrapper w-[200px] lg:w-1/4 top-[560px] left-32 absolute" src={model04} alt="model04" />
          <ImageWrapper className="model-wrapper w-[200px] lg:w-1/4 top-[350px] lg:top-[640px] -z-10 right-0 absolute" src={model05} alt="model05" />
        </div>
      </Section>
      <div className='bg-featured w-full bg-cover flex flex-col items-center justify-center text-center bg-top py-40'>
        <h2 className='text-7xl mb-4'>Style and Safety.</h2>
        <h2 className='text-7xl'>All in One</h2>
      </div>
      <Section name="signature">
        <ImageWrapper className="w-1/2 mx-auto py-[10%] scrollscale" src={signature} alt="Fehe Signature" />
      </Section>
      <p className='text-[#BEBEBE] text-center mb-4'>This is a showcase website.</p>
      <p className='text-[#BEBEBE] text-center mb-4'>Made with love by <a href='https://cristiantirotta.com' target='_blank' className='text-blue-400 underline'>@TirottaWeb</a>.</p>
    </>
  )
}