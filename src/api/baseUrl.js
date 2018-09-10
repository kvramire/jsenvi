export default function getBaseUrl(){
  const inDeveleopment = window.location.hostname === 'localhost';
  return inDeveleopment ? 'http://localhost:3001/' : '/';
}
