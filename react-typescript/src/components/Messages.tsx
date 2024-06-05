const Message = () => {
    const name = ""
    const displayName = () => {
        if (name){
            return <h1>Hello {name}</h1>
           }
           else {
            return <h1>Hello Anonymous</h1>
           }
    }
    return(
        <div>{displayName()}</div>
    )
}
export default Message