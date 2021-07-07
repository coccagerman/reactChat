import logo from '../../../assets/PSh Logo_WHITE.svg'

export default function MenuHeader () {
    return (
        <header className='menuHeader'>
            <img src={logo} alt="logo" />
            <h1>React Chat</h1>
        </header>
    )
} 