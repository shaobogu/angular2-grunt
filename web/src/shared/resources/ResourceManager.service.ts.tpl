import { Injectable } from '@angular/core';

@Injectable()
export default class ResourceManager {
    public getString(str : string) : string {
        return this.en_us[str];
    }

    public getLink(link : string) : string {
        return this.links[link];
    }

    private en_us : any = <%= en_us %>;
    private links : any = <%= links %>;
}