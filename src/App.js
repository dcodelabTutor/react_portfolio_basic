import "./css/style.css";
import Header from "./common/Header.js";
import Footer from "./common/Footer.js";
import Main from "./main/Main.js";
import Department from "./sub/Department.js";
import Board from "./sub/Board.js";
import Gallery from "./sub/Gallerly.js";
import Location from "./sub/Location.js";
import Membership from "./sub/Membership.js";
import Youtube from "./sub/Youtube.js";

function App() {
  return (
    <div className="App"> 
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
