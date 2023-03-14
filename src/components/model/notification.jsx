import { Icon } from "../icon.jsx";

const Notification = ()=>
<div class="notification-ask">
    <li class='unit row gap surface sap rim '>
		<div name="from" class="unit row right">
			<p class="unit left " name='message'></p>
			<button class="reject center red rim "><Icon name="cancel" /></button>
			<button class="accept center green right rim "><Icon name="check"/></button>
		</div>
		<small><span class='right italic' name="when"></span></small>
	</li>
</div>
;

export default Notification;
