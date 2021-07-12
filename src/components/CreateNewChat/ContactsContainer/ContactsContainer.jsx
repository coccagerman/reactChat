import Context from '../../../context/Context'
import { useEffect, useContext } from 'react'
import Contact from './Contact/Contact'

export default function ContactsContainer() {

    const { fetchedContactsList, setFetchedContactsList } = useContext(Context)

    const fetchContactsList = async () => {
        if (fetchedContactsList.length === 0) {
            const results = []
            let url = 'https://randomuser.me/api/?results=11&inc=name,picture,id'
     
            const res = await fetch(url)
            const data = await res.json()
            results.push(...data.results)

            setFetchedContactsList(results)

            fetchedContactsList.sort(function(a, b) {
                var textA = a.DepartmentName.toUpperCase();
                var textB = b.DepartmentName.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            })
        }
    }

    useEffect(() => fetchContactsList()) 

    return (
        <div className='contacts-container'>
            {fetchedContactsList.map(contact => <Contact contact={contact} key={contact.id.value} />)}
        </div>
    )
}