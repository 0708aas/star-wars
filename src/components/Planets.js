import React, {useEffect, useState} from 'react';
import axios from "axios";

const Planets = () => {

    const [planets, setPlanets] = useState([])
    const [links, setLinks] = useState({next: null, prev: null})
    const [next, setNext] = useState(1)
    const getPlanets = (li) => {
        axios(li)
            .then(({data}) => {
                setPlanets(data.results)
                setLinks({next: data.next, prev: data.previous})
            })
    }
    useEffect(() => {
        getPlanets('https://swapi.dev/api/planets/')
    }, [])

    const nextClick = () => {
        getPlanets(links.next)
        setNext(next + 10)
    }
    const prevClick = () => {
        getPlanets(links.prev)
        setNext(next - 10)
    }
    return (
        <div>
            <div className="container">
                <button className="button-left" disabled={!links.prev} onClick={prevClick}>Prev</button>
                <button className="button-rigt" disabled={!links.next} onClick={nextClick}>Next</button>
                <div className="row">
                    {
                        planets.map((it, idx) => {
                            return (
                                <div key={it.name} className="col-4">
                                    <img className="img"
                                         src={`https://starwars-visualguide.com/assets/img/planets/${idx + next}.jpg`}
                                         alt=""/>
                                    <div className="title">{it.name}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Planets;