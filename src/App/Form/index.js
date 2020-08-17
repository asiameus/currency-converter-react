import React, { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h1 className="form__header">
        Konwerter walut
      </h1>
      <p className="form__section">
        <label className="form__label" for="amount">Wpisz kwotę w PLN</label>
        <input
          value={amount}
          onChange={({ target }) => setAmount(target.value)}
          className="form__field"
          name="amount"
          type="number"
          min="0.01"
          step="0.01"
          required
        />
      </p>
      <p className="form__section">
        <label className="form__label" for="currency">Wybierz docelową walutę</label>
        <select
          value={currency}
          onChange={({ target }) => setCurrency(target.value)}
          className="form__field"
          name="currency"
        >
          {currencies.map((currency => (
            <option
              key={currency.short}
              value={currency.short}
            >
              {currency.name}
            </option>
          )))}
        </select>
      </p>
      <p>
        <button className="form__button">Przelicz</button>
      </p>
      <Result result={result} />
      <p className="form__info">
        Wg średnich kursów z dnia 17.08.2020, za: npb.pl
      </p>
      <p className="form__footer">
        © Asia Meuś 2020
      </p>
    </form>
  );
};