export function Card({children}){
    return (
        <div style={{backgroundColor:"lightgray", borderRadius:10,margin:"10px",padding:'20px',height:300, boxShadow:"2px 10px 10px rgba(0,0,0,1)"}}>
            {children}

        </div>
    )
}

export function InputBox(){
    function focus(){
        document.getElementById("input").focus()
    }
    return <div>
        signIn
        <input  type="text"></input>
        <input id="input" type="text"></input>
        <button onClick={focus}>submit</button>
    </div>
}