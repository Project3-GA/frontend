import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

const CardDetail = ({ match }) => {
  const token = localStorage.getItem("token");
  const [error, setError] = useState(false);
  const [cards, setCards] = useState({});
  // const id = match.id
  let params = useParams();
  console.log(params);

  useEffect(() => {
    const url = `http://localhost:3000/api/cards/${params.id}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch(() => setError(true));
  }, []);

  return (
    <div className="gallery">
      <img src={cards.url} alt="picture" />
    </div>
  );
};

export default CardDetail;
