export default function ChatPreview ({chat, hidenMenu, activePreview, setActivePreview, setCurrentChat}) {

    return (
        <article className={`chatPreview ${activePreview === chat ? 'active' : null}`} onClick={() => {setActivePreview(chat); setCurrentChat(chat)}}> 
            <img src={chat.avatar} alt='Avatar' />
            {hidenMenu ? null :
                <div className='previewDetails'>
                    <div className='nameAndDate'>
                        <h3>{chat.name}</h3>
                        <p className='msg-date'>{chat.messages[chat.messages.length-1].date}</p>
                    </div>
                    <p className='msg-content'>{chat.messages[chat.messages.length-1].content}</p>
                </div>
            }
        </article>
    )
} 