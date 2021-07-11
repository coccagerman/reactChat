import Context from '../../../../context/Context'
import { useState, useContext } from 'react'

export default function Input ({fixedScroll, currentChat}) {

    const { activeChats, setActiveChats } = useContext(Context)

    const [formValue, setFormValue] = useState('')

    const sendMessage = (e) => {
        e.preventDefault()
        
        const newMsg = [{
            content: formValue,
            date: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
            received: false
        }]

        setActiveChats(
            activeChats.map((activeChat) => {
              if (activeChat.id === currentChat.id) {
                return {
                  ...activeChat,
                  messages: [...activeChat.messages, ...newMsg]
                }
              }
              return activeChat
            })
        )
        ///////////        ///////////        ///////////        ///////////        ///////////        ///////////
        currentChat.messages.push({
            content: formValue,
            date: new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
            received: false
        })
        ///////////        ///////////        ///////////        ///////////        ///////////        ///////////

        setFormValue('')
        setTimeout(() => fixedScroll.current.scrollIntoView({behavior: 'smooth'}), .1)
    }

    return (
        <form className='input'>
            <input value={formValue} onChange={e => setFormValue(e.target.value)} placeholder="Type your message..." />
            <button onClick={e => sendMessage(e)}>SEND</button>
        </form>
    )
} 