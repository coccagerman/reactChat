import { useContext, useState } from 'react'
import Context from '../../context/Context'
import Header from './Header/Header'
import ContactsContainer from './ContactsContainer/ContactsContainer'

export default function CreateNewChat() {

    const { fetchedContactsList, setFetchedContactsList } = useContext(Context)

    const [searchParams, setSearchParams] = useState(null)

    const filteredContactsList = fetchedContactsList.filter(contact => ((contact.name.first + ' ' + contact.name.last).toLowerCase().includes(searchParams)))

    return (
        <section className='createNewChat'>
            <Header setSearchParams={setSearchParams} />
            <ContactsContainer fetchedContactsList={fetchedContactsList} setFetchedContactsList={setFetchedContactsList} searchParams={searchParams} filteredContactsList={filteredContactsList} />
        </section>
    )
}

// Temitas para arreglar:
// Al hacer click en el contacto se debe agregar el nuevo chat y mostrarlo como activo.
// Si el chat con ese contacto ya estaba creado, solo se debe redirigir y mostrar como activo.
// Combinar los contactos fetcheados con los predefinidos para que se muestren todos juntos.
// Ordenar la lista de contactos alfabéticamente.
// Configurar searchBar.