import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MTH_CARDS_API } from '../constants/constants';
import { HEROKU_BYPASS_CORS } from './../constants/constants';

import Cards from './../components/cards';

// export default class HomePage extends react.Component {
export default function HomePage() {
  const [allCards, setAllCards] = useState(undefined);
  const [isCardsFiltered, setIsCardsFiltered] = useState(false);
  const [returnedFilteredCards, setReturnedFilteredCards] = useState([]);

  const user = localStorage.getItem('username');

  useEffect(() => {
    axios.get(HEROKU_BYPASS_CORS + MTH_CARDS_API)
      .then((result) => {
        setAllCards(result.data.cards);
      })
  }, [])

  const handleFiltering = (input) => {
    setIsCardsFiltered(true)
    let setFilteredCards = allCards.filter((value) => {
      return value.name.toLowerCase().includes((input.target.value).toLowerCase())
    })
    setReturnedFilteredCards(setFilteredCards);
  }

  return (
    <div className='Component'>
      <div className="container mb-5">
        <h1 className='heading'>Welcome to Magic The Gathering Cards Collection, {user}! </h1>
        <form className='col-md-6 m-auto'>
          <p className='mt-5'>Search for a Card</p>
          <input type='text'
            name='username'
            onChange={handleFiltering}
            className='form-control'
          />
          <br />
          <br />
        </form>
        <div className='d-flex justify-content-between wrap'>
          {
            (!isCardsFiltered) ?
              <> {
                (allCards !== undefined) ?
                  allCards.map((value, index) => {
                    let img;
                    value.hasOwnProperty('imageUrl') ? img = value.imageUrl : img = 'https://via.placeholder.com/150'
                    return <Cards key={index}
                      name={value.name}
                      imageUrl={img}
                      species={value.species}
                      gender={value.gender}
                      id={value.id}
                    />
                  }) :
                  <div className='d-flex justify-content-center col-md-3'>
                    <img src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' className='col-8 col-md-12' alt='loading' />
                  </div>
              }
              </> : <>
                {
                  (returnedFilteredCards !== undefined) ?
                    returnedFilteredCards.map((value, index) => {
                      let img;
                      value.hasOwnProperty('imageUrl') ? img = value.imageUrl : img = 'https://via.placeholder.com/150'
                      return <Cards key={index}
                        name={value.name}
                        imageUrl={img}
                        id={value.id}
                      />
                    }) :
                    <div className='d-flex justify-content-center col-md-3'>
                      <img src='https://flevix.com/wp-content/uploads/2019/07/Bubble-Preloader-1.gif' className='col-8 col-md-12' alt='loading' />
                    </div>
                }
              </>
          }
        </div>
      </div>
    </div>
  );
}