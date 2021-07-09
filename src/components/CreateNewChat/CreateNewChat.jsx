import { useContext } from 'react'
import Context from '../../context/Context'
import Header from './Header/Header'
import Contact from './Contact/Contact'

export default function CreateNewChat() {

    const { activeChats } = useContext(Context)

    return (
        <section className='createNewChat'>
            <Header />
            <div className='chatPreview-container'>
                {activeChats.map(contact => <Contact contact={contact} key={contact.id} />)}
            </div>
        </section>
    )
}