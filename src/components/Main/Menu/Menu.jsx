import { useContext, useState } from 'react'
import Context from '../../../context/Context'
import { Link } from 'react-router-dom'
import { useWindowSize } from '../../../customHooks/useWindowSize'
import MenuHeader from './MenuHeader/MenuHeader'
import ChatPreview from './ChatPreview/ChatPreview'

export default function Menu () {

    const { activeChats, setCurrentChat } = useContext(Context)

    const windowSize = useWindowSize()
    const [hidenMenu, setHidenMenu] = useState(false)

    const [activePreview, setActivePreview] = useState(activeChats[1])

    return (
        <section className={`menu ${!hidenMenu ? 'menuActive' : null}`}>
            <MenuHeader windowSize={windowSize} hidenMenu={hidenMenu} setHidenMenu={setHidenMenu}/>
            <div className='chatPreview-container'>
                {activeChats.map(chat => 
                    <ChatPreview chat={chat} key={chat.id} hidenMenu={hidenMenu} activePreview={activePreview} setActivePreview={setActivePreview} setCurrentChat={setCurrentChat} />
                )}
                <Link to='/createNewChat'><button><span>+</span> Create New</button></Link>
            </div>
        </section>
    )
} 