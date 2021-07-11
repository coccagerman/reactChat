import Context from '../../../../context/Context'
import { useContext } from 'react'

export default function ChatHeader () {
    
    const { currentChat } = useContext(Context)

    return (
        <header className='chatHeader'>
            <img src={currentChat.avatar} alt='Avatar' />
            <div className='personDetails'>
                <h1>{currentChat.name}</h1>
                <p>{currentChat.role}</p>
            </div>
        </header>
    )
} 