import {Icon} from "./icon.jsx";
const NavigationBar = ({routes}) => {
  return (
    <nav id="navbar">
      <ul id="navbar-nav">
          <li id="nav-item" class="unit row center gap">
              <a id="logo" href="" ></a>
          </li>
    {
      routes.map(({where, icon: path}) =>(  
        <li id="nav-item">
          <a id="nav-link" class="act" href={ "#" +where}>
           <span id="ion-icon"><Icon name={path}/></span>
            <span id="link-text">{where}</span>
          </a>
        </li>)
      )
    }
    </ul>
  </nav>
  );
};

export default NavigationBar;
