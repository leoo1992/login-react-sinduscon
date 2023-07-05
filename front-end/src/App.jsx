import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import "./index.css";
import LoginPage from "./pages/LoginPage";
import CadastroUsuario from "./pages/CadastroUsuario";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <Router>
      <Switch>
        <LoginPage path="/login" component={LoginPage}/>
        <CadastroUsuario path="/cadastro" component={CadastroUsuario} />
      </Switch>
    </Router>
  );
}

export default App;
