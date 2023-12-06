import {BiMenu} from 'react-icons/bi'
import { MENU_LINKS } from '../MenuLinks'

const Header = () => {
  return (
    <nav className="fixed w-screen h-16 bg-cabj-blue text-cabj-yellow flex items-center justify-between px-4">
        <button className='sm:hidden'>
            <BiMenu size={30}/>
        </button>
        <ul className='hidden sm:flex items-center font-medium gap-4'>
            {
                MENU_LINKS.map((item, i) => (
                    <li key={i}>
                        <a href='#'>
                        {item.text}
                        </a>
                    </li>
                ))
            }
        </ul>
        <img src="/escudo.png" alt="Boca Juniors" className="w-14 h-14"/>
    </nav>
  )
}

export default Header