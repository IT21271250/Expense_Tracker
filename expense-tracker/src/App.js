import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExp from './components/IncomeExp'

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance />
        <IncomeExp />
      </div>
    </div>
  );
}

export default App;
