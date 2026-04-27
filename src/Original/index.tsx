import { useEffect, useState } from "react";

function Original() {
  const [products, setProducts] = useState<any[]>([]);
  const [order, setOrder] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (order === "menor") return a.price - b.price;
    if (order === "mayor") return b.price - a.price;
    return 0;
  });

  return (
    <div>
      <h1>Ordenar Productos</h1>

      <select onChange={(e) => setOrder(e.target.value)}>
        <option value="">Sin ordenar</option>
        <option value="menor">Precio menor a mayor</option>
        <option value="mayor">Precio mayor a menor</option>
      </select>

      {sortedProducts.map((p: any) => (
        <div key={p.id}>
          <img src={p.image} width="100" />
          <h3>{p.title}</h3>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Original;