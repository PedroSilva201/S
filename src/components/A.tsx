import B from "./B";
import useExemplo from "../hooks/useExemplo";

function A(){
    const {nome, idade, setNome, setIdade} = useExemplo();
    return (
        <>
        <div>
        <label>Nome</label>
        <input value={nome} onChange={(e)=>setNome(e.target.value)} />
      </div>
      <div>
        <label>Idade</label>
        <input value={idade} onChange={(e)=>setIdade(e.target.value)} />
      </div>
      <B/>
      </>
    );
}

export default A;