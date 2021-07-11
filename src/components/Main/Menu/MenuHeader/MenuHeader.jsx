import {auth} from './../../../../services/Firebase'
import logo from '../../../../assets/PSh Logo_WHITE.svg'
import { Icon } from '@iconify/react'
import arrowRight from '@iconify-icons/akar-icons/arrow-right'

export default function MenuHeader ({windowSize, setHidenMenu, hidenMenu}) {

    return (
        <header className='menuHeader'>
            <img src={logo} alt='logo' />
            {windowSize > 950 ? <h1>React Chat</h1> : <Icon icon={arrowRight} hFlip={!hidenMenu} className='icon' onClick={() => setHidenMenu(!hidenMenu)}/>}
            {(!hidenMenu || windowSize > 950) ? <button className='signOut' onClick={() => auth.signOut()}>sign out</button> : null}
        </header>
    )
} 