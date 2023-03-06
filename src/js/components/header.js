import logo from "./logo.js";
import icon from "./icon.js";
const header = `
    <div id="header" class="unit row rim center">
      <div class="rim  right" id="account">
      </div>
      <div class="flex rim right">
      <a id="my"  class='unit right gap'>
        <img id="my" name="avatar" width="32em" class="sap" />
      </a>
        <a class="gap" href='#activity'>${icon("notification")}</a>
          <a class="gap" href='#search'>${icon("search")}</a>
      </div>
      <div class="unit rim left">
        <p id="place" class="unit left loud"></p>
      </div>
    </div>
  `;
export default header;
