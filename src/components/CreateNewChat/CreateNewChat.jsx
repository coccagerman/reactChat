import { useContext } from 'react'
import Context from '../../context/Context'
import Header from './Header/Header'
import ContactsContainer from './ContactsContainer/ContactsContainer'

export default function CreateNewChat() {

    const { fetchedContactsList, setFetchedContactsList } = useContext(Context)

    return (
        <section className='createNewChat'>
            <Header />
            <ContactsContainer fetchedContactsList={fetchedContactsList} setFetchedContactsList={setFetchedContactsList} />
        </section>
    )
}