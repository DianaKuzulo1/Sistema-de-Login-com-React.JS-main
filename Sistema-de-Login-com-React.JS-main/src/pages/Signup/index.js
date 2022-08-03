import React, { useState } from "react";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [nomeUser, setNomeUser] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  //const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !setNomeUser | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (!nomeUser) {
      setError("Digita o nome");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário Já pode agendar Reuniões!");
  };
  
  return (
    <C.Container>
      <lagend>
      <div class="page-header">
        <h1>Area de Cadastramento do Usuario</h1>
      </div><div class="page-header">
        <h1>Area de Cadastramento do Usuario</h1></div>

      </lagend>
      
      
      <C.Content>
      <div class="form-group">
              <label for="nome">Nome</label>
              <input type="text" name="nome" id="nome" class="form-control"
              placeholder="Digite o nome do Usuario"
              onChange={(e) => [setNomeUser(e.target.value), setError("")]} />
            </div>
           
            <div class="form-group">
              <label for="nome">Email</label>
              <input type="email" name="email" id="nome" class="form-control"
              placeholder="Digite o email do Usuario"
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]} />
            </div>
            
            
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" name="password" id="password" class="form-control"
              placeholder="Digite a password do usuario"
              value={senha}
              onChange={(e) => [setSenha(e.target.value), setError("")]} />
            </div>
            
      <C.labelError>{error}</C.labelError>
      <button type="submit" Text="Inscrever-se" class="btn btn-primary" onClick={handleSignup}>Cadastrar</button>
        



      </C.Content>
    </C.Container>
  );
};

export default Signup;
