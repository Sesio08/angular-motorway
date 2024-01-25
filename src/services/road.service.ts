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
    getWebcams(param: any): Observable<any> {
        const url = "https://verkehr.autobahn.de/o/autobahn/" + param + "/services/webcam";
        return this.http.get(url);
    }
    getParking(param: any): Observable<any> {
        const url = "https://verkehr.autobahn.de/o/autobahn/" + param + "/services/parking_lorry";
        return this.http.get(url);
    }
    getWarning(param: any): Observable<any> {
        const url = "https://verkehr.autobahn.de/o/autobahn/" + param + "/services/warning";
        return this.http.get(url);
    }
    getClosure(param: any): Observable<any> {
        const url = "https://verkehr.autobahn.de/o/autobahn/" + param + "/services/closure";
        return this.http.get(url);
    }
    getElectricCharge(param: any): Observable<any> {
        const url = "https://verkehr.autobahn.de/o/autobahn/" + param + "/services/electric_charging_station";
        return this.http.get(url);
    }
    getDetail(param: any): Observable<any> {
        const url = "https://verkehr.autobahn.de/o/autobahn/details/" + param;
        console.log(url);
        return this.http.get(url);
    }
}