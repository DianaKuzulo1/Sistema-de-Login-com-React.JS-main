import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';


const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <body>
    
    <div class="container">
      
      <div class="page-header">
        <h1>Minha Agenda</h1>
      </div>

      <div class="row">
        <div class="col-sm-8">
          <h3>Cadastra Reuniao</h3>
          <form >

            <div class="form-group">
              <label for="temadareuniao">Tema da Reunião</label>
              <input type="text" name="temadareuniao" id="temadareuniao" class="form-control" placeholder="Digite o tema"/>
            </div>

            <div class="form-group">
              <label for="nome">Nome</label>
              <input type="text" name="nome" id="nome" class="form-control" placeholder="Digite o nome"/>
            </div>
          
            <div class="form-group">

            <label for="dataEvento" class="form-label">Data Reunião</label>
            <input type="datetime-local" name="dataEvento" id="nomeEvento" class="form-control" placeholder="Digite a Data de Fim">
            </input>
            </div>
            
            
            <div class="form-group">
            <label for="datainicio" class="form-label">Data Inicio</label>
            <input type="datetime-local" name="datainicio" id="datainicio" class="form-control" placeholder="Digite a Data de Inicio">
            </input>
            </div>
           
            <div class="form-group">
            <label for="datatermino" class="form-label">Data de Termino</label>
            <input type="datetime-local" name="datatermino" id="dataterminoo" class="form-control" placeholder="Digite a data de Termino">
            </input>
            </div>

            <div class="form-group">
              <label for="piso">Piso</label>
              <input type="text" name="piso" id="piso" class="form-control" placeholder="Digite o Piso"/>
            </div>


            


            <br/>

            <lagend>

              Prioridade
              <div class="radio">
              <label>
                
                <input type="radio" name="opcoes"/> Maxima
              </label>

              <label>
                <input type="radio" name="opcoes"/> Minima
              </label>
              <label>
                <input type="radio" name="opcoes"/> Media
              </label>

            </div>

            </lagend>
            <br/>

<lagend>

  Estado
  <div class="radio">
  <label>
    
    <input type="radio" name="clik"/> Aceite
  </label>

  <label>
    <input type="radio" name="clik"/> Espera
  </label>
  <label>
    <input type="radio" name="clik"/> Recusado
  </label>

</div>

</lagend>
 <br/>
 
  <lagend>
 <select name="uf" id="uf">
<option value="">Selecione a Sala</option>
	<option value="AC">sala1</option>
	<option value="AL">sala2</option>
	<option value="AP">Sala3</option>
</select>
</lagend>

<br/>

<lagend>
 <select name="uf" id="uf" >
<option value="">Selecione o Edificio</option>
	<option value="AC">Cabinda</option>
	<option value="AL">Kuanza-Sul</option>
</select>
</lagend>





<button type="submit"  class="btn btn-primary">Cadastrar</button>

<div class="col-md-4 col-sm-3" align="right">
<img src={process.env.PUBLIC_URL +'/img/diana.jpg' } /> 
 </div>

  
          </form>

        </div>

      
          
        </div>

      </div>
      
    </body>
    </C.Container>
  );
};

export default Home;
