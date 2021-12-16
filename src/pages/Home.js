import React from "react";
import FilmList from "../components/FilmList";
import * as data from "../filmDetails.json"

const Home = () => {
    const Film = data.Films[1]
    const new_filx_films = data.Films
    // const new_filx_films = data. New_Films
    const watched_in_srilanka_films = data.Films
    return <React.Fragment>
        <FilmList listName={"New Flix"} filmList={new_filx_films} />
        <FilmList listName={"Most Watched in Sri Lanka"} filmList={watched_in_srilanka_films} />
    </React.Fragment>;
};

export default Home;
