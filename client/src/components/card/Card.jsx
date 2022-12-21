import { useEffect } from "react";
import { useState } from "react";
import "./card.css";
import axios from "axios";

function Card({card}) {

    const currentPercentage=`${(card.spent/card.available)*100}%`
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, red), color-stop(${currentPercentage}, green))
  `;

  return <div className="container">
         <div className="Head">
            <div className="top_left">
                 <h2>{card.name}</h2>
                 <p>{card.user}: {card.budget_name}</p>
            </div>
            {card.card_type==="subcription" ? <div className="top_right">
                <img src="./images/419303.jpg" alt="card_type"></img>
            </div> :<div className="top_right">
                <img src="./images/download.png" alt="card_type"></img>
            </div>}
         </div>
         <div className="middle">
               <p className="middle_left">{card.card_type}</p>
               <p className="middle_right">Expires: {card.expires}</p>
         </div>
         <div className="count_bar"  style={{background:trackStyling}}>
        
         </div>
         <div className="bottom1">
            <div className="bottom_left">
                <p className="spent" ></p>
                <p>Spent</p>
            </div>
            <div>
                <p>{card.spent} {card.currency}</p>
            </div>
            </div>
        <div className="bottom1">
            <div className="bottom_left">
                <p className="available"></p>
                <p>Available</p>
            </div>
            <div>
                <p>{card.available} {card.currency}</p>
            </div>
        </div>

  </div>;
}

export default Card;
