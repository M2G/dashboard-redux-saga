const STORAGE_KEY_ACCESS_TOKEN = 'accessToken';
const STORAGE_KEY_REFRESH_TOKEN = 'refreshToken';
const STORAGE_KEY_USER = 'user';

function setAccessTokenStorage(authData: string) {
  return localStorage.setItem(STORAGE_KEY_ACCESS_TOKEN, authData);
}
function getAccessTokenStorage() {
  return localStorage.getItem(STORAGE_KEY_ACCESS_TOKEN);
}
function clearAccessTokenStorage() {
  return localStorage.removeItem(STORAGE_KEY_ACCESS_TOKEN);
}

function setRefreshTokenStorage(authData: string) {
  return localStorage.setItem(STORAGE_KEY_REFRESH_TOKEN, authData);
}
function getRefreshTokenStorage() {
  return localStorage.getItem(STORAGE_KEY_REFRESH_TOKEN);
}
function clearRefreshTokenStorage() {
  return localStorage.removeItem(STORAGE_KEY_REFRESH_TOKEN);
}

function setUserStorage(userData?: string) {
  return localStorage.setItem(STORAGE_KEY_USER, userData as string);
}
function getUserStorage() {
  return localStorage.getItem(STORAGE_KEY_USER);
}
function clearUserStorage() {
  return localStorage.removeItem(STORAGE_KEY_USER);
}

export {
  clearAccessTokenStorage,
  clearRefreshTokenStorage,
  clearUserStorage,
  getAccessTokenStorage,
  getRefreshTokenStorage,
  getUserStorage,
  setAccessTokenStorage,
  setRefreshTokenStorage,
  setUserStorage,
}
