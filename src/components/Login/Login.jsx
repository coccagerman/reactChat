import logo from '../../assets/PSh Logo_WHITE.svg'
import { Icon } from '@iconify/react';
import googleFill from '@iconify-icons/akar-icons/google-fill';
import facebookFill from '@iconify-icons/akar-icons/facebook-fill';

export  default function Login() {
    return (
        <section className='login'>
            <img src={logo} alt='Logo' />
            <p>Please sign in</p>

            <button><Icon icon={googleFill} className='icon'/>Sign in with Google</button>
            <button><Icon icon={facebookFill} className='icon'/>Sign in with Facebook</button>

        </section>
    )
}