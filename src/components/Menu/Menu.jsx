import MenuHeader from './MenuHeader/MenuHeader'
import ChatPreview from './ChatPreview/ChatPreview'

export default function Menu ({activeChats}) {
    return (
        <section className='menu'>
            <MenuHeader />
            {activeChats.map(chat => <ChatPreview chat={chat} key={chat.id}/>)}
            <button><span>+</span> Create New</button>
        </section>
    )
} 