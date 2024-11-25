import React from "react";
import CenterContainer from "../components/CenterContainer";
import InputPattern from "../components/InputPattern";

function PageTest ( ){
    return(
        <CenterContainer title={"Cadastro de Clientes"}>
            <InputPattern
             label="Input Basics"
             type="number"
             placeholder="Coloque um número"
            />
        </CenterContainer>
    )
}

export default PageTest