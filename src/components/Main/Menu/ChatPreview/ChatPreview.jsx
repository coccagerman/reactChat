import Context from '../../../../context/Context'
import { useContext } from 'react'

export default function ChatPreview ({ chat, hidenMenu, windowSize, setHidenMenu }) {

    const shortenText = (text) => text.length > 50 ? text.slice(0, 50 - 1) + '…' : text

    const { currentChat, setCurrentChat } = useContext(Context)

    return (
        <article className={`chatPreview ${currentChat.id === chat.id ? 'active' : null}`} onClick={() => {setCurrentChat(chat); setHidenMenu(true)}}> 
            <img src={chat.avatar} alt='Avatar' />
            {(hidenMenu && windowSize < 950) ? null :
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