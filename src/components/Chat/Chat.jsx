import ChatHeader from './ChatHeader/ChatHeader'
import Message from './Message/Message'
import Input from './Input/Input'

export default function Chat () {

    return (
        <section className='chat'>
            <ChatHeader />
            <div className='conversation-container'>
                <Message />
            </div>
            <Input />
        </section>
    )
} 