export default function Article({title, date="January 1, 1970", preview, minutes}){

    const count = minutes < 30? Math.ceil(minutes / 5): Math.ceil(minutes / 10);
    const emoji = minutes < 30? "☕️": "🍱";
    let emojis = "";
    for (let i= count ; i > 0 ; i--){
        emojis += emoji;
    }
    return(
        <article>
            <h3>{title}</h3>
            <small>{date} · {emojis} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    )
}