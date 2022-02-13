import axios from 'axios';
import { getAuthHeader } from './aesEncryption';
import { log } from './debugger';

export default async ({ url, data, method, contentType }) => {
  const result = await axios({
    url,
    method: method || 'POST',
    data,
    headers: {
      'Content-type': contentType || 'application/json',
      ...(getAuthHeader() || {}),
    },
  });
  return result.data;
};
