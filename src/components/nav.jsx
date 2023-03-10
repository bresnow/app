import logo from "./logo.js";
import icon from "./icon.js";
const nav = (routes) => {
  return `
    <nav id="navbar">
      <ul id="navbar-nav">
          <li id="nav-item" class="unit row center gap">
              <a id="logo" href="" ></a>
          </li>
    ${(function () {
      var r = "";
      routes.forEach(({where, icon: path}) => {
        r += `        
        <li id="nav-item">
          <a id="nav-link" class="act" href="#${where}">
           <span id="ion-icon">${icon(path)}</span>
            <span id="link-text">${where}</span>
          </a>
        </li>`;
      });
      return r;
    })()}
    </ul>
  </nav>
  `;
};
JOY.style({
  '.txt-grad-animation': {
    color: '#fff',
    background: '-webkit-linear-gradient(-45deg, #50cc7f, #f5d100, #92fe9d, #00c9ff)',
    background: '-moz-linear-gradient(-45deg, #50cc7f, #f5d100, #92fe9d, #00c9ff)',
    background: '-o-linear-gradient(-45deg, #50cc7f, #f5d100, #92fe9d, #00c9ff)',
    background: 'linear-gradient(-45deg, #50cc7f, #f5d100, #92fe9d, #00c9ff)',
    backgroundSize: '400% 400%',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
    '-webkit-animation': 'txtanimation2 15s ease infinite',
    '-moz-animation': 'txtanimation2 15s ease infinite',
    animation: 'txtanimation2 15s ease infinite',
  }
})
export default nav;
