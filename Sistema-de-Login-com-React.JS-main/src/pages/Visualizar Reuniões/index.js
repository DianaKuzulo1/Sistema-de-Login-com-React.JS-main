import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';


const Visualizar = () => {
    const myData = ["visualizar", "visualizar", "visualizar", "visualizar", "visualizar", "visualizar", ]
    const { signin } = useAuth();
      const navigate = useNavigate();
    
      
          

  return (
    <C.Container>
        <lagend>
      <div class="page-header">
        {<h1>Essas são as Reuniões Realizadas</h1>}
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">tema</th>
      <th scope="col">Dia</th>
      <th scope="col">MÊS</th>
      <th scope="col">MÊS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        <table border="1">
          {
            myData.map(e => {
              return (
                <tr>
                  <td>
                    {e}
                  </td>
                </tr>
              )
            })
          }
        </table>
      </div>
      </lagend>

      <lagend>
      <div class="page-header">
        {<h1>Essas são as Reuniões Em Espera</h1>}
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">tema</th>
      <th scope="col">Dia</th>
      <th scope="col">MÊS</th>
      <th scope="col">MÊS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        <table border="1">
          {
            myData.map(e => {
              return (
                <tr>
                  <td>
                    {e}
                  </td>
                </tr>
              )
            })
          }
        </table>
      </div>
      </lagend>

      <lagend>
      <div class="page-header">
        {<h1>Regeitadas</h1>}
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">tema</th>
      <th scope="col">Dia</th>
      <th scope="col">MÊS</th>
      <th scope="col">MÊS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        <table border="1">
          {
            myData.map(e => {
              return (
                <tr>
                  <td>
                    {e}
                  </td>
                </tr>
              )
            })
          }
        </table>
      </div>
      </lagend>
      
    </C.Container>
  );
};

export default Visualizar;
