import { useEffect, useState } from "react";


function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [categoria, setCategoria] = useState("all");
  const [busqueda, setBusqueda] = useState("");

  const categorias = ["all", "men", "women", "electronics", "jewelery"];

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filtrados = products
    .filter((p: any) =>
      categoria === "all" ? true : p.category.includes(categoria)
    )
    .filter((p: any) =>
      busqueda.length < 2
        ? true
        : p.title.toLowerCase().includes(busqueda.toLowerCase())
    );

  return (
    <>
      {/* filtros */}
      <div className="filtros">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoria(cat)}
            className={categoria === cat ? "activo" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* buscador */}
      <input
        type="text"
        placeholder="Buscar ropa..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {/* lista */}
      <div className="tabla-container">
        {filtrados.map((p: any) => {
          const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
          const isFavorite = favorites.some((item:any) => item.id === p.id);

          const toggleFavorite = () => {
            let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

            if (favorites.some((item:any) => item.id === p.id)) {
              favorites = favorites.filter((item:any) => item.id !== p.id);
            } else {
              favorites.push(p);
            }

            localStorage.setItem("favorites", JSON.stringify(favorites));
            window.location.reload();
          };

          return (
            <div
              key={p.id}
              className={
                busqueda.length >= 2 &&
                p.title.toLowerCase().includes(busqueda.toLowerCase())
                  ? "resaltado"
                  : ""
              }
            >
              <img src={p.image} width="100" />

              <h3>
                {p.title}
                <button onClick={toggleFavorite}>
                  {isFavorite ? "❤️" : "🤍"}
                </button>
              </h3>

              <p>${p.price}</p>
              <p>{p.category}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;