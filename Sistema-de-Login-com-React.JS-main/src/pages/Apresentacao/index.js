import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import * as C from "../Signin/styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "../../components/Button";


const Apresentacao = () => {
const { signin } = useAuth();
  const navigate = useNavigate();

  const EntrarHome  = () => {
      
      navigate("/home");
  
      
      }
      
  const EntrarPass  = () => {
      
    navigate("/pass");
    
    }
    

  


    return (
    <C.Container>

<lagend>
      <div class="page-header">
        <h1>Seja Bem vindo ao Agendador de Reuniões Tis</h1>
      </div>
      </lagend>
     
      <div class="page-header">
        <h1>Seja Bem vindo ao Agendador de Reuniões Tis</h1>
      </div>


        <Button Text="Agendar Reuniao" onClick={EntrarHome}/>
        <Button Text="Alterar a Password" onClick={EntrarPass}/>

        {/*<div class="col-md-4 col-sm-3" align="right">
        <img src={process.env.PUBLIC_URL +'/img/diana.jpg' } /> 
        </div>*/}


      
     

    </C.Container>
  );
};

export default Apresentacao;
