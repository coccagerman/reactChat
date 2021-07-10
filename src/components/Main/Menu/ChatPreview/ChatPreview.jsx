export default function ChatPreview ({chat, hidenMenu, activePreview, setActivePreview, setCurrentChat}) {

    const shortenText = (text) => text.length > 50 ? text.slice(0, 50 - 1) + '…' : text

    return (
        <article className={`chatPreview ${activePreview === chat ? 'active' : null}`} onClick={() => {setActivePreview(chat); setCurrentChat(chat)}}> 
            <img src={chat.avatar} alt='Avatar' />
            {hidenMenu ? null :
                <div className='previewDetails'>
                    <div className='nameAndDate'>
                        <h3>{chat.name}</h3>
                        <p className='msg-date'>{chat.messages.length !== 0 ? chat.messages[chat.messages.length-1].date : null}</p>
                    </div>
                    <p className='msg-content'>{chat.messages.length !== 0 ? shortenText(chat.messages[chat.messages.length-1].content) : null}</p>
                </div>
            }
        </article>
    )
} 