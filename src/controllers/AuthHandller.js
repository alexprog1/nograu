import Cookies from 'universal-cookie';

export const isLogged = () => {
  let token = Cookies.get('token');
  return token ? true : false;
};

export const doLogin = (token, rememberPassword) => {
  if (rememberPassword) {
    Cookies.set('token', token, { expires: 7 });
  } else {
    Cookies.set('token', token);
  }
};
