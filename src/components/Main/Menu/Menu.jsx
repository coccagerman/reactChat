import { useContext, useState } from 'react'
import Context from '../../../context/Context'
import { Link } from 'react-router-dom'
import { useWindowSize } from '../../../customHooks/useWindowSize'
import MenuHeader from './MenuHeader/MenuHeader'
import ChatPreview from './ChatPreview/ChatPreview'

export default function Menu () {

    const { activeChats } = useContext(Context)

    const windowSize = useWindowSize()
    const [hidenMenu, setHidenMenu] = useState(false)

    return (
        <section className={`menu ${!hidenMenu ? 'menuActive' : null}`}>
            <MenuHeader windowSize={windowSize} hidenMenu={hidenMenu} setHidenMenu={setHidenMenu}/>
            <div className='chatPreview-container'>
                {activeChats.map(chat => 
                    <ChatPreview chat={chat} key={chat.id} windowSize={windowSize} hidenMenu={hidenMenu} setHidenMenu={setHidenMenu} />
                )}
                <Link to='/createNewChat'><button><span>+</span> Create New</button></Link>
            </div>
        </section>
    )
} 