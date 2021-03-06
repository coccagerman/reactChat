import { useContext } from 'react'
import Context from '../../../../context/Context'
import { Link } from 'react-router-dom'

export default function Contact({ contact }) {

    const { activeChats, setActiveChats, setCurrentChat } = useContext(Context)

    const newChat = () => {

        const chatToAdd = {
            avatar: contact.picture.medium,
            id: activeChats[activeChats.length-1].id + 1,
            messages: [],
            name: contact.name.first + ' ' + contact.name.last,
            role: null
        }
        
        let chatIndex
        for (let i = 0; i < activeChats.length; i++) {
            if (chatToAdd.name === activeChats[i].name) {chatIndex = i}
        }

        if (chatIndex === undefined) {
            
            setActiveChats([...activeChats, chatToAdd])
            setCurrentChat(chatToAdd)
        } else {
            setCurrentChat(activeChats[chatIndex])
        }
    }

    return (
        <Link to='/'>
            <article className='contact' onClick={() => newChat()}>
                <img src={contact.picture.medium} alt='Avatar' />
                <div className='nameContainer'>
                    <h3>{contact.name.first} {contact.name.last}</h3>
                </div>
            </article>
        </Link>
    )
}