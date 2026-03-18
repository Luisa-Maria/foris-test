export const login = (email: string, password: string) => {
  if (email === "prueba@test.com" && password === "1234") {
    const fakeToken = crypto.randomUUID();
    localStorage.setItem("token", fakeToken);

    return true;
  } else {
    alert("Credenciales incorrectas");
  }

  return false;
};
