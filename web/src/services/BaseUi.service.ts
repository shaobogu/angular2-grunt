import {Response, URLSearchParams} from "@angular/http";
import {Observable} from "rxjs/Observable";
import * as _ from "lodash";

export default class BaseUiService {

    protected successHandler<T>(res : Response) : T {
        return res.json() || null;
    }

    protected errorHandler<T>(res : Response | any) : Observable<T> {
        return Observable.throw(res);
    }

    protected getSearchParams(obj : any) : URLSearchParams {
        let params = new URLSearchParams();
        _.each(obj, (value : any, key : string) => {
            if (value instanceof Array) {
                _.each(value, (v : any) => {
                    params.append(key, v);
                });
            } else {
                params.set(key, value);
            }
        });
        return params;
    }
}