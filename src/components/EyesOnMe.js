// Code EyesOnMe Component Here
function Focus() {
        return (
        console.log("Good!")
        )
}

function Blur() {
        return (
        console.log("Hey! Eyes on me!")
        )
}
function EyesOnMe() {
    return (
       <div>
        <button type="button" onFocus={Focus} onBlur={Blur}>Eyes on me</button>
       </div>
    )
}

export default EyesOnMe;