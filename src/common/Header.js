import {NavLink} from "react-router-dom";

function Header(){
  const active = {color: "aqua"};
  return (  
    <header>
      <div className="inner">
        <h1>
        <NavLink activeStyle={active} exact to="/a">DCODELAB</NavLink>
        </h1>

        <ul id="gnb">
          <li><NavLink activeStyle={active} exact to="/a/department">DEPARTMENT</NavLink></li>
          <li><NavLink activeStyle={active} exact to="/a/board">BOARD</NavLink></li>
          <li><NavLink activeStyle={active} exact to="/a/gallery">GALLERY</NavLink></li>
          <li><NavLink activeStyle={active} exact to="/a/youtube">YOUTUBE</NavLink></li>
          <li><NavLink activeStyle={active} exact to="/a/location">LOCATION</NavLink></li>
          <li><NavLink activeStyle={active} exact to="/a/membership">MEMBERSHIP</NavLink></li>
        </ul>
      </div>
    </header>
  )
}

export default Header;