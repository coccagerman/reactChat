import firebase from 'firebase/app'
import { auth } from '../../services/Firebase'
import { Icon } from '@iconify/react'
import googleFill from '@iconify-icons/akar-icons/google-fill'
import facebookFill from '@iconify-icons/akar-icons/facebook-fill'
import twitterFill from '@iconify-icons/akar-icons/twitter-fill'
import githubFill from '@iconify-icons/akar-icons/github-fill'

export  default function Login() {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    const signInWithFacebook = () => {
        const provider = new firebase.auth.FacebookAuthProvider()
        auth.signInWithPopup(provider)
    }

    return (
        <section className='login'>
            <p>Please sign in</p>
            <button onClick={() => signInWithGoogle()}><Icon icon={googleFill} className='icon'/>Sign in with Google</button>
            <button onClick={() => signInWithFacebook()}><Icon icon={facebookFill} className='icon'/>Sign in with Facebook</button>
            <button onClick={() => console.log('signInWithTwitter')}><Icon icon={twitterFill} className='icon'/>Sign in with Twitter</button>
            <button onClick={() => console.log('signInWithGithub')}><Icon icon={githubFill} className='icon'/>Sign in with Github</button>
        </section>
    )
}