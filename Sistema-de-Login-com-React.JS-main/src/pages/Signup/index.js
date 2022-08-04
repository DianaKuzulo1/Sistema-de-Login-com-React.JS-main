import React, { useState } from "react";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "../../components/Button";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [nomeUser, setNomeUser] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  //const navigate = useNavigate();

  const { signup } = useAuth();
  const navigate = useNavigate();

  


  const Visualizar  = () => {
          
    navigate("/visualizar");
    
    
    }
    const Validar  = () => {
          
      navigate("/validar");
      
      
      }
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
      </div>
      </lagend>
      
      
     
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
             
             
             
  
              <div class="form-group">
              <label for="nome">Telefone</label>
              <input type="text" name="Telefone" id="Telefone" class="form-control"
              placeholder="Digite o numero de Telefone"
              onChange={(e) => [setNomeUser(e.target.value), setError("")]} />
            </div>
           
  
  
                <lagend>
              <select name="uf" id="uf">
              <option value="">Selecione o Edificio</option>
                <option value="AC">Cabinda</option>
                <option value="AL">Kuanza-Sul</option>
              </select>
              </lagend>

              <br/>
              <lagend>
              <select name="uf" id="uf">
              <option value="">Selecione o perfil</option>
                <option value="AC">Cabinda</option>
                <option value="AL">Kuanza-Sul</option>
              </select>
              </lagend>

              <br/>
              <lagend>
              <select name="uf" id="uf">
              <option value="">Selecione o </option>
                <option value="AC">Cabinda</option>
                <option value="AL">Kuanza-Sul</option>
              </select>
              </lagend>

              <br/>

            
          <C.labelError>{error}</C.labelError>
          <button type="submit" Text="Inscrever-se" class="btn btn-primary">Cadastrar</button>
          <C.labelError>{error}</C.labelError>

          <br/>
        <lagend>
          <div class="page-header">
            <h1>Visualizar Reunião</h1>   
          </div>
          </lagend>
          
          
        <C.labelError>{error}</C.labelError>
            <Button Text="Visualizar" onClick={Visualizar} />

            <br/>
        <lagend>
          <div class="page-header">
            <h1>Validar Reunião</h1>   
          </div>
          </lagend>

          <C.labelError>{error}</C.labelError>
            <Button Text="Validar" onClick={Validar}/>






     
    </C.Container>
  );
};

export default Signup;
