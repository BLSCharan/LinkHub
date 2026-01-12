export const loginUser = () => {
  localStorage.setItem("isAuth", "true");
};

export const logoutUser = () => {
  localStorage.removeItem("isAuth");
};

export const isAuthenticated = () => {
  return localStorage.getItem("isAuth") === "true";
};
