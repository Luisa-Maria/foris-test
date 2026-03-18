import { useNavigate } from "react-router-dom";
import Button from "../components/buttons/button";
import Input from "../components/inputs/Input";
import { login } from "../helper/authLogin";
import Layout from "../layout/Layout";

const Login = () => {
  const navigate = useNavigate();
  const handleAction = (formData: FormData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    if (typeof email === "string" && typeof password === "string") {
      const Validate = Validation(email, password);
      if (Validate) {
        const sucess = login(email, password);
        if (sucess) {
          navigate("/home");
        }
      }
    } else {
      console.error("Campos inválidos");
    }
  };

  const Validation = (email: string, password: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email == "" || password == "") {
      alert("Por favor, ingresa las credenciales");
    } else if (!emailRegex.test(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return false;
    } else {
      return true;
    }
  };

  return (
    <Layout>
      <div
        style={{
          backgroundColor: "#FFFAC2",
          padding: "2rem",
          borderRadius: "8px",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "1.5rem",
        }}
      >
        <img
          src="src/assets/rick-and-morty-31015.png"
          alt="login"
          style={{
            width: "300px",
            justifySelf: "center",
          }}
        ></img>
        <form
          action={handleAction}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
            width: "100%",
          }}
        >
          <Input name="email" label="Usuario" type="text" />
          <Input name="password" label="Contraseña" type="password" />
          <Button
            name="login"
            label="Iniciar sesion"
            typeButton="submit"
          ></Button>
        </form>
        <p
          style={{
            justifyContent: "center",
            display: "flex",
            opacity: "50%",
            fontWeight: "500",
          }}
        >
          ¿Olvidaste tu usuario o Contraseña?
        </p>
      </div>
    </Layout>
  );
};

export default Login;
