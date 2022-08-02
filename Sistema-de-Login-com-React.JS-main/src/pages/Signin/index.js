import React, { useState } from "react";
import Input from "../../components/Input";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

const Signin = () => {
    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email | !senha) {
            setError("Preencha todos os campos");
            return;
        }

        const res = signin(email, senha);

        if (res) {
            setError(res);
            return;
        }

        navigate("/home");
    };
    return ( <
        C.Container >
        <
        C.Label > SISTEMA DE LOGIN < /C.Label> <
        C.Content >
        <
        Input type = "email"
        placeholder = "Digite seu E-mail"
        value = { email }
        onChange = {
            (e) => [setEmail(e.target.value), setError("")] }
        /> <
        Input type = "password"
        placeholder = "Digite sua Senha"
        value = { senha }
        onChange = {
            (e) => [setSenha(e.target.value), setError("")] }
        /> <
        C.labelError > { error } < /C.labelError>

        <
        /C.Content> <
        div >
        <
        Button Text = "Entrar"
        color = "danger"
        onClick = { handleLogin }
        /> <
        /div> <
        /C.Container>

    );
};

export default Signin;