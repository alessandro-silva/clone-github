import React from 'react';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

// eslint-disable-next-line object-curly-newline
import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
} from './styles';

const Profile: React.FC = () => (
  <Container>
    <Main>
      <LeftSide>
        <ProfileData
          username="alessandro-silva"
          name="Alessandro Silva"
          avatarUrl="https://avatars1.githubusercontent.com/u/54153011?v=4"
          followers={887}
          following={7}
          company="Midascorporate"
          location="Mato Grosso do Sul, Brazil"
          email="alessandro.rds03@gmail.com"
          blog="linkedin.com/in/alessandro-silva"
        />
      </LeftSide>

      <RightSide>
        <Repos>
          <h2>Random repos</h2>

          <div>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <RepoCard
                key={n}
                username="alessandro-silva"
                reponame="clone-github"
                description="Clone do github com requisições na api do github"
                language={n % 3 === 0 ? 'Javascript' : 'Typescript'}
                stars={8}
                forks={4}
              />
            ))}
          </div>
        </Repos>

        <CalendarHeading>
          Random calendar (do not represent actual data)
        </CalendarHeading>

        <RandomCalendar />
      </RightSide>
    </Main>
  </Container>
);

export default Profile;
