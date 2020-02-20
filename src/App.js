import 'dotenv/config'

import React from 'react';
import Axios from 'axios';

import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Repo from './components/Repo';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      github: {
        url: "https://api.github.com/users",
        count: 7,
        sort: "created: asc"
      },
      user: [],
      repos: []
    }
  }

  getUser = (e) => {
    const user = e.target.value;

    const { url, client_id, client_secret, count, sort } = this.state.github;
    Axios
      .get(
        `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
      )
      .then(({ data }) => this.setState({ user: data }));
    Axios
      .get(
        `${url}/${user}/repos?per_page=${count}${sort}&client_id=${client_id}&
      clint_secret=${client_secret}`
      )
      .then(({ data }) => this.setState({ repos: data }));
  }

  renderProfile = () => {
    const { user, repos } = this.state;

    return (
      <div className="row">
        <div className="col-md-4" style={{ marginTop: "10px" }}>
          <Profile user={user} />
        </div>
        <div className="col-md-8" style={{ marginTop: "10px" }}>
          {repos.map(repo => <Repo key={repo.name} repo={repo} />)}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="card card-body">
            <h1>Pesquisar Usuário</h1>
            <form action="">
              <input
                onBlur={this.getUser}
                type="text" 
                id="search"
                placeholder="Digite o nome do usuário"
                className="form-control required"
              />
            </form>
            <button
              className="btn btn-dark btn-block"
              style={{
                width: "100px",
                alignSelf: "center",
                marginTop: "20px"
              }}> Buscar </button>
          </div>

          {this.state.user.length !== 0 ? this.renderProfile() : null}
        </div>
      </div>
    );
  }
}

export default App;
