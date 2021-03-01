import spring_revolution from './images/spring_revolution.jpg';
import fight_for_democracy from './images/fight_for_democracy.jpg';
import './style/App.css';
import MainTable from './Table.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <img src={spring_revolution} className="App-logo" alt="spring_revolution" />
          Myanmar Spring Revolution Shame List
          <img src={fight_for_democracy} className="App-logo" alt="fight_for_democracy" /></h1>
      </header>
      <p>ရေးလက်စဖြစ်ပါသည်။ အမှားများ၊ ကျန်ရှိနေသော ဓာတ်ပုံများ၊ အချက်အလက်များကို <a href="https://www.facebook.com/spring.myanmar.9">Spring Myanmar</a> သို့ ပေးပို့နိုင်ပါသည်။</p>
      <MainTable/>
    </div>
  );
}

export default App;
