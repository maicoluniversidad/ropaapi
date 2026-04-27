import { useEffect, useState } from "react";

function Favorito() {
  const [favorites, setFavorites] = useState<any[]>([]);

  // cargar favoritos
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(stored);
  }, []);

  const toggleFavorite = (id: number) => {
    let stored = JSON.parse(localStorage.getItem("favorites") || "[]");

    stored = stored.filter((item: any) => item.id !== id);

    localStorage.setItem("favorites", JSON.stringify(stored));
    setFavorites(stored);
  };

  return (
    <div>
      <h1>Favoritos</h1>

      {favorites.length === 0 ? (
        <p>No tienes productos favoritos</p>
      ) : (
        <div>
          {favorites.map((p: any) => (
            <div key={p.id}>
              <img src={p.image} width="100" />

              <h3>
                {p.title}
                <button onClick={() => toggleFavorite(p.id)}>
                  ❤️
                </button>
              </h3>

              <p>${p.price}</p>
              <p>{p.category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorito;