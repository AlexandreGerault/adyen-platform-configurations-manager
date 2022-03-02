import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-white shadow px-8 py-6">
      <ul className="flex gap-4 space-between">
        <li>
          <Link to="/" className="text-blue-600">
            Liste des configurations
          </Link>
        </li>
        <li>
          <Link to="ajouter" className="text-blue-600">
            Ajouter une configuration
          </Link>
        </li>
      </ul>
    </nav>
  );
}
