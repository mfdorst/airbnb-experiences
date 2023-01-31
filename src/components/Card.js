import React from "react"
import "./Card.css"

export default function Card({img, imgAlt, rating, reviewCount, country, title, price}) {
  return (
    <div className="card">
      <img className="card-image" src={`images/${img}`} alt={imgAlt} />
      <div className="card-info rating">
        <img className="star" src="images/star.png" alt="*" />
        <span>{rating}&nbsp;</span>
        <span className="gray">({reviewCount}) • {country}</span>
      </div>
      <p className="card-info title">{title}</p>
      <p className="card-info price"><span className="bold">From {price}&nbsp;</span> / person</p>
    </div>
  )
}
