import { useParams } from "react-router-dom";
import films from "../data/films";

export default function Watch() {
  const { id } = useParams();
  const film = films.find((f) => f.id === id);

  if (!film) {
    return <div style={{ padding: "1rem" }}>Film not found.</div>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{film.title}</h1>
      <video width="640" height="360" controls>
        <source src={film.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p style={{ marginTop: "1rem" }}>{film.description}</p>
    </div>
  );
}
