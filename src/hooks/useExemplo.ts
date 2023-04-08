import { useContext } from "react";
import { Contexto } from "../contexts";


function useExemplo(){
    const context = useContext(Contexto);
    return context;
}

export default useExemplo