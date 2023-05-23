import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class WeatherService {
    constructor(private http: HttpClient) {}

    getWeatherForCity(city: string): Observable<any> {
        const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=27331869bf536c335ae9eb06162f92cf`
        return this.http.get(path);
    }
}
