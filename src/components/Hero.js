import React from 'react'
import collage from '../images/collage.png'
import './Hero.css'

export default function Hero() {
  return (
    <section class="hero">
      <img class="collage" src={collage} alt="Collage" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
    </section>
  )
}
