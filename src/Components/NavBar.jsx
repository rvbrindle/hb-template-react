import Logo from "./Logo.jsx";
import BurgerMenu from "./BurgerMenu.jsx";

export default function NavBar({items}) {

    const toggleMenu = (isOpen) => {

        const navMenu = document.getElementById('nav-menu-mobile');

         navMenu.classList.toggle('hidden');
    }

    const navItems = items.map((item) =>
        <li
            className='py-4 cursor-pointer w-full text-center mx-3 transition-all hover:scale-110 md:py-0'
            key={item}>{item}
        </li>);

    return (
        <>
            <nav className='w-full bg-primary py-2'>
                <div className='container mx-auto flex flex-row justify-between'>
                    <Logo className='w-1/2 border-3 border-green flex items-center'/>
                        <BurgerMenu items={items} handleChange={toggleMenu}/>
                        <ul className='hidden md:flex flex-row items-center w-1/2'>
                            {navItems}
                        </ul>
                </div>
            </nav>

            <nav className='w-full flex justify-end'>

            <ul id='nav-menu-mobile' className='hidden md:hidden flex-col items-center w-3/4 bg-secondary py-3'>
                {navItems}
            </ul>
            </nav>
        </>
    )
}