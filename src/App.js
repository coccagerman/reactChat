import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth} from './services/Firebase'
import ContextProvider from './context/ContextProvider'
import SignIn from './components/SignIn/SignIn'
import Main from './components/Main/Main'
import CreateNewChat from './components/CreateNewChat/CreateNewChat'

export default function App() {

  const [user] = useAuthState(auth)

  return (

    <Router>
      <ContextProvider>
        <Switch>
          <Route path='/' exact>
            {user ? <Main /> : <SignIn />}
          </Route>
          <Route path='/createNewChat'>
            <CreateNewChat />
          </Route>
        </Switch>
      </ContextProvider>
    </Router>
  )
}