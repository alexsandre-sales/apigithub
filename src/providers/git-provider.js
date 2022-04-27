import { createContext, useState, useCallback } from 'react';
import api from '../services/api';

export const GitContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: []
});

const GitProvider = ({ children }) => {
  const [gitState, setGitState] = useState({
    hasUser: false,
    loading: false,
    user: {
      id: undefined,
      avatar: undefined,
      login: undefined,
      name: undefined,
      html_url: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0
    },
    repositories: [],
    starred: []
  });

  const getUser = username => {
    setGitState(prevState => ({
      ...prevState,
      loading: !prevState.loading
    }));

    api
      .get(`users/${username}`)
      .then(({ data }) => {
        setGitState(prevState => ({
          ...prevState,
          hasUser: true,
          user: {
            id: data.id,
            avatar: data.avatar_url,
            login: data.login,
            name: data.name,
            html_url: data.html_url,
            company: data.company,
            location: data.location,
            followers: data.followers,
            following: data.following,
            public_gists: data.public_gists,
            public_repos: data.public_repos
          }
        }));
      })
      .finally(() => {
        setGitState(prevState => ({
          ...prevState,
          loading: !prevState.loading
        }));
      });
  };

  const getUserRepos = username => {
    api.get(`users/${username}/repos`).then(({ data }) => {
      setGitState(prevState => ({
        ...prevState,
        repositories: data
      }));
    });
  };

  const getUserStarred = username => {
    api.get(`users/${username}/starred`).then(({ data }) => {
      setGitState(prevState => ({
        ...prevState,
        starred: data
      }));
    });
  };

  const contextValue = {
    gitState,
    getUser: useCallback(username => getUser(username), []),
    getUserRepos: useCallback(username => getUserRepos(username), []),
    getUserStarred: useCallback(username => getUserStarred(username), [])
  };

  return (
    <GitContext.Provider value={contextValue}>{children}</GitContext.Provider>
  );
};

export default GitProvider;
