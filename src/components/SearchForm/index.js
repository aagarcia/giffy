import React from "react";
import { useLocation } from "wouter";
import useForm from "./hook";
import css from "./SearchForm.module.css";

const RATINGS = ["g", "pg", "pg-13", "r"];

function SearchForm({ initialKeyword = '', initialRating = 'g' }) {
  
  const {keyword, rating, times, updateKeyword, updateRating} = useForm({ initialKeyword, initialRating })

  // eslint-disable-next-line no-unused-vars
  const [_, pushLocation] = useLocation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleChange = (evt) => {
    updateKeyword(evt.target.value);
  };

  const handleChangeRating = (evt) => {
    updateRating(evt.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className={css["c-search"]}>
      <button className={css["c-search-btn"]}>Buscar</button>
      <input
        placeholder="Search a gif here..."
        type="text"
        value={keyword}
        onChange={handleChange}
        className={css["c-search-input"]}
      />
      <select className={css["c-search-list"]} onChange={handleChangeRating} value={rating}>
        <option disabled>Rating:</option>
        {RATINGS.map((rating) => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
      <small>{times}</small>
    </form>
  );
}

export default React.memo(SearchForm);
