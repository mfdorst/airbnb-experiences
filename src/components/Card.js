import React from "react"
import card_img from "../images/katie-zaferes.png"
import star from "../images/star.png"
import "./Card.css"

export default function Card() {
  return (
    <div class="card">
      <img class="card-image" src={card_img} alt="Katie Zaferes" />
      <div class="card-info rating">
        <img class="star" src={star} alt="*" />
        <span>5.0&nbsp;</span>
        <span class="gray">(6) • USA</span>
      </div>
      <p class="card-info description">Lessons with Katie Zaferes</p>
      <p class="card-info price"><span class="bold">From $136&nbsp;</span> / person</p>
    </div>
  )
}
