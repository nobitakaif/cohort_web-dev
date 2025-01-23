import CredentialsProvider  from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook"; 
import GoogleProvider from "next-auth/providers/google";
// import GithubPro from "next-auth/providers/github";
import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";

console.log(process.env.GOOGLE_CLIENT_ID)
const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name : "login with email",
            credentials:{
                username : {label : "Username", type: "text", placeholder:"nobitakaif"},
                password : {label : "Password", type: "text"}
            },
            async authorize(credentials,req){
                const username = credentials?.username
                const password = credentials?.password
                
                const user = {
                    name : "nobitakaif",
                    id : "1", 
                    username : "nobitakaif"
                }
                if(user){
                    return user
                }
                else{
                    return null
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        }),
        GitHubProvider({
            clientId: "dogadnf",
            clientSecret: "go;idnfoi"
          })
        

    ]
})

export { handler as GET, handler as POST}