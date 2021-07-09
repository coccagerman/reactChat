import { useContext, useState } from 'react'
import Context from '../../context/Context'
import Chat from './Chat/Chat'
import Menu from './Menu/Menu'

export default function Main() {

    const { activeChats } = useContext(Context)
    // Estado utilizado para mostrar el chat correspondiente, según lo que seleccione en el menú
    const [currentChat, setCurrentChat] = useState(activeChats[1])

    return (
        <section className='main'>
            <Menu setCurrentChat={setCurrentChat} />
            <Chat currentChat={currentChat} />
        </section>
    )
}