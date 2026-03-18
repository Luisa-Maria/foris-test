import { useNavigate } from "react-router-dom";
import Button from "../components/buttons/button";

const HomePage = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate("/game");
  };

  return (
    <div
      style={{
        maxWidth: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "8rem",
      }}
    >
      <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "1fr" }}>
        <img
          src="src/assets/rick-and-morty-31015.png"
          alt="login"
          style={{
            width: "500px",
            justifySelf: "center",
          }}
        ></img>

        <div
          style={{
            borderRadius: "10px",
            padding: "5rem",
            backgroundColor: "#D8E054",
            border: "solid #A2F2F9 8PX",
          }}
        >
          <img
            src="src/assets/rick-and-morty-30978.png"
            alt="rick"
            style={{
              width: "300px",
              position: "absolute",
              right: "30px",
              top: "223px",
            }}
          ></img>
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              //   color: "white",
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            BIENVENIDO AL JUEGO DE MEMORIA DE RICK & MORTY{" "}
          </h2>
          <p style={{ fontSize: "30x" }}>
            Has quedado atrapado en una anomalía temporal donde las variantes de
            Rick, Morty y el resto de la familia Smith se han mezclado en un
            mazo de cartas caótico. Tu misión es estabilizar la realidad
            encontrando los pares idénticos para enviarlos de vuelta a su
            dimensión de origen.
          </p>

          <h3 style={{ display: "flex", color: "green" }}>Reglas Básicas</h3>

          <ul style={{ fontSize: "20x" }}>
            <li>Las cartas son barajeadas al inciar cada juego.</li>
            <li>Las cartas inician boca abajo.</li>
            <li>En cada turno, puedes voltear dos cartas.</li>
            <li>
              Si las imágenes coinciden: ¡Felicidades! Te quedas con el par y
              ganas un turno extra inmediatamente.
            </li>
            <li>
              Si las imágenes son diferentes: las cartas se ponen boca abajo en
              el mismo lugar donde estaban. El turno pasa al siguiente jugador a
              la derecha.
            </li>
            <li>
              El juego termina cuando se hayan recolectado todos los pares.
            </li>
          </ul>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              name="start"
              label="COMENZAR"
              CustomStyle={{
                padding: "10px 50px 10px 50px",
              }}
              action={() => {
                startGame();
              }}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
