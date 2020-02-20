import React from 'react';

const Profile = ({ user }) => (
  <div>
    <div className="row">
      <div className="col">
        <div className="card" style={{ with: "18rem" }}>
          <img src={user.avatar_url} alt="picture" className="card-img-top" />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Nome:
              <span>{user.name}</span>
            </li>
            <li className="list-group-item">
              Repositórios:
              <span >{user.public_repos}</span>
            </li>
            <li className="list-group-item">
              Seguidores:
              <span>{user.followers}</span>
            </li>
            <li className="list-group-item">
              Seguindo:
              <span>{user.following}</span>
            </li>
          </ul>
          <div className="card-body">
            <a href={user.html_url} target="blank" className="btn btn-dark btn-lg btn-block">
              Ver perfil
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;