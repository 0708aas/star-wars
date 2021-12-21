import React, {useEffect, useState} from 'react';
import axios from "axios";

const Starships = () => {

    const [stars, setStars] = useState([])

    useEffect(() => {

        axios(`https://swapi.dev/api/vehicles`)
            .then(({data}) => setStars(data.results))
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        stars.map((it, idx) => {
                            return (
                                <div key={it.name} className="col-4">
                                    <img className="img"
                                         src={`https://starwars-visualguide.com/assets/img/starships/${idx + 1}.jpg`}
                                         alt=""/>
                                    <div className="title">{it.model}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};


export default Starships;