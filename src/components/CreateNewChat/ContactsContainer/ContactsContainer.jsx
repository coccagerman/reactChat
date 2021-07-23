import Context from '../../../context/Context'
import { useEffect, useContext } from 'react'
import Contact from './Contact/Contact'

export default function ContactsContainer() {

    const { fetchedContactsList, setFetchedContactsList, activeChats } = useContext(Context)

    const fetchContactsList = async () => {
        if (fetchedContactsList.length === 0) {
            const results = []
            let url = 'https://randomuser.me/api/?results=11&inc=name,picture,id'
     
            const res = await fetch(url)
            const data = await res.json()
            results.push(...data.results)

            setFetchedContactsList(results)
        }
    }

    let previousChatsArray = []

    const previousChats = () => {
        for (let i = 0; i < activeChats.length; i++) {
            previousChatsArray.push(activeChats[i].name)
        }
    }

    useEffect(() => {fetchContactsList(); previousChats()})

    return (
        <div className='contacts-container'>
            {fetchedContactsList.filter(contact => previousChatsArray.indexOf(contact.name.first + ' ' + contact.name.last) === -1).map(contact => <Contact contact={contact} key={contact.id.value} />)}
        </div>
    )
}