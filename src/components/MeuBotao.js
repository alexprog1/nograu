import styled from 'styled-components';

const MeuBotao = styled.button`
  background: #0099ff;
  border: 2px solid #0099ff;
  border-radius: 3px;
  color: #fdfdfd;
  display: flex;
  font-size: 1.2rem;
  margin: 1rem;
  padding: 1rem 1.5rem;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;

export default MeuBotao;
