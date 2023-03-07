import icons from "../utils/icons.js";

const icon = (name, size) => {
	return `
  <svg class='center' xmlns="http://www.w3.org/2000/svg" width='${
		size || 24
  }' fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">${(function () {
		var path = "";
		icons[name].forEach((p) => {
			path +=
				`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d='${p}'/>` +
				"\n";
		});
		return path;
	})()}</svg>`;
};

export default icon;
