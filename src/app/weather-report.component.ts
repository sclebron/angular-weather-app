import { OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
    selector: "app-weather-report",
    templateUrls: "./weather-report.component.html",
    styleUrls: ["./weather-report.component.scss"],
})
export class WeatherReportComponent implements OnInit {
    data$: Observable<any>;
}