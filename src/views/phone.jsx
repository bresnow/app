export default function Phone({params}) {
    return (
        <div class="container">
            <input type="checkbox" class="toggle" id="toggle" checked="checked" /><label class="toggle" for="toggle"> Toggle tilt</label>
            <div class="menu">
                <div class="top">
                    <span class="search">
                        <input type="text"/>
                    </span>
                    <a class="exit" href="#" tabindex="0"></a>
                </div>
                <ul class="middle">
                    <li tabindex="0"><i class="fa fa-calendar"></i>Calendar</li>
                    <li tabindex="0"><i class="fa fa-camera"></i>Photos</li>
                    <li tabindex="0"><i class="fa fa-check-square-o"></i>Tasks</li>
                    <li tabindex="0"><i class="fa fa-map-marker"></i>Places</li>
                    <li tabindex="0"><i class="fa fa-codepen"></i>Codepen</li>
                    <li tabindex="0"><i class="fa fa-dribbble"></i>Dribbble</li>
                    <li tabindex="0"><i class="fa fa-user"></i>User account</li>
                    <li tabindex="0"><i class="fa fa-cogs"></i>Settings</li>
                </ul>
                <div class="bottom"></div>
                <div class="menu-back"></div>
                <div class="glass-reflection"></div>
            </div>
        </div>
    )
};

