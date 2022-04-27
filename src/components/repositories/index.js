import { useEffect, useState } from 'react';
import RepositoriesItem from '../repository-item';
import * as S from './styled';
import useGit from '../../hooks/git-hooks';

const Repositories = () => {
  const { gitState, getUserRepos, getUserStarred } = useGit();
  const [hasUserForSearchrepos, setHasUserForSearchrepos] = useState(false);

  useEffect(() => {
    if (gitState.user.login) {
      getUserRepos(gitState.user.login);
      getUserStarred(gitState.user.login);
    }
    setHasUserForSearchrepos(gitState.repositories);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gitState.user.login]);

  return (
    <>
      {hasUserForSearchrepos ? (
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositórios</S.WrapperTab>
            <S.WrapperTab>Estrelas</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {gitState.repositories.map(item => (
                <RepositoriesItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {gitState.starred.map(item => (
                <RepositoriesItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  );
};

export default Repositories;
