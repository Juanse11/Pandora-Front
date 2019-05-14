import { firebase } from "../components/firebase/firebase";

export const login = (user) => ({
    type: 'LOGIN',
    user
})

export const startLogout = () => {
  return () => {
      return firebase.auth().signOut();
  };
};

export const logout = () => ({
    type: 'LOGOUT'
})