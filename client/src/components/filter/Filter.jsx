import "./filter.css"


const Filter = ({closeMenu}) => {
  return (
    <div onClick={closeMenu}  className="filter_container">
    <div>
        <p>filters</p>
        <div class="light_line"></div>
        <h4>Type</h4>
        <div className="sort">
            <input type="checkbox">Subscription</input>
            <input type="checkbox">burner</input>
        </div>
        <h4>CardHolder
        </h4>
        <select>
            <option>Mayank</option>
            <option>Tej</option>
        </select>
    </div>
    </div>
  )
}

export default Filter