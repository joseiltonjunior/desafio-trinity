import React from 'react';

const Search = () => (
  <div className="container">
    <div className="card card-body">
      <h1>Pesquisar Usuário</h1>
      <p className="lead">
        Digite o nome do usuário
      </p>
      <input type="text" id="search" className="form-control required" />
    </div>
  </div>
);

export default Search;