import "./head.css"
import { FaVideo } from 'react-icons/fa';

const Head = () => {
  return (
    <div className="Head_container">
       <div className="Head_container_left">
        <h1>Virtual Cards</h1>
        <button><FaVideo/>Learn more</button>
       </div>
       <div>
        <button className="virtualcard"> + Add Virtualcard</button>
       </div>
    </div>
  )
}

export default Head