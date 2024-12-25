import viteLogo from "/vite.svg"
export function Posts({image,name,followers,time}){
    return(
        <div style={{width:300,height:100,borderRadius:"20px",backgroundColor:"white", display:"flex",}}>
            <div>
             <img src={image} alt=""
                style={{
                    height:40,
                    marginTop:30,
                    marginLeft:10
                }} />
            </div>
            <div style={{display:"flex",alignItems:"center",flexDirection:"column", marginTop:15}}>
                <div>
                    <b>{name}</b>
                </div>
                <div >
                    {followers}
                </div>
                <div>
                   {(time!==undefined) ? time : null }
                </div>
                
        
            </div>
            
        </div>
    )
}