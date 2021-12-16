import React from "react"
import { Link } from "react-router-dom";

function Header() {

    return (

        <div className="grid grid-cols-3 gap-4" id="HeaderTitle">
            <div></div>
            <div><div className="max-w flex justify-center">
                <Link to="/">
                    <b>  <h5 className="text-5xl text-red-500 self-center" >FLIXPACK</h5></b>
                </Link>
            </div></div>
            <div>
                <Link to="/favourites">
                    <button className="text-lg text-gray-100 float-right p-2 pl-5 pr-5 " value="list"><i className="fas fa-heart"></i> Favourites </button>
                </Link>
                <Link to="/mylist">
                    <button className="text-lg text-gray-100 float-right p-2 pl-5 pr-5 " value="list"><i className="fas fa-list"></i> My List </button>
                </Link>
            </div>
        </div>

    )
}

export default Header;






