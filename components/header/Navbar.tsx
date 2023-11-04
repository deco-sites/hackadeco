import Image from "apps/website/components/Image.tsx";

export interface INavItems {
    title: string, 
    href: string 
}

export interface Props {
    navItems?: INavItems[];
    logo?: { src: string, alt: string };
    routes?: {
        cart: string;
        account: string;
        search: string;
    }
}


function Navbar ({
    navItems,
    logo,
    routes
}: Props) {


    return (
        <nav class="flex items-center w-full justify-center container">

                <a href={routes ? routes.search : "/"} class="w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-700 transition-all">
                    <img src="/svg/search-icon.svg" alt="search icon" class="w-6 h-6 block" />
                </a>
                <a href={routes ? routes.account : "/"} class="w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-700 transition-all">
                    <img src="/svg/user-icon.svg" alt="user icon" class="w-6 h-6 block" />
                </a>
                <a href={routes ? routes.cart : "/"} class="w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-700 transition-all">
                    <img src="/svg/cart-icon.svg" alt="cart icon" class="w-6 h-6 block" />
                </a>
        </nav>
    );
};

export default Navbar;