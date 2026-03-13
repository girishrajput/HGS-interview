import megaMenuImg from '../assets/images/mega-menu-left.png';
import megaMenuData from '../data/megaMenu.json';

function MegaMenu({ isMobile = false, setOpen }) {
  const desktopStyles = "absolute top-full left-0 w-full bg-white shadow-2xl border-t z-50 top-0";
  const mobileStyles = "w-full space-y-4";
  return (
    <div
      className={isMobile ? mobileStyles : desktopStyles}
      onMouseEnter={() => !isMobile && setOpen(true)}
      onMouseLeave={() => !isMobile && setOpen(false)}
    >
      <div className={`${!isMobile ? "max-w-7xl mx-auto p-10" : ""} `}>
        <div className="flex-wrap flex md:flex-nowrap gap-4 max-h-[360px] overflow-y-auto items-center">
          <div className="w-full md:w-2/5 pe-0 md:pe-8">
            <div className="pe-0 md:pe-8 py-4 md:py-0">
              <img src={megaMenuImg} className="w-full" alt="Mega Menu" />
            </div>
          </div>
          <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-28 w-full md:w-3/5 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-28">
            {megaMenuData.categories.map((category, index) => (
              <div key={index}>
                <h4 className="font-semibold text-black mb-4">{category.title}</h4>
                <ul className="space-y-3 text-sm">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="font-normal hover:text-blue-600 cursor-pointer">
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MegaMenu;