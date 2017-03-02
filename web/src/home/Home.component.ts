import {Component} from "@angular/core";
import ControllerBase from "../shared/ControllerBase";
import ResourceManager from "../shared/resources/ResourceManager.service";

@Component({
    moduleId: module.id,
    templateUrl: "Home.html"
})

export default class HomeComponent extends ControllerBase {
    constructor(resourceManager : ResourceManager) {
        super(resourceManager);
    }
}