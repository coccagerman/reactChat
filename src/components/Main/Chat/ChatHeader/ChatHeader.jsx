export default function ChatHeader ({currentChat}) {
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