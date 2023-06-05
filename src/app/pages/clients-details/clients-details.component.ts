import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
@Component({
  selector: "app-clients-details",
  templateUrl: "./clients-details.component.html",
  styleUrls: ["./clients-details.component.scss"],
})
export class ClientsDetailsComponent implements OnInit {
  tableCols: any = [];
  filters: string[] = [];
  tableTitle: string = this._translate.instant("Clients Details");

  constructor(private _translate: TranslateService) {}

  ngOnInit(): void {
    this.initTableColsHeader()
  }

  private initTableColsHeader = (): void => {
    this.tableCols = [
      { header: this._translate.instant("id"), field: "id" },
      { header: this._translate.instant("client-name"), field: "client_name" },
      { header: this._translate.instant("mobile"), field: "mobile" },
      { header: this._translate.instant("email"), field: "email" },
      {
        header: this._translate.instant("Bussiness Name"),
        field: "bussiness_name",
      },
      { header: "Code", field: "code" },
      { header: "Branches details", field: "branches_details" },
      { header: "Number of Branches", field: "number_of_branches" },
      { header: "Number of Devices", field: "number_of_devices" },
    ];
    this.filters = this.tableCols.map((el: any) => el.field);
  };
}
