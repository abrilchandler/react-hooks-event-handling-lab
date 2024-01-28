// Code Keypad Component Here
function Changer() {
    return (
        console.log("Entering password...")
    )
}

function Keypad (){
    return (
        <div>
            <input onChange={Changer} type="password" />
        </div>
    )
}

export default Keypad;