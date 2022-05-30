import axios from 'axios';

export const urlServer = "http://localhost:9000"

export const login = async (form) => {
  try {
    const res = await axios.post(`${urlServer}/login`, form)
    return res
  } catch (err) {
    console.log(`err call login in api ${err}`);
  }
}