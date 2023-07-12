import axios from 'axios';

axios.defaults.timeout = 600000;

axios.interceptors.request.use(
  config => config,
  err => {
    return Promise.reject(err);
  },
);

axios.interceptors.response.use(
  response => response,
  error => {
    const { response = {} } = error;
    const { status, data = {} } = response;
    // TODO Show error message
    return data && Promise.reject(data) || Promise.reject(error);
  },
);

const request = (method, url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios[method](url, params).then(response => resolve(response.data)).catch(error => reject(error));
  });
};

export default {
  axios,
  get (url, params) {
    return request('get', url, { params });
  },
  post (url, params) {
    return request('post', url, params);
  },
  patch (url, params) {
    return request('patch', url, params);
  },
  put (url, params) {
    return request('put', url, params);
  },
  delete (url, params) {
    return request('delete', url, { params });
  },
  download (method, url, params, fileName) {
    return axios({
      method: method,
      url: url,
      data: params,
      responseType: 'blob'
    }).then((response) => {
      if (!response) {
        Message.error('Download failed');
        return;
      }
      if (!fileName) { // File name
        const contentDisposition = response.headers['content-disposition'];
        if (contentDisposition) {
          fileName = decodeURI(response.headers['content-disposition'].split('filename=')[1]);
        }
      }
      const link = document.createElement('a');
      link.style.display = 'none';
      link.href = window.URL.createObjectURL(new Blob([response.data]));
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(link.href);
      document.body.removeChild(link);
    });
  },
};
