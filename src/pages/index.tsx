import React from 'react';
import { H1, H3, H4, P } from '@/components/Typography';
import styled from 'styled-components';
import Main from '@/components/Main';
import avatar from '../assets/img/avatar.jpg';
import email from '../assets/icons/email.png';
import github from '../assets/icons/github.png';
import linkedin from '../assets/icons/linkedin.png';

const Header = styled.section`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #1a11254b;
  padding-bottom: 2rem;
  flex-wrap: wrap;
`;
const Avatar = styled.img`
  border-radius: 5px;
  width: 30%;
  @media (max-width: 1200px) {
    width: 100%;
    margin-bottom: var(--space-2)
  }
`;
const HeaderText = styled.div`
  flex: 1 1 60%;
  padding-left: var(--space-3);
  @media (max-width: 1200px) {
    flex-basis: 100%;
    padding-left: 0;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.img`
  width: 10%;
  margin-right: var(--space-2);
`;

const StyledH1 = styled(H1)`
  letter-spacing: 0.2rem;
`;

const StyledH3 = styled(H3)`
  letter-spacing: 0.1rem;
`;

const StyledP = styled(P)`
  margin-top: 2rem;
`;

const DescriptionItem = styled(P)`
  margin-bottom: var(--space-1);
`;

const Span = styled.span`
  display: block;
`;
const SectionTitle = styled(H3)`
  margin-bottom: var(--space-1);
`;

const Content = styled.section`
  display: flex;
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

const Left = styled.div`
  flex: 1 1 35%;
  border-right: 1px solid #1a11254b;
  margin-top: var(--space-3);
  @media (max-width: 1200px) {
    border-right: 0;
  }
`;

const InfoSection = styled.div`
  margin-bottom: var(--space-2);
`;

const Right = styled.div`
  flex: 1 1 65%;
  margin-top: var(--space-3);
  padding-left: var(--space-3);
  @media (max-width: 1200px) {
    padding-left: 0;
    padding-top: 0;
  }
`;

const JobTitle = styled(H4)``;

const Date = styled(P)`
  color: var(--light-text);
  line-height: var(--space-2);
  margin-bottom: var(--space-1);
`;

const HoverableSpan = styled.span`
  transition: 200ms;
  &:hover {
    color: green;
  }
`;

const Home: React.FunctionComponent = () => (
  <Main>
    <Header>
      <Avatar src={avatar} />
      <HeaderText>
        <StyledH1>MAXIM FOMIN</StyledH1>
        <StyledH3>WEB DEVELOPER</StyledH3>
        <StyledP>
          I am an ambitious kind of person and always dive into the objective
          I&apos;m working on so deeply in order to perform it as nice as
          possible. In fact, if something attracts me it takes all my thoughts
          and makes me hardworking and energetic. I appreciate working in a team
          since I believe that good teammates may multiply each other&apos;s
          strengths.
        </StyledP>
      </HeaderText>
    </Header>
    <Content>
      <Left>
        <InfoSection>
          <SectionTitle>CONTACT</SectionTitle>
          <ContactItem>
            <Icon src={email} alt="email icon" />
            <P>fomin.max.13@gmail.com</P>
          </ContactItem>

          <ContactItem>
            {' '}
            <Icon src={github} alt="github icon" />
            <P>fominmaksim</P>
          </ContactItem>

          <ContactItem>
            {' '}
            <Icon src={linkedin} alt="linkedin icon" />
            <P>Maksim Fomin</P>
          </ContactItem>
        </InfoSection>
        <InfoSection>
          <SectionTitle>EDUCATION</SectionTitle>
          <DescriptionItem>
            <Span className="accent-text-black-bold">
              English phylology faculty Master's degree
            </Span>
            Kryvyi Rih State Pedagogical University 2013-2018
          </DescriptionItem>
          <DescriptionItem>
            <Span className="accent-text-black-bold">
              School №32 Kryvyi Rih
            </Span>{' '}
            2002-2013
          </DescriptionItem>
          <DescriptionItem></DescriptionItem>
        </InfoSection>
        <InfoSection>
          <SectionTitle>SKILLS</SectionTitle>
          <DescriptionItem>
            <HoverableSpan>REACT</HoverableSpan>
          </DescriptionItem>
          <DescriptionItem>REDUX</DescriptionItem>
          <DescriptionItem>TYPESCRIPT</DescriptionItem>
          <DescriptionItem>STYLED COMPONENTS</DescriptionItem>
          <DescriptionItem>ANT DESIGN</DescriptionItem>
          <DescriptionItem>FIREBASE</DescriptionItem>
          <DescriptionItem>STORYBOOK</DescriptionItem>
          <DescriptionItem>JAVASCRIPT</DescriptionItem>
          <DescriptionItem>HTML/CSS</DescriptionItem>
          <DescriptionItem>ADOBE PHOTOSHOP</DescriptionItem>
        </InfoSection>
      </Left>
      <Right>
        <InfoSection>
          <SectionTitle>EXPERIENCE</SectionTitle>
          <JobTitle>FENA | FREELANCE</JobTitle>
          <Date>dec 2021 - jan 2021</Date>
          <DescriptionItem>
            Built an application using gatsby, typescript and styled components,
            plugged cms
          </DescriptionItem>
        </InfoSection>
        <InfoSection>
          <JobTitle>PHOTOMAGI | FREELANCE</JobTitle>
          <Date>nov 2021 - dec 2021</Date>
          <DescriptionItem>
            Built an application using react, redux, typescript, styled
            components, ant desing and firebase
          </DescriptionItem>
        </InfoSection>
        <InfoSection>
          <JobTitle>AIR | FREELANCE</JobTitle>
          <Date>sep 2021 - nov 2021</Date>
          <DescriptionItem>
            Built an application using react and styled components
          </DescriptionItem>
        </InfoSection>
        <InfoSection>
          <JobTitle>WOODWORKING MACHINE OPERATOR | EMC</JobTitle>
          <Date>sep 2020 - june 2021</Date>
          <DescriptionItem>
            Produced raw material for modular houses
          </DescriptionItem>
        </InfoSection>
        <InfoSection>
          <JobTitle>ENGLISH TEACHER | SKYENG</JobTitle>
          <Date>dec 2018 - aug 2020</Date>
          <DescriptionItem>
            Taught adults beginner - upper-intermediate levels
          </DescriptionItem>
        </InfoSection>
        <InfoSection>
          <JobTitle>INTERPRETER | ARCELOR MITTAL</JobTitle>
          <Date>sep 2017 - nov 2018</Date>
          <DescriptionItem>
            Translated documentration, daily meetings, accompanied foreign
            specialists at the facility
          </DescriptionItem>
        </InfoSection>
      </Right>
    </Content>
  </Main>
);

export default Home;
