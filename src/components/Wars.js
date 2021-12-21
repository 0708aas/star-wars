import React, {useEffect, useState} from 'react';
import axios from "axios";

const Wars = () => {

    const [people, setPeople] = useState([])

    const [link, setLink] = useState({next: null, prev: null})
    const [page, setPage] = useState(1)


    const getPeople = (li) => {
        axios(li)
            .then(({data}) =>{
                setPeople(data.results)
                setLink({next:data.next, prev:data.previous})
            })

    }


    useEffect(() => {
        getPeople('https://swapi.dev/api/people/')
    }, [])

    const nextClick = () => {
        getPeople(link.next)
        setPage(page + 10)
    }
    const prevClick = () => {
        getPeople(link.prev)
        setPage(page - 10)
    }


    return (
        <div>
            <div className="container">
                <button className="button-left" disabled={!link.prev} onClick={prevClick}>Prev</button>
                <button className="button-rigt" disabled={!link.next} onClick={nextClick}>Next</button>
                <div className="row">

                    {
                        people.map((it, idx) => {
                            return (
                                <div key={it.name} className="col-4">
                                    <div className="box">
                                        <img className="img"
                                             src={`https://starwars-visualguide.com/assets/img/characters/${idx + page}.jpg`}
                                             alt=""/>
                                        <div className="title">{it.name}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Wars;






