import React from "react"
import "./Card.css"

export default function Card({img, imgAlt, rating, reviewCount, country, title, price}) {
  return (
    <div class="card">
      <img class="card-image" src={`images/${img}`} alt={imgAlt} />
      <div class="card-info rating">
        <img class="star" src="images/star.png" alt="*" />
        <span>{rating}&nbsp;</span>
        <span class="gray">({reviewCount}) • {country}</span>
      </div>
      <p class="card-info title">{title}</p>
      <p class="card-info price"><span class="bold">From {price}&nbsp;</span> / person</p>
    </div>
  )
}
