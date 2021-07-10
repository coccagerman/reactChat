import { useEffect } from 'react'
import Contact from './Contact/Contact'

export default function ContactsContainer({fetchedContactsList, setFetchedContactsList, filteredContactsList, searchParams }) {

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

    useEffect(()=> fetchContactsList(),[]) 

    return (
        <div className='contacts-container'>
            {(searchParams ? filteredContactsList : fetchedContactsList).map(contact => <Contact contact={contact} key={contact.id.value} />)}
        </div>
    )
}