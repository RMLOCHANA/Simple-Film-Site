import React from 'react'
const Mylist =[]
const favourites =[]

const FilmCard = (props) => {
    const add_to_favourites = (film) => {
        favourites.push(film)
    }
    const add_to_MyList = (film) => {
        Mylist.push(film)
    }
    // const Remove_Films = (film) => {
    //     Mylist.
    // }
    return (
        <div className=" max-w-sm rounded overflow-hidden shadow-lg float-left m-5" id="cardDiv">
            <div className="relative"
                style={{
                    backgroundRepeat: "no-repeat",
                    height: "20vh",
                    backgroundSize: "cover",
                    backgroundImage: `url(${props.Film.img_url})`
                }}
            >
                <div className="w-max absolute bottom-0 bg-gray-800 bg-opacity-50" style={{ width: "100%" }}>
                    {props.addToFavourites
                        ? <button className="float-right p-2 pl-5 pr-5 " value="list" id="favbtnheart" onClick={() => { add_to_favourites(props.Film) }}><i className="fas fa-heart"></i></button>
                        : <div style={{ display: 'block' }}><i class="far fa-times-circle" value="list"  id="favbtnheart"></i></div>
                    }, 

                 
                    {props.addToMyList
                        ? <button className="float-right p-2 pl-5 pr-5 " value="list" id="Mylistbtnlist" onClick={() => { add_to_MyList(props.Film) }}><i className="fas fa-list"></i></button>
                        : <div style={{display: 'block'}}></div>
                    }
                </div>
                
            </div>
            
            <div className="px-5 py-4">
                <div className="text-gray-100 text-xl mb-4">{props.Film.name}
 
                </div>
                <p className="text-gray-500 text-base">
                    {props.Film.description}
                </p>
            </div>
        </div>
)};

export { FilmCard, Mylist, favourites, };