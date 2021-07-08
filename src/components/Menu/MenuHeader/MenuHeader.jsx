import logo from '../../../assets/PSh Logo_WHITE.svg'
import { Icon } from '@iconify/react'
import arrowRight from '@iconify-icons/akar-icons/arrow-right'

export default function MenuHeader ({windowSize, setHidenMenu, hidenMenu}) {

    return (
        <header className='menuHeader'>
            <img src={logo} alt='logo' />
            {windowSize > 950 ? <h1>React Chat</h1> : <Icon icon={arrowRight} hFlip={!hidenMenu} className='icon' onClick={() => setHidenMenu(!hidenMenu)}/>}
        </header>
    )
} 