import React, { useState } from 'react';

const Gallery = () => {
    const token = localStorage.getItem('token')
    const [error, setError] = useState(false);
    const [cards, setCards] = useState([])

    const getCards = (event) => {
        event.preventDefault();

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
    };

    console.log(cards[0]._id)

    return (
        <div>
            <button onClick={getCards}>
                GET Cards
            </button>

            {
                cards.map(card => {
                    return (
                        <>
                            <h1>{card._id}</h1>

                            <img src={card.url} alt="picture" />
                        </>
                    )
                })
            }
        </div>
    );
};

export default Gallery;