const Greetings = ({ lang, children }) => {
    let greet = ''

    if (lang === "de") {
        greet = "Hallo"
    }

    if (lang === "en") {
        greet = "Hello"
    }

    if (lang === "es") {
        greet = "Hola"
    }

    if (lang === "fr") {
        greet = "Bonjour"
    }

    return (
        <article className="Greetings">
            <p>{greet} {children}</p>
        </article>
    )
}


export default Greetings