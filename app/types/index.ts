export type userLogged = boolean;
export type loginInputs = {
  email: string;
  password: string;
  rememberMe: string;
};
export type userState = {
  loggedIn: boolean;
  email: string;
  password: string;
  rememberMe: boolean;
}
