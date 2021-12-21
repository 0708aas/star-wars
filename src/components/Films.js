import React, {useEffect, useState} from 'react';
import axios from "axios";


const Films = () => {
    const [films, setFilms] = useState([])

    useEffect(() => {
        axios(`https://swapi.dev/api/films`)
            .then(({data}) => setFilms(data.results))
    },[])


    return (
        <div>
            <div className="container">
            <div className="row">
                {
                    films.map((it, idx) => {
                        return (
                            <div key={it.title} className="col-4">
                                <img className="img" src={`https://starwars-visualguide.com/assets/img/films/${idx + 1}.jpg`} alt=""/>
                                <div className="title">{it.title}</div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </div>
    );
};

export default Films;