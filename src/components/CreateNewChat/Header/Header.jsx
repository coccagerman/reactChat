import { Icon } from '@iconify/react'
import logo from '../../../assets/PSh Logo_WHITE.svg'
import arrowRight from '@iconify-icons/akar-icons/arrow-right'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='header-newChat'>
            <div className='logoAndArrow-container'>
                <Link to='/'><Icon icon={arrowRight} hFlip={true} className='arrow-icon'/></Link>
                <img src={logo} alt='Logo' />
            </div>
        </header>
    )
}