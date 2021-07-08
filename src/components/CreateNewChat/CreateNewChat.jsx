import SearchBar from './SearchBar/SearchBar'
import Contact from './Contact/Contact'

export default function CreateNewChat() {
    return (
        <section className='createNewChat'>
            <h1>CreateNewChat</h1>
            <SearchBar />
            <Contact />
        </section>
    )
}