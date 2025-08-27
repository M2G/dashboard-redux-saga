const STORAGE_KEY_ACCESS_TOKEN = 'accessToken';
const STORAGE_KEY_REFRESH_TOKEN = 'refreshToken';
const STORAGE_KEY_USER = 'user';
const KEY_AUTH_STORAGE = 'auth-store';

function setAccessTokenStorage(authData: string) {
  localStorage.setItem(STORAGE_KEY_ACCESS_TOKEN, authData);
}
function getAccessTokenStorage() {
  return localStorage.getItem(STORAGE_KEY_ACCESS_TOKEN);
}
function clearAccessTokenStorage() {
  localStorage.removeItem(STORAGE_KEY_ACCESS_TOKEN);
}

function setRefreshTokenStorage(authData: string) {
  localStorage.setItem(STORAGE_KEY_REFRESH_TOKEN, authData);
}
function getRefreshTokenStorage() {
  return localStorage.getItem(STORAGE_KEY_REFRESH_TOKEN);
}
function clearRefreshTokenStorage() {
  localStorage.removeItem(STORAGE_KEY_REFRESH_TOKEN);
}

function setUserStorage(userData?: string) {
  localStorage.setItem(STORAGE_KEY_USER, userData as string);
}
function getUserStorage() {
  return localStorage.getItem(STORAGE_KEY_USER);
}
function clearUserStorage() {
  localStorage.removeItem(STORAGE_KEY_USER);
}

function setAuthStorage(userData?: string) {
  localStorage.setItem(KEY_AUTH_STORAGE, userData as string);
}
function getAuthStorage() {
  return localStorage.getItem(KEY_AUTH_STORAGE);
}

function clearAuthStorage() {
  localStorage.removeItem(KEY_AUTH_STORAGE);
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
  setAuthStorage,
  getAuthStorage,
  clearAuthStorage,
};
