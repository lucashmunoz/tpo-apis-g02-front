import Button from "components/atoms/Button";

const Header = () => {
  return (
    <header className="bg-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo mr-8">
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
            alt="Logo"
            className="w-16"
          />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="./" className="text-gray-800 font-semibold">
                ¿Cómo funciona?
              </a>
            </li>
            <li>
              <a href="./" className="text-gray-800 font-semibold">
                Sobre NOMBRE SITIO
              </a>
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
