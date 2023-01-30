import React from "react"
import star from "../images/star.png"
import "./Card.css"

export default function Card({img, imgAlt, rating, reviewCount, country, title, price}) {
  return (
    <div class="card">
      <img class="card-image" src={img} alt={imgAlt} />
      <div class="card-info rating">
        <img class="star" src={star} alt="*" />
        <span>{rating}&nbsp;</span>
        <span class="gray">({reviewCount}) • {country}</span>
      </div>
      <p class="card-info title">{title}</p>
      <p class="card-info price"><span class="bold">From {price}&nbsp;</span> / person</p>
    </div>
  )
}
