
export default function Contact({contact}) {
    return (
        <article className='contact'>
            <img src={contact.avatar} alt='Avatar' />
            <div className='nameAndRole-container'>
                <h3>{contact.name}</h3>
                <p>{contact.role}</p>
            </div>
        </article>
    )
}