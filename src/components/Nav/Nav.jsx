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
        <nav className="text-black bg-yellow-200 p-6">
            <div onClick={() => setOpen(!open)}>
                {
                    open === true ?
                    <HiX className="text-2xl"/>
                    :
                    <HiMenuAlt1 className="md:hidden text-2xl"/>
                }
            </div>
            <ul className={`md:flex absolute md:static px-6 duration-1000 bg-yellow-200 ${open ? 'top-16' : '-top-60'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Nav;