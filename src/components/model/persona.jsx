const Persona = () => (
	<section>	
		<div class="persona-main unit">
		<div class='unit'>
			<div class="unit sap">
				<img name="avatar" width="35%" alt="persona" class="gap sap" />
			</div>
			<p class="unit row crack" name='username'></p>
		</div>
	</div>
		<div class="persona-mini">
			<img name="avatar" width="48em" alt="persona" class="gap sap" />
		</div>
		<div class="persona-mini-detail">
			<div class=" unit row">
				<a name="link" class="unit gap left">
					<img name="avatar" width="52em" alt="persona" class="gap sap" />
					<span name="name" class="gap right"></span>
				</a>
			</div>
		</div>
		<div class="persona-friend">
			<li
				class='unit row rim sap'>
				<a name="link" class="act">
					<img name="avatar" width="54em" alt="persona" class="unit left sap" />
					<div class="unit left" style="margin-left: 1em;">
						<p name="name" class="unit gap center"></p>
					</div>
				</a>
			</li>
		</div></section>
)
	;

export default Persona;
