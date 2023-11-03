import Navbar, {INavItems} from "./Navbar.tsx";

export interface Props {
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: INavItems[];

  /** @title Logo */
  logo?: { src: string, alt: string };

  routes?: {
    cart: string;
    account: string;
    search: string;
  };
}

function Header({
  navItems,
  logo,
  routes
}: Props) {
  const items = navItems ?? [
    { title: "Categorias", href: "/" },
    { title: "Ofertas do dia", href: "/" },
    { title: "Lançamentos", href: "/" },
  ];

  return (
    <>
      <header class="flex items-center bg-zinc-900 text-gray-400 z-50 w-full fixed min-h-16">
            <Navbar
              navItems={items}
              logo={logo}
              routes={routes}
            />
      </header>
      <p class="w-full h-16"></p>
    </>
  );
}

export default Header;
