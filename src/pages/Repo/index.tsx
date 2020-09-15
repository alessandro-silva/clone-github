import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';

const Repo: React.FC = () => (
  <Container>
    <Breadcrumb>
      <RepoIcon />
      <Link className="username" to="/alessandro-silva">
        alessandro-silva
      </Link>

      <span>/</span>

      <Link className="reponame" to="/alessandro-silva/clone-github">
        clone-github
      </Link>
    </Breadcrumb>

    <p>Clone do github com requisiçoes da api do github</p>

    <Stats>
      <li>
        <StarIcon />
        <b>9</b>
        <span>stars</span>
      </li>
      <li>
        <ForkIcon />
        <b>0</b>
        <span>forks</span>
      </li>
    </Stats>

    <LinkButton href="https://github.com/alessandro-silva/clone-github">
      <GithubIcon />
      <span>View on GitHub</span>
    </LinkButton>
  </Container>
);

export default Repo;
