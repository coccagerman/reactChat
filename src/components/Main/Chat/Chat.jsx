import ChatHeader from './ChatHeader/ChatHeader'
import Message from './Message/Message'
import Input from './Input/Input'
import { useEffect, useRef } from 'react'

export default function Chat ({currentChat}) {

    const fixedScroll = useRef()

    useEffect(() => fixedScroll.current.scrollIntoView({behavior: 'smooth'}), [])

    return (
        <section className='chat'>
            <ChatHeader currentChat={currentChat} />
            <div className='conversation-container'>
                {currentChat.messages && currentChat.messages.map(msg => <Message msg={msg} currentChat={currentChat} />)}
                <span ref={fixedScroll}></span>
            </div>
            <Input fixedScroll={fixedScroll} currentChat={currentChat} />
        </section>
    )
} 