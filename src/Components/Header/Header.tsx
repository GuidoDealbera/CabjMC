import {BiMenu} from 'react-icons/bi'
import { MENU_LINKS } from '../MenuLinks'

const Header = () => {
  return (
    <nav className="fixed w-screen h-14 bg-blue-700 text-yellow-300 flex items-center justify-between px-4">
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
        <img src="/cabj.svg" alt="" className="w-12 h-12"/>
    </nav>
  )
}

export default Header