import Image from '../../../assets/avatar-1.png'

export default function ChatHeader () {
    return (
        <header className='chatHeader'>
            <img src={Image} alt='Avatar' />
            <div className='personDetails'>
                <h1>Micaela Alvarez</h1>
                <p>Marketing manager</p>
            </div>
        </header>
    )
} 