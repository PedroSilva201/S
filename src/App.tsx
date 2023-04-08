import A from "./components/A";
import { Provider } from "./contexts";


function App() {


  return (
    <div>
      
      <Provider>
        <A />
      </Provider>
    </div>
  );
}

export default App;
