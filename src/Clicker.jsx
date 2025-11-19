function alertMessage (message){
    return function (){
        alert(message)
        console.log(message)
    }
}


export default function Clicker({message, buttonText}){
    return (
        <div>
            <h1>The Clicker Exercise</h1>
            <button onClick={alertMessage(message)}>{buttonText}</button>
        </div>
    )
};