import { useContext } from 'react';
import { GitContext } from '../providers/git-provider';

const useGit = () => {
  const { gitState, getUser, getUserRepos, getUserStarred } =
    useContext(GitContext);

  return { gitState, getUser, getUserRepos, getUserStarred };
};

export default useGit;
