import { useState } from "react";
import { apiUrl } from "../ApiUrl";

export default function RegisterPage(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    async function register(ev){
        ev.preventDefault();
        const response = await fetch(apiUrl + '/register',{
            method:'POST',
            body:JSON.stringify({username,password}),
            headers: {'Content-type':'application/json'},
        });
        console.log(response);
        if(response.status === 200){
            alert('registration success');
        }
        else{
            alert('registration failed')
        }
    }
    return(
        <form className="register" onSubmit={register}>
            <h1>Register</h1>
            <input  type="text" 
                    placeholder="username" 
                    value={username}
                    onChange={ev => setUsername(ev.target.value)}/>
            <input  type="password" 
                    placeholder="password"
                    value={password}
                    onChange={ev => setPassword(ev.target.value)} />
            <button>Register</button>
        </form>
    );
}