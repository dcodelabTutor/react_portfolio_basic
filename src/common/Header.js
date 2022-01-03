import {NavLink} from "react-router-dom";

function Header(){
  const active = {color: "aqua"};
  return (  
    <header>
      <div className="inner">
        <h1>
        <NavLink activeStyle={active} exact to="/react_portfolio_basic">DCODELAB-router</NavLink>
        </h1>

        <ul id="gnb">
          <li><NavLink activeStyle={active} exact to="/react_portfolio_basic/department">DEPARTMENT2</NavLink></li>
          <li><NavLink activeStyle={active} exact to="/react_portfolio_basic/board">BOARD</NavLink></li>
          <li><NavLink activeStyle={active} exact to="/react_portfolio_basic/gallery">GALLERY</NavLink></li>
          <li><NavLink activeStyle={active} exact to="/react_portfolio_basic/youtube">YOUTUBE</NavLink></li>
          <li><NavLink activeStyle={active} exact to="/react_portfolio_basic/location">LOCATION</NavLink></li>
          <li><NavLink activeStyle={active} exact to="/react_portfolio_basic/membership">MEMBERSHIP</NavLink></li>
        </ul>
      </div>
    </header>
  )
}

export default Header;