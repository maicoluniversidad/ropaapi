import { useEffect, useState } from "react";

function Usuarios() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>

      {users.map((u: any) => (
        <div key={u.id}>
          <h3>
            {u.name.firstname} {u.name.lastname}
          </h3>

          <p>Usuario: {u.username}</p>
          <p>Email: {u.email}</p>
          <p>Ciudad: {u.address.city}</p>
        </div>
      ))}
    </div>
  );
}

export default Usuarios;