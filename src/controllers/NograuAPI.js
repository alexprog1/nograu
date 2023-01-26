import Cookies from 'universal-cookie';
import qs from 'qs';

const BASEAPI = 'http://localhost:3001';

const apiFetchPost = async (endpoint, body) => {
  if (!body.token) {
    let token = Cookies.get('token');
    if (token) {
      body.token = token;
    }
  }
  const res = await fetch(BASEAPI + endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const json = await res.json();

  if (json.notallowed) {
    window.location.href = '/views/login';
    return;
  }

  return json;
};

const apiFetchGet = async (endpoint, body = []) => {
  if (!body.token) {
    let token = Cookies.get('token');
    if (token) {
      body.token = token;
    }
  }
  const res = await fetch(`${BASEAPI + endpoint}?${qs.stringify(body)}`);
  const json = await res.json();

  if (json.notallowed) {
    window.location.href = '/views/login';
    return;
  }

  return json;
};

const NograuAPI = {
  login: async (user, password) => {
    const json = await apiFetchPost('/views/login', { user, password });

    return json;
  },
};

export default () => NograuAPI;
