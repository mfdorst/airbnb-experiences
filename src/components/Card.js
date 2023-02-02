import React from "react"
import "./Card.css"

export default function Card({ img, imgAlt, rating, reviewCount, location, title, price, openSpots }) {
  let badgeText
  if (openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (location === "Online") {
    badgeText = "ONLINE"
  }
  const badge = badgeText && <div className="badge">{badgeText}</div>

  return (
    <div className="card">
      {badge}
      <img className="card-image" src={`images/${img}`} alt={imgAlt} />
      <div className="card-info rating">
        <img className="star" src="images/star.png" alt="*" />
        <span>{rating}&nbsp;</span>
        <span className="gray">({reviewCount}) • {location}</span>
      </div>
      <p className="card-info title">{title}</p>
      <p className="card-info price"><span className="bold">From {price}&nbsp;</span> / person</p>
    </div>
  )
}
