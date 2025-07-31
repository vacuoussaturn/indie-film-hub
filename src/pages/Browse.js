import { Link } from "react-router-dom";
import films from "../data/films";

export default function Browse() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Browse Films</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {films.map((film) => (
          <div
  key={film.id}
  style={{ width: "300px", border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden" }}
  aria-label={`Film card for ${film.title}`}
>
  <img
    src={film.thumbnail}
    alt={`Thumbnail image for ${film.title}`}
    style={{ width: "100%" }}
  />

            <div style={{ padding: "0.5rem" }}>
              <h3>{film.title}</h3>
              <Link to={`/watch/${film.id}`}>Watch Film</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
