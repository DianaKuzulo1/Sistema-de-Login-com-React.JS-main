import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';


const Home = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();

    return ( <
        C.Container >
        <
        body >

        <
        div class = "container" >

        <
        div class = "page-header" >
        <
        h1 > Minha Agenda < /h1> < /
        div >

        <
        div class = "row" >
        <
        div class = "col-sm-8" >
        <
        h3 > Cadastra Reuniao < /h3> <
        form >

        <
        div class = "form-group" >
        <
        label
        for = "temadareuniao" > Tema da Reunião < /label> <
        input type = "text"
        name = "temadareuniao"
        id = "temadareuniao"
        class = "form-control" / >
        <
        /div>

        <
        div class = "form-group" >
        <
        label
        for = "nome" > Nome < /label> <
        input type = "text"
        name = "nome"
        id = "nome"
        class = "form-control" / >
        <
        /div>


        <
        div class = "form-group" >

        <
        label
        for = "dataEvento"
        class = "form-label" > Data Reunião < /label> <
        input type = "datetime-local"
        name = "dataEvento"
        id = "nomeEvento"
        class = "form-control" >
        <
        /input> < /
        div >


        <
        div class = "form-group" >
        <
        label
        for = "datainicio"
        class = "form-label" > Data Inicio < /label> <
        input type = "datetime-local"
        name = "datainicio"
        id = "datainicio"
        class = "form-control" >
        <
        /input> < /
        div >

        <
        div class = "form-group" >
        <
        label
        for = "datatermino"
        class = "form-label" > Data de Termino < /label> <
        input type = "datetime-local"
        name = "datatermino"
        id = "dataterminoo"
        class = "form-control" >
        <
        /input> < /
        div > <
        br / >

        <
        lagend >

        Prioridade <
        div class = "radio" >
        <
        label >

        <
        input type = "radio"
        name = "opcoes" / > Maxima <
        /label>

        <
        label >
        <
        input type = "radio"
        name = "opcoes" / > Minima <
        /label> <
        label >
        <
        input type = "radio"
        name = "opcoes" / > Media <
        /label>

        <
        /div>

        <
        /lagend> <
        br / >

        <
        lagend >

        Estado <
        div class = "radio" >
        <
        label >

        <
        input type = "radio"
        name = "clik" / > Aceite <
        /label>

        <
        label >
        <
        input type = "radio"
        name = "clik" / > Espera <
        /label> <
        label >
        <
        input type = "radio"
        name = "clik" / > Recusado <
        /label>

        <
        /div>

        <
        /lagend>


        <
        button type = "submit"
        class = "btn btn-primary" > Cadastrar < /button>

        <
        /form>

        <
        /div>



        <
        /div>

        <
        /div>

        <
        /body> < /
        C.Container >
    );
};

export default Home;