import Layout from './components/layout';
import NoSearch from './components/no-search';
import Profile from './components/profile';
import Repositories from './components/repositories';
import useGit from './hooks/git-hooks';

const App = () => {
  const { gitState } = useGit();
  return (
    <Layout>
      {gitState.hasUser ? (
        <>
          {gitState.loading ? (
            <p>Loading ...</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;
