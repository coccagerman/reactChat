import { useState } from 'react'
import Context from './Context'
import avatar1 from './../assets/avatar-1.png'
import avatar2 from './../assets/avatar-2.png'
import avatar3 from './../assets/avatar-3.png'

export default function ContextProvider ({children}) {

    const [activeChats, setActiveChats] = useState([
        {
          id: 1,
          name: 'Luciana Gutierrez',
          role: 'HR Manager',
          avatar: avatar2,
          messages: [
            {
              content: 'Hola Luciana! Tuviste alguna novedad?',
              received: false,
              date: '9:45 AM'
            },
            {
              content: 'Hola John! Todavía no...',
              received: true,
              date: '10:19 AM'
            },
            {
              content: 'Si tengo alguna otra novedad te comento. Gracias!',
              received: true,
              date: '10:20 AM'
            }
          ]
        },
        {
          id: 2,
          name: 'Micaela Alvarez',
          role: 'Marketing Manager',
          avatar: avatar1,
          messages: [
            {
              content: 'Hola John! Entre qué horarios podrías hoy tener la meeting?',
              received: true,
              date: '9:45 AM'
            },
            {
              content: 'Hola Micaela! Muy bien. Yo puedo de 10 a 17 hs.',
              received: false,
              date: '10:05 AM'
            },
            {
              content: 'Dale, agendé la meeting para hoy a las 14hs.',
              received: true,
              date: '10:15 AM'
            }
          ]
        },
        {
          id: 3,
          name: 'Manuel Hoffman',
          role: 'Business Manager',
          avatar: avatar3,
          messages: [
            {
              content: 'Gracias por la reunión de ayer, Manu, fue muy productiva!',
              received: false,
              date: '9:35 AM'
            },
            {
              content: 'Gracias a vos!',
              received: true,
              date: '9:37 AM'
            }
          ]
        }
      ])

    return (
        <Context.Provider value={{ activeChats, setActiveChats }} >
            {children}
        </Context.Provider>
    )
}
