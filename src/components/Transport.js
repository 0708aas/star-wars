import React, {useEffect, useState} from 'react';
import axios from "axios";

const Transport = () => {

    const [trans, setTrans] = useState([])

    useEffect(() => {
        axios(`https://swapi.dev/api/vehicles`)
            .then(({data}) => setTrans(data.results))
    }, [])

    return (
        <div>
            <div className="container">
            <div className="row">
                {
                    trans.map((it, idx) => {
                        return (
                            <div key={it.name} className="col-2">
                                <img className="img"
                                     src={`https://starwars-visualguide.com/assets/img/vehicles/${idx + 1}.jpg`}
                                     alt=""/>
                                <div className="title">{it.model}   </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </div>
    );
};

export default Transport;




