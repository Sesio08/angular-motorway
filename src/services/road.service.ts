import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    constructor(private http: HttpClient) {}

    getRoadIds(parametros: any): Observable<any> {
        const url = "https://verkehr.autobahn.de/o/autobahn/";
        return this.http.get(url);
    }

    getRoad(parametros: any): Observable<any> {
        const url = "https://verkehr.autobahn.de/o/autobahn/" + parametros + "/services/roadworks";
        return this.http.get(url);
    }
}