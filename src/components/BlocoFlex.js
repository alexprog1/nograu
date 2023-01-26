import styled from 'styled-components';

export const BlocoFlex = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  min-width: 200px;
  min-height: 100px;
  justify-content: center;
  align-items: center;
  background: #f3f2f2;
  color: #000000;
  font-size: 1.2rem;
  margin: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
`;

export const ContainerBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 80%;
`;
