import React from 'react';
import { favourites, FilmCard } from '../components/FilmCard';

const Favourites = () => {
    return (
        
    <div>
        
        <b>   <h3 className="text-2xl text-gray-100 self-center">Favourites</h3> </b>

        {favourites.map((item, keyId) => {
            return (
                <div key={keyId}>
                    <FilmCard Film={item} />
                </div>
            )
        })}
    </div>);
}

export default Favourites;

