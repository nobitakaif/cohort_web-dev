export function Card({children}){
    return (
        <div style={{backgroundColor:"lightgray", borderRadius:10,margin:"10px",padding:'20px',height:300, boxShadow:"2px 10px 10px rgba(0,0,0,1)"}}>
            {children}

        </div>
    )
}