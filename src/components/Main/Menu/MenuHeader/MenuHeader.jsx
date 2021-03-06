import { auth } from './../../../../services/Firebase'
import { Icon } from '@iconify/react'
import arrowRight from '@iconify-icons/akar-icons/arrow-right'

export default function MenuHeader ({windowSize, setHidenMenu, hidenMenu}) {

    return (
        <header className={!hidenMenu ? 'menuHeader menuHeaderOpen' : 'menuHeader'}>
            {windowSize > 950 ? <h1>React Chat</h1> : <Icon icon={arrowRight} hFlip={!hidenMenu} className={hidenMenu ? 'icon' : 'icon iconMenuOpen'} onClick={() => setHidenMenu(!hidenMenu)}/>}
            {(!hidenMenu || windowSize > 950) ? <button className='signOut' onClick={() => auth.signOut()}>sign out</button> : null}
        </header>
    )
} 