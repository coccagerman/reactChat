import MenuHeader from './MenuHeader/MenuHeader'
import ChatPreview from './ChatPreview/ChatPreview'
import { useWindowSize } from '../../customHooks/useWindowSize'
import { useState } from 'react'

export default function Menu ({activeChats}) {

  const windowSize = useWindowSize()

  const [hidenMenu, setHidenMenu] = useState(false)

    return (
        <section className={`menu ${!hidenMenu ? 'menuActive' : null}`}>
            <MenuHeader windowSize={windowSize} hidenMenu={hidenMenu} setHidenMenu={setHidenMenu}/>
            <div className='chatPreview-container'>
                {activeChats.map(chat => <ChatPreview chat={chat} key={chat.id} windowSize={windowSize} hidenMenu={hidenMenu} />)}
                <button><span>+</span> Create New</button>
            </div>
        </section>
    )
} 