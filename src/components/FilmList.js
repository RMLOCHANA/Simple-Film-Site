// import React, { useEffect } from 'react';
import { FilmCard } from './FilmCard';
import Slider from "react-slick"

const FilmList = (props) => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3
    }
    return (
        <div>
            <div>
                <b><h2 className="text-2xl text-gray-100 self-center">{props.listName}</h2> </b>
            </div>
            <div className="Films">
                <Slider {...settings} className="grid-cols-3 max-4x1 mx-10 px-4 sm:px-6 lg:px-4 py-12" id="maindiv">
                    {props.filmList.map((item, keyId) => {
                        return (
                            <FilmCard Film={item} addToFavourites={true} addToMyList={true}   /> 
                            // <FilmCard Films={item} addToMyList={true} />
                        )
                    })}
                </Slider>
                
            </div>
        </div>);

        
}

export default FilmList;