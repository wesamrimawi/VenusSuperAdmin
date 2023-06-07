import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-clients-details",
  templateUrl: "./clients-details.component.html",
  styleUrls: ["./clients-details.component.scss"],
})
export class ClientsDetailsComponent implements OnInit {
  tableCols: any = [];
  filters: string[] = [];
  tableTitle: string = this._translate.instant("Clients Details");
  dateTimeOptions: any;
  filterForm: FormGroup = new FormGroup({});

  constructor(private _translate: TranslateService, private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.initTableColsHeader();
    this.loadDateTimeOptions();
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

  private initFilterForm() {
    this.filterForm = this._fb.group({
      dateTimeOptions: [""],
      fromDate: [""],
      toDate: [""],
      businessType: [],
      Tag: [],
      subTag: [],
      plan: [],
      country: [],
      subscriptionType: [],
      expiryDate: [""],
      creationDate: [""],
      activationDay: [""],
      code: [""],
    });
  }

  private loadDateTimeOptions() {
    this.dateTimeOptions = [
      { label: "Today" },
      { label: "This Week" },
      { label: "This Month" },
      { label: "This Year" },
      { label: "Yesterday" },
      { label: "Last Week" },
      { label: "Last Month" },
      { label: "Last Year" },
      { label: "Customzie" },
    ];
  }
}
