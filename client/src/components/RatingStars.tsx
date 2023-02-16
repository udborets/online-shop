import React from 'react'
import filledStar from  '../assets/filledStar.png';
import star from  '../assets/star.png';
import RatingStarsProps from '../models/IRatingStarsProps';
import '../styles/RatingStars.scss';

const RatingStars = ({rating} : RatingStarsProps) => {
  return (
    <div className='rating-stars'>
      {[1, 2, 3, 4, 5].map((_, index) => {
        if (index < rating) {
          return <img key={index} className='rating-stars__star' src={filledStar} alt="" />;
        }
        return <img key={index} className='rating-stars__star' src={star} alt="" />;
      })}
    </div>
  )
}

export default RatingStars