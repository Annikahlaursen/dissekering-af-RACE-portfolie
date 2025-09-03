import ClientRow from "./ClientRow";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function ClientsSection() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/data/clients.json");
      const data = await response.json();
      setClients(data);
    }
    getData();
  }, []);
  return (
    <section id="clients">
      <div className="headline-container">
        <h2>Clients</h2>
      </div>
      {clients.map((client) => (
        <ClientRow client={client} key={client.id} />
      ))}
      <NavLink to={`/clients/${clients.id}`}>Læs mere</NavLink>
    </section>
  );
}
