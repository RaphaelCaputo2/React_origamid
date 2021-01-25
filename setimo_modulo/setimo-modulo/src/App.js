import { LimparTudo } from './components/LimparTudo';
import Testando from './components/Testando';
import GlobalProvider from './context/GlobalProvider';

function App() {
  return (
    <div>
      <GlobalProvider>
        <Testando />
        <LimparTudo />
      </GlobalProvider>
    </div>
  );
}

export default App;
