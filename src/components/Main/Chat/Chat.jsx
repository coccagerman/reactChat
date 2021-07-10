import { useEffect, useRef, useContext } from 'react'
import Context from '../../../context/Context'
import ChatHeader from './ChatHeader/ChatHeader'
import Message from './Message/Message'
import Input from './Input/Input'

export default function Chat () {

    const { currentChat } = useContext(Context)

    const fixedScroll = useRef()

    useEffect(() => fixedScroll.current.scrollIntoView({behavior: 'smooth'}), [])

    return (
        <section className='chat'>
            <ChatHeader currentChat={currentChat} />

            <button onClick={()=>console.log(currentChat)}>test</button>

            <div className='conversation-container'>
                {currentChat.messages && currentChat.messages.map(msg => <Message msg={msg} currentChat={currentChat} />)}
                <span ref={fixedScroll}></span>
            </div>
            <Input fixedScroll={fixedScroll} currentChat={currentChat} />
        </section>
    )
} 