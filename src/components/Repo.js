import React from 'react';

const Repo = ({ repo }) => (
  <div className="card card-body mb-2">
    <div className="row">
      <div className="col-md-6">
        <a href={repo.html_url} target="blank">{repo.name}</a>
      </div>
      <div className="col-md-6">
        <span>Stars: {repo.stargazers_count}</span>
        <span>Watch: {repo.watchers_count}</span>
        <span>Forks: {repo.forks_count}</span>
      </div>
    </div>
  </div>
);

export default Repo;