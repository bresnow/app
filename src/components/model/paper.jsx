import { Icon } from "../icon.jsx";

const Paper = () =>
<div >

<div class="paper-card">
    <li class='unit crack'>
		<a name="link" class="unit">
			<div >
				<img class="icon-cover sap" name="cover"/>
			</div>
			<p class="unit gap" name='name'></p>
		</a>
		<div class="">
			<button name="data-link" class="share yellow"><Icon name="share"/></button>
			<button name="data-paper" class="delete red"><Icon name="trash"/></button>
		</div>		
	</li>
</div>
<div class="paper-card-mini">
    <li class='unit crack'>
		<a name="link" class="unit">
			<div >
				<img class="icon-cover sap" name="cover"/>
			</div>
			<p class="unit gap" name='name'></p>
		</a>
		
	</li>
</div>
	</div>


export default Paper;
