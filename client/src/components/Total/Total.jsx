import "./App.css"
import Card from "../card/Card"
import { Fragment } from "react";
import { useEffect ,useState} from "react";
import axios from "axios";
import Head from "../header/Head";
import {FaFilter, FaMicrosoft,FaSearch,FaStream } from 'react-icons/fa';
import Filter from "../filter/Filter";

const Total = () => {
  const [cards, setCards] = useState([]);
  const [menu, setMenu] =useState(false)
  
  useEffect(() => {
    const getAllCards = async () => {
      try {
        const data = await fetch("http://localhost:8000/api/cards");
        const array= await data.json();
    
        setCards(array["data"]);
        return array
      } catch (error) {
        console.log(error);
      }
    };
    getAllCards();
  },[]);
  

  return (
    <div>
      <Head/>
      <div className="Tabs">
        <div className="Tabs_left">
          <p>Your</p>
          <p>All</p>
          <p>Blocked</p>
        </div>
       <div className="Tabs_right">
        <FaMicrosoft/>
        <FaStream/>
       </div>
       </div>
       <div className="active_bar"></div>
       <div className="search">
        <FaSearch className="searchIcon"/>
        <div className="filter" onClick={() => setMenu(true)}><FaFilter className="filterIcon"/>
        <p>Filter</p></div>
        {menu && <Filter closeMenu={() => setMenu(false)}/>}
       </div>
       <div className="cardList">
       {cards && cards.map((card)=>(
        <div key={card._id}>
            <Card card={card}/>
            </div>
        ))}
        </div>
      
       </div>
  )
}

export default Total