import React, { useState } from "react";

const Home = () => {
  const [campaignName, setCampaignName] = useState("");
  const [message, setMessage] = useState("");
  const [csvFile, setCsvFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("csvFile", csvFile);
    formData.append("name", campaignName);
    formData.append("message", message);
    try {
      const response = await fetch("/api/v1/campaign", {
        method: "POST",
        body: formData,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Create Campaign</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Campaign Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={campaignName}
              onChange={(e) => setCampaignName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              id="message"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="csvFile">Upload contacts (CSV File)</label>
            <input
              type="file"
              id="csvFile"
              name="csvFile"
              accept=".csv"
              required
              onChange={(e) => setCsvFile(e.target.files[0])}
            />
          </div>

          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
