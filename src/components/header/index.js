import { useState } from 'react';
import useGit from '../../hooks/git-hooks';
import * as S from './styled';

const Header = () => {
  const { getUser } = useGit();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;

    return getUser(usernameForSearch);
  };

  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Username para pesquisar..."
          onChange={e => setUsernameForSearch(e.target.value)}
        />
        <button type="submit" onClick={submitGetUser} accessKey="b">
          <span>
            <u>B</u>uscar
          </span>
        </button>
      </S.Wrapper>
    </header>
  );
};
export default Header;
