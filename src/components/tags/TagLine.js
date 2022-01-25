export const TagLine = ({label}) => {
    return <>
        <div>
            <text>{label}</text>
            <button className="button is-link" type="submit" >edit</button>
            <button className="button is-link is-light" type="submit" >delete</button>
        </div>
    </>
}