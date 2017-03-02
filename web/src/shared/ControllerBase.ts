import ResourceManager from "./resources/ResourceManager.service";
import {OnInit, OnDestroy} from "@angular/core";

export default class ControllerBase implements OnInit, OnDestroy {
    constructor(public resourceManager : ResourceManager) {

    }

    public getString(str : string) : string {
        return this.resourceManager.getString(str);
    }

    public getLink(link : string) : string {
        return this.resourceManager.getLink(link);
    }

    ngOnInit() : void {

    }

    ngOnDestroy() : void {

    }
}