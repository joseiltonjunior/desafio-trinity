import React from 'react';

const Repo = ({ repo }) => (
  <div className="card card-body mb-2">
    <div className="row">
      <div className="col-md-6">
        <a href={repo.html_url} target="blank">{repo.name}</a>
      </div>
      <div className="col-md-6">
        <span className="badge" style={{fontSize: "15px"}}>Stars: {repo.stargazers_count}</span>
        <span className="badge" style={{fontSize: "15px"}}>Watch: {repo.watchers_count}</span>
        <span className="badge" style={{fontSize: "15px"}}>Forks: {repo.forks_count}</span>
      </div>
    </div>
  </div>
);

export default Repo;