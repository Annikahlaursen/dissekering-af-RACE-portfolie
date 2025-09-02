import { NavLink, useParams } from "react-router-dom";

export default function ClientDetail() {
  const { id } = useParams();
  return (
    <div className="headline-container">
      <h2>Client Detail for ID: {id}</h2>
    </div>
  );
}
