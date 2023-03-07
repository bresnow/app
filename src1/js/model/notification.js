import icon from "../component/icon";
const notification = `
<div class="notification-ask">
    <li class='unit row gap surface sap rim '>
		<div name="from" class="unit row right">
			<p class="unit left " name='message'></p>
			<button class="reject center red rim ">${icon("cancel")}</button>
			<button class="accept center green right rim ">${icon("check")}</button>
		</div>
		<small><span class='right italic' name="when"></span></small>
	</li>
</div>
`;

export default notification;
