export function getAccessToken() {
  return localStorage.accessToken;
}

export const setAccessToken = (accessToken) => localStorage.setItem('accessToken', accessToken);

export const clearAccessToken = () => localStorage.removeItem('accessToken');

export const getQueryParamByName = (url = window.location.href, queryParam) => {
  // if (!url) url = window.location.href;
  const result = queryParam.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${result}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
