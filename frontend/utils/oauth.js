export function getAccessToken() {
  return localStorage.accessToken;
}

export function setAccessToken(accessToken) {
  localStorage.setItem('accessToken', accessToken);
}

export function clearAccessToken() {
  localStorage.removeItem('accessToken');
}

export function getQueryParamByName(url, queryParam) {
  if (!url) url = window.location.href;
  queryParam = queryParam.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + queryParam + '(=([^&#]*)|&|#|$)');
  var results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}