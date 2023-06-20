import { OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { WeatherService } from "./weather-service";

@Component({
    selector: "app-weather-report",
    templateUrls: "./weather-report.component.html",
    styleUrls: ["./weather-report.component.scss"],
})
export class WeatherReportComponent implements OnInit {
    data$: Observable<any>;

    constructor(
        private weatherService: WeatherService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.data$ = this.route.params.pipe(
            map((params) => params["locationName"]),
            filter((name) => !!name),
            concatMap((name) => this.weatherService.getWeatherForCity(name))
        );
    }
}