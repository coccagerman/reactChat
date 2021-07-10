import { useContext } from 'react'
import Context from '../../context/Context'
import Header from './Header/Header'
import ContactsContainer from './ContactsContainer/ContactsContainer'

export default function CreateNewChat() {

    const { activeChats } = useContext(Context)

    return (
        <section className='createNewChat'>
            <Header />
            <ContactsContainer />
        </section>
    )
}

// Temitas para arreglar:
// Al hacer click en el contacto se debe agregar el nuevo chat y mostrarlo como activo.
// Si el chat con ese contacto ya estaba creado, solo se debe redirigir y mostrar como activo.
// Combinar los contactos fetcheados con los predefinidos para que se muestren todos juntos.
// Ordenar la lista de contactos alfabéticamente.
// Configurar searchBar.