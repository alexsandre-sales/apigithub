import * as S from './styled';
import useGit from '../../hooks/git-hooks';

const Profile = () => {
  const { gitState } = useGit();

  return (
    <S.Wrapper>
      <S.WrapperImage src={gitState.user.avatar} alt="avatar do usuario" />

      <S.WrapperInfoUser>
        <div>
          <h1>{gitState.user.name}</h1>
          <S.WrapperUserGeneric>
            <h3>Nome do usuário</h3>
            <a href={gitState.user.html_url} target="_blank" rel="noreferrer">
              {gitState.user.login}
            </a>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Empresa</h3>
            <span>{gitState.user.company}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Cidade</h3>
            <span>{gitState.user.location}</span>
          </S.WrapperUserGeneric>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Seguidores</h4>
            <span>{gitState.user.followers}</span>
          </div>
          <div>
            <h4>Seguindo</h4>
            <span>{gitState.user.following}</span>
          </div>
          {/* <div>
            <h4>Gists</h4>
            <span>{gitState.user.public_gists}</span>
          </div> */}
          <div>
            <h4>Repositórios</h4>
            <span> {gitState.user.public_repos}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
