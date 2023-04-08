import useExemplo from "../hooks/useExemplo";

function C(){
    const {nome,idade} = useExemplo();
    return <div>Nome: {nome} Idade: {idade} </div>;
}

export default C;

//Luana substitura o Benedito por alguns dias
//Elevador: Pessoas com deficiencia fisica e docentes, possui uma camera