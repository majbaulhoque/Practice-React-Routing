import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1, HiX } from "react-icons/hi";

const Nav = () => {
    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About Us', id: 'about' },
        { path: '/services', name: 'Our Services', id: 'services' },
        { path: '/contact', name: 'Contact Us', id: 'contact' },
        { path: '/dashboard', name: 'User Dashboard', id: 'dashboard', private: true }
    ];

    const [open, setOpen] = useState(false);
    return (
        <nav>
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? <HiX className="text-xl"/>
                    :
                    <HiMenuAlt1 className="text-xl"/>
                }
                </div>
            <ul className="md:flex">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Nav;