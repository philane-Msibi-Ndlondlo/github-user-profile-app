import React from 'react';
import './Profile.css';
//IMPORTS

const Profile = ({user, repos, loading, error}) => {

  if (user === null && !loading) {
    return (
      <div className='no-user-info-container'>
        <h1>No GitHub User information Searched!</h1>
      </div>
    );
  }

  if (loading) {
    return (
      <div className='no-user-info-container'>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className='no-user-info-container'>
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className='profile'>
        <img src={user.avatar_url} className='user-pic' alt="A user's profile" />
        <div className='profile-info'>
            <h1>{user.name}</h1>
            <p className='job-title'>Software Developer</p>
            <div className='stats'>
                <div className='stat'>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                    <span>{user.followers}</span>
                </div>
                <div className='stat'>
                    <i className="fa fa-heart" aria-hidden="true"></i>
                    <span>{user.following}</span>
                </div>
                <div className='stat'>
                    <i className="fa fa-tasks" aria-hidden="true"></i>
                    <span>{user.public_repos}</span>
                </div>
            </div>
            <p className='description'>{user.bio}</p>
            
        </div>
      </div>
      <div className='more'>
        <h1>Repos</h1>
        <ul>
            
            {
              repos.map(repo => (
                <li key={repo.id}>
                  <a href={repo.html_url}>
                      <p className='repoTitle'>{repo.name}</p>
                      <p className='repoDesc'>{repo.description ? repo.description : 'No Description'}</p>
                  </a>
              </li>
              ))
            }
        </ul>
      </div>
    </div>
  );
}

export default Profile;
