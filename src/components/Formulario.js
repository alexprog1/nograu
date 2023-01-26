import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  max-width: 80%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 380px;
  padding: 0;
  margin: auto;

  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  -webkit-text-size-adjust: 100%;

  border-radius: 8px;
  border: 1px solid #eaeaea;
  box-shadow: 0 0.5rem 1.2rem rgb(0 0 0 / 20%);

  --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
`;

/*  FORM  */
export const Form = styled.form`
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: row;
`;

export const Input = styled.input`
  width: 80%;
  flex: 1;
  display: block;
  border: 1px solid #ccc;
  padding: 0.8rem;
  margin: 0.3rem auto;
  border-radius: 0.125rem;
  outline: 0;
  transition: all ease 0.4s;

  &:focus {
    border: 1px solid #333;
    color: #333;
  }
`;
/*
  flex: 1;
  display: block;
  flex-wrap: wrap;
  min-width: 15rem;
  max-width: 25rem;
  width: auto;
  height: auto;
  padding: 24px 16px;
  border: 0;
  border-radius: 6px;'
  background-color: rgb(245, 245, 245);
*/

export const BoxCenter = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Textoh2 = styled.h2`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
  padding: 5px;
  padding-left: 0rem;
`;
// ff0054 vermelho buttom

export const TextoPequeno = styled.p`
  font-size: 0.8rem;
  padding: 1px;
  padding-left: 0rem;
  justify-content: flex-end;
`;

export const BotaoEntrar = styled.button`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');
  width: 90%;
  font-family: 'Poppins', sans-serif;

  background-color: #000;
  border: 0;
  outline: 0;
  padding: 5px 10px;
  margin: 1rem;
  border-radius: 4px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;

  transform-style: flat;
  transition: all 250ms ease-out;

  &:hover {
    background-color: #000019;
    box-shadow: 0 15px 10px -10px rgba(31, 31, 31, 0.5);
    transition: all ease 0.5s;
  }
`;
/* 
box-shadow: 0 5px 5px -3px black;

 justify-content: center;
  align-items: center;
  border-radius: 9999px;
  text-decoration: none;
  overflow: hidden;
  vertical-align: middle;
  text-align: center;
  padding-left: 0.75em;
  padding-right: 0.75em;
  padding-top: 0.75em;
  padding-bottom: 0.75em;
  margin: 1rem;
  */
