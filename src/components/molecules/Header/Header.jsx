import { Link } from "react-router-dom";
import Button from "components/atoms/Button";
import logo from "assets/logo.png";

const Header = () => {
  return (
    <header className="bg-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo mr-8">
          <Link className="text-gray-800 font-semibold" to="/">
            <img src={logo} alt="ir a home" className="w-16" />
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link className="text-gray-800 font-semibold" to="/comofunciona">
                ¿Cómo funciona?
              </Link>
            </li>
            <li>
              <Link className="text-gray-800 font-semibold" to="/sobrenosotros">
                Sobre Nosotros
              </Link>
            </li>
            <li className="text-gray-800 font-semibold">
              Servicios
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </li>
          </ul>
        </nav>
        <div className="ml-auto">
          <Button buttonType="primary">Iniciar Sesion</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
