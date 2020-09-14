import React from 'react';

import { Container, GithubLogo, SearchForm } from './styles';

const Header: React.FC = () => {
  console.log();

  return (
    <Container>
      <GithubLogo />
      <SearchForm>
        <input placeholder="Enter Username or Repo..." />
      </SearchForm>
    </Container>
  );
};

export default Header;
