import './App.css';
// import TopBar from './Components/TopBar';
// import SideBar from './Components/DashboardComponents/SideBar';
import Dashboard from './Components/Dashboard';
import PaymentModule from './Components/DashboardComponents/PaymentModule';


function App() {
  return (
    <div className="App">
      {/* <TopBar/> */}
      {/* <SideBar/> */}
      <Dashboard />
      <PaymentModule />
    </div>
  );
}

export default App;
