import { useContext } from 'react'
import Context from '../../../../context/Context'
import { Link } from 'react-router-dom'

export default function Contact({contact}) {

    const { activeChats, setActiveChats, setCurrentChat } = useContext(Context)

    const chatToAdd = {
        avatar: contact.picture.medium,
        id: activeChats[activeChats.length-1].id + 1,
        messages: [],
        name: contact.name.first + ' ' + contact.name.last,
        role: null
    }

    const newChat = () => {

        let chatIndex
        for (let i = 0; i < activeChats.length; i++) {
            if(chatToAdd.name === activeChats[i].name) {chatIndex = i}
        }

        console.log('chatIndex' + chatIndex)

        if (chatIndex === undefined) {
            setActiveChats([...activeChats, chatToAdd])
            setCurrentChat(activeChats[activeChats.length-1])
        } else {
            setCurrentChat(activeChats[chatIndex])
        }
    }

    return (
        <Link to='/'>
            <article className='contact' onClick={() => newChat()}>
                <img src={contact.picture.medium} alt='Avatar' />
                <div className='nameAndRole-container'>
                    <h3>{contact.name.first} {contact.name.last}</h3>
                </div>
            </article>
        </Link>
    )
}