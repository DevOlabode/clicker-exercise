function alertMessage (message){
    return function (){
        alert(message)
        console.log(message)
    }
}


export default function Clicker({message, buttonText}){
    return (
        <div>
            <button onClick={alertMessage(message)}>{buttonText}</button>
        </div>
    )
};