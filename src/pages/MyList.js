import React from 'react';
import { Mylist, FilmCard } from '../components/FilmCard';

const MyList = () => {
    return (
        
    <div>

        <b>   <h3 className="text-2xl text-gray-100 self-center">My List</h3> </b>

        {Mylist.map((item, keyId) =>{
            return (
                <div key={keyId}>
                    <FilmCard Film={item} />
                    </div>
            )
        })}
       </div>);
}

export default MyList;