import firebase from 'firebase/app'
import { auth } from '../../services/Firebase'
import { Icon } from '@iconify/react'
import googleFill from '@iconify-icons/akar-icons/google-fill'

export  default function Login() {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return (
        <section className='login'>
            <p>Please sign in</p>
            <button onClick={() => signInWithGoogle()}><Icon icon={googleFill} className='icon'/>Sign in with Google</button>

        </section>
    )
}