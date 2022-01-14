const URL = "https://90h9amptse.execute-api.us-east-1.amazonaws.com";
let fetchData = (data, token=null) => ({
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token
  },
});

async function loginUser(credentials) {
  let data = await fetchData(credentials);
  return fetch(`${URL}/auth/login`, data);
}

async function signUp(credentials, token) {
  let data = await fetchData(credentials, token);
  debugger
  return fetch(`${URL}/user`, data);
}

export default {
  loginUser,
  signUp,
};
