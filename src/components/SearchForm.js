import React, { useState } from "react";

export default function SearchForm(props) {
  const [searchCriteria, setSearchCriteria] = useState({ criteria: "" });

  const handleChange = event => {
    setSearchCriteria({
      ...searchCriteria,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.setNameToSearch(searchCriteria.criteria);
    setSearchCriteria({ criteria: "" });
  };

  return (
    <section className="search-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="criteria">Search</label>
        <input
          id="criteria"
          value={searchCriteria.criteria}
          onChange={handleChange}
          placeholder="Search"
          name="criteria"
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
