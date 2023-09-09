const path = (root: string, subpath: string) => `${root}${subpath}`;

const ROOT_HOME = '/';
const ROOT_AUTH = '/auth';
const ROOT_PROFILE = '/profile';
const ROOT_LOAD_FILES = '/upload-files';

export const PATH_AUTH = {
  root: ROOT_AUTH,
  login: path(ROOT_AUTH, '/login')
};

export const PATH_HOME = {
  root: ROOT_HOME
};

export const PATH_LOAD_FILES = {
  root: ROOT_LOAD_FILES
};

export const PATH_PROFILE = {
  root: ROOT_PROFILE
};
