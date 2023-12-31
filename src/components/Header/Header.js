import siteLogo from "../../assets/images/siteLogo.png";
const Header = () => {
  return (
    <nav className="border-gray-200 dark:bg-gray-900 absolute">
      <div className="flex items-center justify-between gap-72 p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={siteLogo} className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            E V E N T
          </span>
        </a>
        <div className="items-center fle" id="navbar-cta">
          <ul className="flex flex-row font-medium p-4 ">
            <li>
              <a
                href="#"
                className="block bg-transparent py-2 px-2 text-white rounded"
              >
                Football
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block mx-4 bg-transparent py-2 px-2 text-white rounded"
              >
                BasketBall
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block mx-4 bg-transparent py-2 px-2 text-white rounded"
              >
                Concerts
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block bg-transparent py-2 px-2 text-white rounded"
              >
                Events
              </a>
            </li>
          </ul>
        </div>
        <div className="flex">
          <button
            type="button"
            className="text-white bg-transparent hover:bg-white hover:text-black border border-white font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Entrance
          </button>
          <button
            type="button"
            className="text-white bg-transparent hover:bg-white hover:text-black border border-white font-medium rounded-lg text-sm px-4 py-2 mx-4 text-center"
          >
            Help
          </button>
          <button
            type="button"
            className="text-white bg-transparent hover:bg-white hover:text-black border border-white font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Sell Tickets
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
