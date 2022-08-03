import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { signup } = useAuth();

    const handleSignup = () => {
        if (!email | !emailConf | !senha) {
            setError("Preencha todos os campos");
            return;
        } else if (email !== emailConf) {
            setError("Os e-mails não são iguais");
            return;
        }

        const res = signup(email, senha);

        if (res) {
            setError(res);
            return;
        }

        alert("Usuário cadatrado com sucesso!");
        navigate("/");
    };
    const relocate_casa = () => {

        navigate("/home")
    };


    return ( <
        C.Container >
        <
        div class = "page-header" >
        <
        h1 > Area de Cadastramento do Usuario < /h1> <
            /div> <
            C.Content >
            <
            div class = "form-group" >
            <
            label
        for = "nome" >
        Nome do Usuario < /label> <
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
        for = "email" > E - mail < /label > <
        input type = "email"
        name = "email"
        id = "email"
        class = "form-control"
        placeholder = "Digite o email do novo Usuario" / >
        <
        /div>


        <
        div class = "form-group" >
        <
        label
        for = "email" > Password < /label > <
        input type = "password"
        placeholder = "Digite sua Senha"
        value = { senha }
        class = "form-control"
        onChange = {
            (e) => [setSenha(e.target.value), setError("")] }
        /> <
        /div>




        <
        C.labelError > { error } < /C.labelError> <
        Button Text = "Cadastrar Usuario"
        onClick = { handleSignup }
        />

        <
        /C.Content> <
        /C.Container>
    );
};

export default Signup;