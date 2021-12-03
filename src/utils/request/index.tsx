import axios from 'axios';

const instance = axios.create({
  headers: { 'X-Requested-with': 'XMLHttpRequest', 'Content-type': 'application/json;charset=UTF-8' },
});

instance.defaults.baseURL = '/api';

interface MethodType {
  method?:'get'|'post'|'put'|'delete'|'update',
}

function requset(url:string, params:MethodType & Object) {
  let { method = 'get' } = params || {};
  try {
  // eslint-disable-next-line no-param-reassign
    delete params.method;
  } catch {
    method = 'get';
  }
  const promise = instance[method](url, params).then(resp => {
    return resp.data;
  });
  return promise;
}

export default requset;
