import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Apresentacao from "../pages/Apresentacao"
import Alterar from "../pages/Alterar"
import Visualizar from "../pages/Visualizar Reuniões"
import Validar from "../pages/Validar";


const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
          <Route exact path="/apresentacao" element={<Apresentacao />} />
          <Route exact path="/pass" element={<Alterar/>} />
          <Route exact path="/visualizar"element={<Visualizar/>} />
          <Route exact path="/validar"element={<Validar/>} />
          

        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
