export default function ChatPreview ({chat, windowSize, hidenMenu}) {

    return (
        // class 'active' condional
        <article className='chatPreview'> 
            <img src={chat.avatar} alt='Avatar' />
            {hidenMenu ? null :
                <div className='previewDetails'>
                    <h3>{chat.name}</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, eius!</p>
                </div>
            }
        </article>
    )
} 