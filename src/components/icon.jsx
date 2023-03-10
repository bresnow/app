import icons from "../utils/icons.js";

const Icon = (name, size) => {
	return (
		<svg class='center' xmlns="http://www.w3.org/2000/svg" width={
		size || '24'
  } fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">{icons[name].map((p) =>
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={p} />
		)}</svg>)
};

export default Icon;
