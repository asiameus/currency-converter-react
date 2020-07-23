import React from "react";
import "./style.css";

const Form = () => (
  <form className="form">
    <p className="form__section">
      <label className="form__label" for="amount">Wpisz kwotę w PLN</label>
      <input className="form__field" name="amount" id="amount" type="number" min="0.01"
        step="0.01" required />
    </p>
    <p className="form__section">
      <label className="form__label" for="currency">Wybierz docelową walutę</label>
      <select className="form__field" name="currency" id="currency">
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="USD">USD</option>
      </select>
    </p>
    <p>
      <button className="form__button">Przelicz</button>
    </p>
  </form>
);

export default Form;