import './App.scss'
import Menu from './components/Menu/Menu'
import Chat from './components/Chat/Chat'
import { useState } from 'react'
import avatar1 from './assets/avatar-1.png'
import avatar2 from './assets/avatar-2.png'
import avatar3 from './assets/avatar-3.png'

export default function App() {

  const [activeChats, setActiveChats] = useState([
    {
      id: 1,
      name: 'Luciana Gutierrez',
      role: 'HR Manager',
      avatar: avatar1
    },
    {
      id: 2,
      name: 'Micaela Alvarez',
      role: 'Marketing Manager',
      avatar: avatar2
    },
    {
      id: 3,
      name: 'Manuel Hoffman',
      role: 'Business Manager',
      avatar: avatar3
    }
  ])

  return (
    <div className='app'>
      <Menu activeChats={activeChats} />
      <Chat />
    </div>
  )
}