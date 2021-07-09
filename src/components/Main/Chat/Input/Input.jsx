import { useState } from 'react'

export default function Input ({fixedScroll, currentChat}) {

    const [formValue, setFormValue] = useState('')

    const sendMessage = (e) => {
        e.preventDefault()

        currentChat.messages.push({
            content: formValue,
            date: "9:45 AM",
            received: false
        })

        setFormValue('')
        fixedScroll.current.scrollIntoView({behavior: 'smooth'})
        console.log(currentChat)
    }

    return (
        <form className='input'>
            <input value={formValue} onChange={e => setFormValue(e.target.value)} placeholder="Type your message..." />
            <button onClick={(e) => sendMessage(e)}>SEND</button>
        </form>
    )
} 