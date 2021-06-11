import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Gallery = () => {
    const token = localStorage.getItem('token')
    const [error, setError] = useState(false);
    const [cards, setCards] = useState([])


    useEffect(() => {
        const url = 'http://localhost:3000/api/cards';
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${token}`
            },
        })
            .then((res) => res.json())
            .then((data) => setCards(data))
            .catch(() => setError(true));

    }, [cards])

    return (
        <div className="gallery">

            {
                cards.map(card => {
                    return (
                        <>
                            {/* <h1>{card._id}</h1> */}

                            <Link to={`/gallery/${card._id}`}> <img src={card.url} alt="picture" key={card.id}/></Link>
                            {/* <p>{card.tags}</p> */}
                        </>
                    )
                })
            }
        </div>
    );
};

export default Gallery;