import Avatar from '../../../assets/avatar-1.png'
import Avatar2 from '../../../assets/avatar-2.png'

export default function Message () {
    return (
        <>
            <article className='message received'>
                <div className='msg-container'>
                    <img src={Avatar} alt="Avatar" />
                    <div className='msg-content-container'>
                        <div className='talker-indicator'/>
                        <p className='msg-content'>Hola John! Entre qué horarios podrías hoy tener la meeting?</p>
                    </div>
                    <p className='msg-time'>9:45 AM</p>
                </div>
            </article>

            <article className='message sent'>
                <div className='msg-container'>
                    <img src={Avatar2} alt="Avatar" />
                    <div className='msg-content-container'>
                        <div className='talker-indicator'/>
                        <p className='msg-content'>Hola Micaela! Muy bien. Yo puedo de 10 a 17 hs.</p>
                    </div>
                    <p className='msg-time'>9:45 AM</p>
                </div>
            </article>
        </>
    )
} 