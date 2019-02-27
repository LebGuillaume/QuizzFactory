const SERVER = "localhost";
const PORT = 8081;
const HTTP_SERVER_PORT = 'http://' + SERVER + ':' + PORT + "/";
const PICTURES = "pictures";
const PICTURES_PUBLIC = "img";
const HTTP_SERVER_PORT_PICTURES = HTTP_SERVER_PORT + PICTURES + "/";
const HTTP_SERVER_PORT_PICTURES_PUBLIC = HTTP_SERVER_PORT + PICTURES_PUBLIC + "/";
const VIDEOS = "videos";
const HTTP_SERVER_PORT_VIDEOS = HTTP_SERVER_PORT + VIDEOS + "/";

let modified= false;

function isModified() {
  return modified;
}

function modify() {
  modified=true;
}




export {
  SERVER,
  PORT,
  HTTP_SERVER_PORT,
  PICTURES,
  HTTP_SERVER_PORT_PICTURES,
  VIDEOS,
  HTTP_SERVER_PORT_VIDEOS,
    HTTP_SERVER_PORT_PICTURES_PUBLIC


};
