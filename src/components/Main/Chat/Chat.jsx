import ChatHeader from './ChatHeader/ChatHeader'
import Message from './Message/Message'
import Input from './Input/Input'
import { useRef, useEffect } from 'react'

export default function Chat ({currentChat}) {

    const fixedScroll = useRef()

    const showPreviousMessages = () => currentChat.messages.map(msg => <Message msg={msg} currentChat={currentChat} />)

    useEffect(() => showPreviousMessages(), [])

    return (
        <section className='chat'>
            <ChatHeader currentChat={currentChat} />
            <div className='conversation-container'>
                {currentChat.messages && showPreviousMessages()}
            </div>
            <span ref={fixedScroll}></span>
            <Input fixedScroll={fixedScroll} currentChat={currentChat} />
        </section>
    )
} 