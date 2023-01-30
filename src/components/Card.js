import React from "react"
import card_img from "../images/katie-zaferes.png"
import star from "../images/star.png"
import "./Card.css"

export default function Card() {
  return (
    <div class="card">
      <img src={card_img} alt="Katie Zaferes" />
      <div class="description">
        <div class="rating">
          <img class="star" src={star} alt="Star" />
          <p class="rating">5.0 (6)-USA</p>
        </div>
        <p class="description-text">Lessons with Katie Zaferes</p>
        <p class="price"><span class="bold">From $136&nbsp;</span> / person</p>
      </div>
    </div>
  )
}
