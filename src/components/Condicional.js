import React from 'react'
import {useState} from 'react'


function Condicional () {
    const [email,setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

function enviarEmail (e) {
e.preventDefault ()
setUserEmail(email)

}
function limparEmail () {
    setUserEmail('')
    
    }

    return (
        
        <div>
            <h2> Cadastre o seu email:</h2>
        <form>
        <input type="email" placeholder="digite o seu email" onChange={(e)=>setEmail(e.target.value)}/>
        <button type="submit" onClick={enviarEmail}>
        enviarEmail
        </button>
        {userEmail && (
            <div>
                <p>o e-mail do usuario é: `{userEmail}</p>
                <button onCLick={limparEmail}>Limpar Email</button>
            </div>
        )}
        </form>
        </div>

    )
}

export default Condicional