import {HashRouter, Route} from "react-router-dom";
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

function App() {
  return (
    <div className="App"> 
      <Header />
          <HashRouter>
            <Switch>
              <Route  path="/" component={Main}></Route> 
              <Route  path="/department" component={Department}></Route>
              <Route  path="/board" component={Board}></Route>
              <Route  path="/gallery" component={Gallery}></Route>
              <Route  path="/youtube" component={Youtube}></Route>
              <Route  path="/location" component={Location}></Route>
              <Route  path="/membership" component={Membership}></Route>  
            </Switch>
          </HashRouter>
      <Footer />      
    </div>
  );
}

export default App;
