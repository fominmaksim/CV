import styled from 'styled-components';

const Main = styled.main`
  width: calc(1000px - 2rem * 2);
  margin: 20vh auto;
  padding: 2rem;
  box-shadow: 0 0 5rem #eeeeee;
  background-color: #ffffff;
  transition: 500ms;

  @media (max-width: 1200px) {
    width: calc(100% - 0.5rem * 2);
    height: calc(100% - 0.5rem * 2);
    padding: 0.5rem 0.5rem 1rem 0.5rem;
    margin: 0;
  }
`;
export default Main;
