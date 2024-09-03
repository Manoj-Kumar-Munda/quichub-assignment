import React from "react";

const Home = () => {
  return (
    <div className="container">
      <div className="form-container">
        <h2>Create Campaign</h2>
        <form className="form">
          <div className="form-group">
            <label htmlFor="name">Campaign Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <input type="text" id="message" name="message" required />
          </div>
          <div className="form-group">
            <label htmlFor="csvFile">Upload CSV File</label>
            <input
              type="file"
              id="csvFile"
              name="csvFile"
              accept=".csv"
              required
            />
          </div>

          <button type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
