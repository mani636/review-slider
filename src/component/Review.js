import React from 'react';
import data from '../data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { useState } from 'react';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  const randomUserClickHandler = () => {
    const randomUser = Math.trunc(Math.random() * data.length);
    setIndex(randomUser);
  };

  const prevUser = () => {
    let lastUser = data.length - 1;
    if (index === 0) {
      setIndex(lastUser);
      return;
    }
    setIndex((index) => index - 1);
  };

  const nextUser = () => {
    let lastUser = data.length - 1;
    if (index === lastUser) {
      setIndex(0);
      return;
    }
    setIndex((index) => index + 1);
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <div className='author'>{name}</div>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevUser}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextUser}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomUserClickHandler}>
        Random User
      </button>
    </article>
  );
};

export default Review;
