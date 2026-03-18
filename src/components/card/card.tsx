interface CardProps {
  name: string;
  status: string;
  species: string;
  id: string;
  image: string;
  flipped: boolean;
  matched: boolean;
  onFlip: (id: string) => void;
}
const CardCharacters = ({
  name,
  status,
  species,
  id,
  image,
  flipped,
  matched,
  onFlip,
}: CardProps) => {
  return (
    <div
      onClick={() => onFlip(id)}
      style={{
        borderRadius: "6px",
        backgroundColor: "#FFFFFF",
        width: "161px",
        height: "200px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
        padding: "10px",
        opacity: matched ? 0 : 1,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
          transform: flipped ? "rotateY(0deg)" : "rotateY(180deg)",
        }}
      >
        {/* SIDE FRONT */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            background: "#fff",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <img
            src={image}
            alt={name}
            style={{
              width: "100%",
              height: "140px",
              objectFit: "cover",
            }}
          />

          <div>
            <p style={{ fontWeight: "bold", margin: "0px" }}>{name}</p>
            <p style={{ margin: "0px" }}>
              {species} - {status}
            </p>
          </div>
        </div>

        {/* SIDE BACK */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: "#A2F2F9",
            borderRadius: "8px",
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          <img
            src="src/assets/rick-and-morty-31043.png"
            alt={name}
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CardCharacters;
