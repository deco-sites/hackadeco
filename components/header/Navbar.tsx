import Image from "apps/website/components/Image.tsx";

export interface INavItems {
    title: string, 
    href: string 
}

interface Props {
    navItems: INavItems[];
    logo?: { src: string, alt: string };
    routes?: {
      cart: string;
      account: string;
    }
}


function Navbar ({
    navItems,
    logo,
    routes
}: Props) {


    return (
        <nav class="flex items-center w-full justify-between container">

            <ul class="hidden items-center gap-8 lg:flex">
                { navItems.map(( item ) => 
                    <li class="hover:underline hover:text-white transition-all"><a href={item.href}>
                            {item.title}
                    </a></li>
                )}
            </ul>

            <div class="flex items-center gap-8">
                <a class="w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-700 transition-all">
                    <img src="/svg/search-icon.svg" alt="search icon" class="w-6 h-6 block" />
                </a>
                <a href={routes ? routes.account : "/"} class="w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-700 transition-all">
                    <img src="/svg/user-icon.svg" alt="user icon" class="w-6 h-6 block" />
                </a>
                <a href={routes ? routes.cart : "/"} class="w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-700 transition-all">
                    <img src="/svg/cart-icon.svg" alt="cart icon" class="w-6 h-6 block" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;