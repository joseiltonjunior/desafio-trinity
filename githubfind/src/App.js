import 'dotenv/config'

import React from 'react';
import Axios from 'axios';

import Navbar from './components/Navbar'
import Profile from './components/Profile'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      github: {
        url: "http://api.github.com/users",
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
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
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Navbar />

        <div className="container">
          <div className="card card-body">
            <h1>Pesquisar Usuário</h1>
            <p className="lead">
              Digite o nome do usuário
            </p>
            <input onChange={this.getUser} type="text" id="search" className="form-control required" />
          </div>
          { user.length !== 0 ? <Profile user={user}/> : null}
        </div>
      </div>
    );
  }
}

export default App;
