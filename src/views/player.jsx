import '../style/style.css'
export default function Player() {

    return (
        <div id="best" class="section__content hold full hue center">
    <style>
                {`#best .bg {
			position: absolute;
			width: 100%; height: 100%; top: 0; left: 0;
			background-size: cover;
			background-repeat: no-repeat;
			transition: all 0.3s;
			filter: brightness(90%);
		}
		#best .img:hover > .bg {
			filter: brightness(100%);
		}
		#best .top {
			height: 66vh;
		}
		#best .split {
			width: 50%; height: 100%;
		}
		#best div {
			transition: all 0.3s;
		}`}
    </style>
            <div name="1" class="top img focus row">
                <div class="bg" style="background-image: url(%-- see --%); background-position: %-- x || 50 --%% %-- y || 50 --%%;"></div>
                <div class="focus row gap">
                    <p class="left loud">BEST of <small><u>TODAY</u>:</small></p>
                </div>
            </div>
            <div class="focus row" style="height: 34vh; line-height: 34vh;">
                <div name="2" class="top2 img split left center">
                    <div class="bg" style="background-image: url(%-- see --%); background-position: %-- x || -50 --%% %-- y || 50 --%%;"></div>
                    <p name="what" contenteditable="true">Woah</p>
                </div>
                <div name="3" class="top3 img split right center">
                    <div class="bg" style="background-image: url(%-- see --%); background-position: %-- x || -50 --%% %-- y || 50 --%%;"></div>
                    <p name="what" contenteditable="true">What</p>
                </div>
            </div>
</div>

    )
};



JOY.route.page("best", function() {
    gun.get('main_section').get("1").put({
        see: 'https://source.unsplash.com/random/1000x1000',x: 150})
   
})
