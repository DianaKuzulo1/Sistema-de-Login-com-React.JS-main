import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

const Validar = () => {
    const myData = ["visualizar", "visualizar", "visualizar", "visualizar", "visualizar", "visualizar", ]
    const { signin } = useAuth();
      const navigate = useNavigate();
      
      
          

  return (
    <C.Container>
       <lagend>
      <div class="page-header">
        {<h1>Essas são as Reuniões em Espera</h1>}
        </div>
        </lagend>
        <lagend>
 <select name="uf" id="uf">
<option value="">Selecione a Sala</option>
	<option value="AC">Reunião1</option>
	<option value="AL">Reunião2</option>
	<option value="AP">Reunião3</option>
</select>
</lagend>
        
       
    </C.Container>
  );
};

export default Validar;
