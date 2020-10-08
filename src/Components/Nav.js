import React from "react"
import { Link } from "react-router-dom"

const Nav = (props) => {
    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='/transfer'>Transfer</Link>
     
        </div>
    )
}

export default Nav