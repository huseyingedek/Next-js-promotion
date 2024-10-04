import Image from "next/image";
import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { LanguageDropdown } from "@/src/Core/index";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("tr");
  const [activeMenuItem, setActiveMenuItem] = useState("Anasayfa");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleChangeLanguage = (code: string) => {
    setSelectedLanguage(code);
    setIsDropdownOpen(false);
  };

  const handleMenuItemClick = (menuItem: string) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <header className="sticky top-0 z-50 transition-top duration-300">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="" className="flex items-center">
            <Image
              src="/img/asdd.png"
              alt="Flowbite Logo"
              width={130}
              height={36}
              className="mr-3 h-14 sm:h-16"
            />
          </a>
          <div className="flex items-center lg:order-2">
            <div className="hidden lg:block">
              <LanguageDropdown
                isOpen={isDropdownOpen}
                toggleDropdown={toggleDropdown}
                selectedLanguage={selectedLanguage}
                handleChangeLanguage={handleChangeLanguage}
              />
            </div>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <MenuOutlined className="w-6 h-6" />
              ) : (
                <CloseOutlined className="w-6 h-6" />
              )}
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {["Anasayfa", "Hizmetlerimiz", "Hakkımızda", "Ürünlerimiz", "Takım", "İletişim"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={() => handleMenuItemClick(item)}
                    className={`block py-2 pr-4 pl-3 rounded lg:p-0 ${
                      activeMenuItem === item
                        ? "text-white bg-primary-700 lg:bg-transparent lg:text-primary-700 dark:text-white"
                        : "text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="block lg:hidden mt-4 lg:mt-0 lg:ml-auto ml-auto">
                <LanguageDropdown
                  isOpen={isDropdownOpen}
                  toggleDropdown={toggleDropdown}
                  selectedLanguage={selectedLanguage}
                  handleChangeLanguage={handleChangeLanguage}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;