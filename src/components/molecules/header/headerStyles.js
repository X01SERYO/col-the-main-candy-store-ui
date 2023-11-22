import styled from 'styled-components';

const ContainerHeader = styled.div`
  width: 100vw;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fbfbfe;
  box-shadow: 1px 1px 1px gray;
  position: fixed;
`;

const Menunav = styled.div`
  display: flex;
  margin-right: 5em;
  flex-direction: row;
`;
const Listitem = styled.ol`
  list-style: none;
  font-size: 18px;
  cursor: pointer;
  padding: 0em 1em;
  transform-style: none;
  text-decoration: none;
  color: #22303aee;
  font-weight: bold;
  outline-style: none;
  &:hover {
    color: #22303aee;
    color: #58b3f3;
    text-decoration: none;
  }
`;

const Logo = styled.img`
  width: 140px;
  height: 50px;
  cursor: pointer;
  padding: 0.5em 0em;
  margin-left: 5em;
`;
export { ContainerHeader, Menunav, Listitem, Logo };
