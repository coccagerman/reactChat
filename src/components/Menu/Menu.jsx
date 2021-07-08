import MenuHeader from './MenuHeader/MenuHeader'
import ChatPreview from './ChatPreview/ChatPreview'
import { useWindowSize } from '../../customHooks/CustomHooks'
import { useState } from 'react'

export default function Menu ({activeChats}) {

  const windowSize = useWindowSize()

  const [hidenMenu, setHidenMenu] = useState(true)

    return (
        <section className={`menu ${!hidenMenu ? 'menuActive' : null}`}>
            <MenuHeader windowSize={windowSize} hidenMenu={hidenMenu} setHidenMenu={setHidenMenu}/>
            <div className='chatPreview-container'>
                {activeChats.map(chat => <ChatPreview chat={chat} key={chat.id} windowSize={windowSize} hidenMenu={hidenMenu} />)}
            </div>
            <button><span>+</span> Create New</button>
        </section>
    )
} 