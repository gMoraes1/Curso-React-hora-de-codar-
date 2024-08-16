import React, { useState } from 'react'; // Mantendo a importação de React por questões de compatibilidade

function Formulario() {
  const [name, setName] = useState(''); // Estado inicial como string vazia
  const [password, setPassword] = useState(''); // Estado inicial como string vazia

  function CadastrarUsuario(e) {
    e.preventDefault(); 
    console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`);
  }

  return (
    <div>
      <h1>Meu cadastro:</h1>
      <form onSubmit={CadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite o seu nome"
            value={name} // Adiciona o valor do estado ao input
            onChange={(e) => setName(e.target.value)} // Atualiza o estado com o valor do input
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Digite a sua senha"
            value={password} // Adiciona o valor do estado ao input
            onChange={(e) => setPassword(e.target.value)} // Atualiza o estado com o valor do input
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Formulario;
