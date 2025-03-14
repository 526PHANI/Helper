import React, { useEffect, useState } from "react";
import "./Jobs.css";

const Jobs = () => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    fetch("/jobs.json")
      .then((response) => response.json())
      .then((data) => setJobList(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <div className="jobs-container">
      <h1 className="jobs-title">Job Postings</h1>

      <div className="job-list">
        {jobList.length === 0 ? (
          <p>Loading jobs...</p>
        ) : (
          jobList.map((job, index) => (
            <div key={index} className="job-carde">
              <img src={job.image} alt={job.company} className="company-logo" />
              <h3>{job.role}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Eligibility:</strong> {job.eligibility}</p>
              <p><strong>Year of Passout:</strong> {job.year_of_passout}</p>
              <a href={job.apply_link} target="_blank" rel="noopener noreferrer" className="apply-button">
                Apply Now
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Jobs;