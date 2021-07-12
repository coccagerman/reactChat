import { useEffect, useRef } from 'react'
import ChatHeader from './ChatHeader/ChatHeader'
import ConversationContainer from './ConversationContainer/ConversationContainer'
import Input from './Input/Input'

export default function Chat () {

    const fixedScroll = useRef()
    useEffect(() => fixedScroll.current.scrollIntoView({behavior: 'smooth'}))

    return (
        <section className='chat'>
            <ChatHeader  />
            <ConversationContainer fixedScroll={fixedScroll} />
            <Input fixedScroll={fixedScroll} />
        </section>
    )
} 