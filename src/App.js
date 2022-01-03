import {Route} from "react-router-dom";
import "./css/style.css";
import Header from "./common/Header.js";
import Footer from "./common/Footer.js";
import Main from "./main/Main.js";
import Department from "./sub/Department.js";
import Board from "./sub/Board.js";
import Gallery from "./sub/Gallery.js";
import Location from "./sub/Location.js";
import Membership from "./sub/Membership.js";
import Youtube from "./sub/Youtube.js";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div className="App"> 
      <Header />

      <BrowserRouter>
        <Switch>
          <Route exact path="/react_portfolio_basic" component={Main}></Route> 
          <Route exact path="/react_portfolio_basic/department" component={Department}></Route>
          <Route exact path="/react_portfolio_basic/board" component={Board}></Route>
          <Route exact path="/react_portfolio_basic/gallery" component={Gallery}></Route>
          <Route exact path="/react_portfolio_basic/youtube" component={Youtube}></Route>
          <Route exact path="/react_portfolio_basic/location" component={Location}></Route>
          <Route exact path="/react_portfolio_basic/membership" component={Membership}></Route>  
        </Switch>
      </BrowserRouter>
          
      <Footer />      
    </div>
  );
}

export default App;
