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
        <label className="form__label">
          <span className="form__labelText">
            Wpisz kwotę w PLN
          </span>
          <input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            className="form__field"
            type="number"
            min="0.01"
            step="0.01"
            required
          />
        </label>
      </p>
      <p className="form__section">
        <label className="form__label">
          <span className="form__labelText">
            Wybierz docelową walutę
          </span>
          <select
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
            className="form__field"
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
        </label>
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