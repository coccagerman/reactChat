import { useContext, useEffect } from 'react'
import Context from '../../../../context/Context'
import Message from './Message/Message'

export default function ConversationContainer({fixedScroll}) {

    const { currentChat, activeChats } = useContext(Context)
    const activeChat = activeChats.filter(chat => chat.id === currentChat.id)[0]

    useEffect(()=> fixedScroll.current.scrollIntoView({behavior: 'smooth'}))

    return (
        <div className='conversation-container'>
            {currentChat.messages && activeChat.messages.map(msg => <Message msg={msg} key={msg.msgId} currentChat={currentChat} />)}
            <span ref={fixedScroll}></span>
        </div>
    )
}