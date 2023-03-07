import logo from "./logo.js";
import icon from "./icon.js";
const nav = (routes) => {
	return `
  <nav id="nav" >
  <ul>
        <a href="#home" class="logo center unit">
          ${logo(100)}
        </a>
    ${(function () {
		var r = "";
		routes.forEach((i) => {
			r += `<li><a class='act' href='#${i.where}'>${icon(
				i.icon
			)}</a></li>`;
		});
		return r;
	})()}
    </ul>
    
  </nav>
  `;
};

export default nav;
