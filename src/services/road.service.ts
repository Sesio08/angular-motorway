import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RoadService {

    constructor(private http: HttpClient) {}

    getRoadIds(): Observable<any> {
        const url = "https://verkehr.autobahn.de/o/autobahn/";
        return this.http.get(url);
    }

    getRoadWorks(param: any): Observable<any> {
        const url = "https://verkehr.autobahn.de/o/autobahn/" + param + "/services/roadworks";
        return this.http.get(url);
    }
}