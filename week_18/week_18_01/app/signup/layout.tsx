export default function SignupLayout({children}:Readonly<{children: React.ReactNode;}>){
   return <div>
    <div className="bg-red-500">Signup</div>
    {children}
   </div>
}