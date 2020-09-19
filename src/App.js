import React, { useState } from 'react';
import './App.css';

//COMPONENTS IMPORTS
import Searchbar from './components/SearchBar/Searchbar';
import Profile from './components/Profile/Profile';

const githubURL = 'https://api.github.com/users';

const App = () => {

  const [ user, setUser ] = useState(null);

  const [ repos, setRepos ] = useState([]);

  const [ loading, setLoading ] = useState(false);

  const [ error, setError ] = useState(null);
  
  const searchUser = (userTerm) => {

    setLoading(true);

    fetch(`${githubURL}/${userTerm}`)
    .then(res => res.json())
    .then(userData => {

      setUser(userData);

      fetch(userData.repos_url)
      .then(res => res.json())
      .then(reposData => {

        setRepos(reposData);
        setLoading(false);

      })
      .catch(err => { setError('Github user not found or something went wrong!'); console.log(err); setLoading(false);});

    })
    .catch(err => { setError('Github user\'s repos not found or something went wrong!'); console.log(err); setLoading(false);});

  }

  return (
    <div className="App">
      <Searchbar searchUser={searchUser}/>
      <Profile user={user} repos={repos} loading={loading} error={error} />
    </div>
  );
}

export default App;
