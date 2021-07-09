import firebase from 'firebase/app'
import {auth} from '../../services/Firebase'
import logo from '../../assets/PSh Logo_WHITE.svg'
import { Icon } from '@iconify/react';
import googleFill from '@iconify-icons/akar-icons/google-fill';

export  default function Login() {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return (
        <section className='login'>
            <img src={logo} alt='Logo' />
            <p>Please sign in</p>
            <button onClick={() => signInWithGoogle()}><Icon icon={googleFill} className='icon'/>Sign in with Google</button>
        </section>
    )
}