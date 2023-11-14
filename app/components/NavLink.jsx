import Link from "next/link";

const NavLink = ({ href, title }) => {
  // Diese Funktion wird aufgerufen, wenn ein Link angeklickt wird
  const handleClick = (e) => {
    e.preventDefault(); // Verhindert das Standard-Verhalten des Browsers
    const hrefWithoutHash = href.slice(1); // Entfernt das Hash-Zeichen (#) am Anfang der href
    const element = document.getElementById(hrefWithoutHash); // Holt sich das Element, zu dem gescrollt werden soll

    // Prüft, ob das Element existiert und scrollt es in den Blick, wenn es gefunden wird
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Der Link wird durch einen div ersetzt, um das Verhalten zu kontrollieren
    <div onClick={handleClick} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:px-0 hover:text-white cursor-pointer">
      {title}
    </div>
  );
};

export default NavLink;
