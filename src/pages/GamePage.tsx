import { useEffect, useState } from "react";
import axios from "axios";
import Confetti from "react-confetti";
import CardCharacters from "../components/card/card";
import Button from "../components/buttons/button";
import { useNavigate } from "react-router-dom";
const GamePage = () => {
  type Card = {
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
    matched: boolean;
    onFlip: (id: string) => void;
  };

  type GameCard = Card & {
    uniqueId: string;
    flipped: boolean;
    matched: boolean;
  };
  const navigate = useNavigate();
  const [cards, setCards] = useState<GameCard[]>([]);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [lockBoard, setLockBoard] = useState(true);
  const [disabledButton, setDisabledBUtton] = useState(false);
  const [turnos, setTurnos] = useState(0);
  const [aciertos, setAciertos] = useState(0);
  const gameFinished = cards.length > 0 && cards.every((card) => card.matched);

  useEffect(() => {
    async function getData(): Promise<Card[]> {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character/[1,2,3,4,5,6]",
        );
        return response.data;
      } catch (error) {
        console.error(error);
        return [];
      }
    }
    async function loadCards() {
      const apiCards = await getData();
      const duplicated = [...apiCards, ...apiCards];
      const gameCards: GameCard[] = duplicated.map((card, index) => ({
        ...card,
        uniqueId: `${card.id}-${index}`,
        flipped: false,
        matched: false,
      }));
      const shuffled = [...gameCards].sort(() => Math.random() - 0.5);
      setCards(shuffled);
    }

    loadCards();
  }, []);

  const handleFlip = (id: string) => {
    if (lockBoard) return;
    setCards((prev) =>
      prev.map((card) =>
        card.uniqueId === id ? { ...card, flipped: true } : card,
      ),
    );
    setSelectedCards((prev) => {
      const updated = [...prev, id];
      if (updated.length === 2) {
        setLockBoard(true);
      }
      return updated;
    });
  };

  const startGame = () => {
    setAciertos(0);
    setTurnos(0);
    setCards((prev) =>
      prev.map((card) => ({
        ...card,
        flipped: true,
        matched: false,
      })),
    );
    setTimeout(() => {
      setLockBoard(false);
      setDisabledBUtton(true);
      setCards((prev) =>
        prev.map((card) => ({
          ...card,
          flipped: false,
          matched: false,
        })),
      );
    }, 3000);
  };

  useEffect(() => {
    const resolveTurn = (firstId: string, secondId: string) => {
      const firstCard = cards.find((c) => c.uniqueId === firstId);
      const secondCard = cards.find((c) => c.uniqueId === secondId);

      if (!firstCard || !secondCard) return;
      if (firstCard.id === secondCard.id) {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.uniqueId === firstId || card.uniqueId === secondId
                ? { ...card, matched: true }
                : card,
            ),
          );

          setSelectedCards([]);
          setLockBoard(false);
          setAciertos(aciertos + 1);
        }, 1000);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.uniqueId === firstId || card.uniqueId === secondId
                ? { ...card, flipped: false }
                : card,
            ),
          );
          setSelectedCards([]);
          setLockBoard(false);
          setTurnos(turnos + 1);
        }, 1000);
      }
    };

    if (selectedCards.length !== 2) return;

    const [firstId, secondId] = selectedCards;

    resolveTurn(firstId, secondId);
  }, [selectedCards, cards, aciertos, turnos]);

  return (
    <div style={{ padding: " 20px 20rem " }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}>
        <section style={{ display: "grid", justifyContent: "center" }}>
          <img src="src/assets/rick-and-morty-31015.png" alt="card"></img>
          <div
            style={{
              borderRadius: "15px",
              backgroundColor: "#D8E054",
              padding: "5px",
              marginLeft: "10rem",
              marginRight: "10rem",
              alignContent: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {" "}
            Juego de memoria
          </div>
        </section>

        <section>
          <div
            style={{
              borderRadius: "8px",
              backgroundColor: "#FFFAC2",
              padding: "3rem",
            }}
          >
            <section
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0px 60px 0px 60px",
              }}
            >
              <h3>ACIERTO : {aciertos}</h3>
              <h3>TURNOS : {turnos}</h3>
            </section>
            {!gameFinished ? (
              <section
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr",
                  gap: "1rem",
                  justifyItems: "center",
                }}
              >
                {cards.map((item) => {
                  return (
                    <CardCharacters
                      key={item.uniqueId}
                      name={item.name}
                      id={item.uniqueId}
                      status={item.status}
                      species={item.species}
                      image={item.image}
                      onFlip={handleFlip}
                      flipped={item.flipped}
                      matched={item.matched}
                    ></CardCharacters>
                  );
                })}
              </section>
            ) : (
              <div style={{ display: "grid", justifyContent: "center" }}>
                <Confetti />
                <h1>¡FELICITACIONES!</h1>
                <p>Terminaste tu juego con {turnos} turnos</p>
              </div>
            )}
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                marginTop: "30px",
                gap: "1rem",
              }}
            >
              {!gameFinished ? (
                <Button
                  name="start"
                  label="JUGAR"
                  CustomStyle={{
                    padding: "10px 50px 10px 50px",
                  }}
                  action={startGame}
                  disabled={disabledButton}
                ></Button>
              ) : (
                <>
                  <Button
                    name="start"
                    label="REPETIR"
                    CustomStyle={{
                      padding: "10px 50px 10px 50px",
                    }}
                    action={() => {
                      startGame();
                    }}
                  ></Button>

                  <Button
                    name="start"
                    label="INICIO"
                    CustomStyle={{
                      padding: "10px 50px 10px 50px",
                    }}
                    action={() => {
                      navigate("/home");
                    }}
                  ></Button>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GamePage;
