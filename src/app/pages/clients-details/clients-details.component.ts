import { SubscriptionType } from "./../../enum/subscription-type.enum";
import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from "src/app/shared/services/api.service";
import { Status } from "src/app/enum/status.enum";
import { Plan } from "src/app/models/plan.model";
import { Countries } from "src/app/models/countries.model";
import { Tag } from "src/app/models/tag.model";
import { SelectItem } from "primeng/api";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Client } from "src/app/models/client.model";
import { DatePipe } from "@angular/common";


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
  status: SelectItem<Status | any>[] = [];
  subscription: SelectItem<SubscriptionType | any>[] = [];
  allPlans$: Observable<Plan[] | any> = of([]);
  allCounties$: Observable<Countries[] | any> = of([]);
  allBusinessTypes$: Observable<any[] | any> = of([]);
  allMainTags$: Observable<Tag[] | any> = of([]);
  subTags$: Observable<Tag[] | any> = of([]);
  clientsList$: Observable<Client[] | any> = of([]);
  clientsDetails$: Observable<any[] | any> = of([]);
  disableSubTag: boolean = true
  tagId;
  totals$;
  filterBody;
  limit: number = 10;
  offset: number = 0;
  constructor(
    private _translate: TranslateService,
    private _fb: FormBuilder,
    private _apiService: ApiService,
    public _datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.subscription = Object.entries(SubscriptionType).map(
      ([key, value]) => ({ label: key, value: value })
    );
    this.initTableColsHeader();
    this.initFilterForm();
    this.loadAllBusinessTypes();
    this.loadAllCounties();
    this.loadAllTag();
    this.loadAllPlans();
    this.loadAllClients();
    this.getClientsDetails();
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
      clients: [],
      businessType: [],
      tag: [],
      subTag: [],
      plan: [],
      country: [],
      subscriptionType: [""],
      expiryDate: [""],
      creationDate: [""],
      activationDate: [""],
      code: [""],
    });
  }

  getClientsDetails() {
    this._apiService.apiName = "clients/details";
    this._apiService.options = { limit: 100, offset: this.offset };
    const tableBody = {
      clients: null,
      businessType: null,
      tag: null,
      subTag: null,
      plan: null,
      country: null,
      subscriptionType: "",
      expiryDate: "",
      creationDate: "",
      activationDate: "",
      code: "",
    };
    this.loadClientList(tableBody);
  }

  private loadClientList(body) {
    this.clientsDetails$ = this._apiService.add(body).pipe(
      map((resp) => {
        this.totals$ = resp.data.totals;
        return resp.error_code === 0 && resp.data.clientLists;
      })
    );
  }

  submit = (formValues: any): void => {
    this._apiService.apiName = "clients/details";
    this._apiService.options = { limit: 100, offset: this.offset };
    if (this.filterForm.invalid) {
      return;
    }

    this.filterBody = {
      clients: formValues?.clients ? formValues.clients : null,
      businessType: formValues?.businessType ? formValues.businessType : null,
      tag: formValues?.tag ? formValues.tag : null,
      subTag: formValues?.subTag ? formValues.subTag : null,
      plan: formValues?.plan ? formValues.plan : null,
      country: formValues?.country ? formValues.country : null,
      subscriptionType: formValues?.subscriptionType
        ? formValues.subscriptionType
        : "",
      creationDate: formValues?.creationDate
        ? (formValues.creationDate = this._datePipe.transform(
            formValues.creationDate,
            "yyyy/MM/dd"
          ))
        : "",
      activationDate: formValues?.activationDate
        ? formValues.activationDate= this._datePipe.transform(
            formValues.activationDate,
            "yyyy/MM/dd"
          )
        : "",
      expiryDate: formValues?.expiryDate
        ? formValues.expiryDate =  this._datePipe.transform(formValues.expiryDate, "yyyy/MM/dd")
        : "",
      code: formValues?.code ? formValues.code : "",
    };
    // return;
    this.loadClientList(this.filterBody);
    this.initFilterForm();
  };

  resetFrom() {
    this.getClientsDetails();
    this.filterForm.controls["clients"].setValue([]);
    this.filterForm.controls["businessType"].setValue([]);
    this.filterForm.controls["tag"].setValue([]);
    this.filterForm.controls["subTag"].setValue([]);
    this.filterForm.controls["plan"].setValue([]);
    this.filterForm.controls["country"].setValue([]);
    this.filterForm.controls["subscriptionType"].setValue([]);
    this.filterForm.controls["creationDate"].setValue("");
    this.filterForm.controls["activationDate"].setValue("");
    this.filterForm.controls["expiryDate"].setValue("");
    this.filterForm.controls["code"].setValue(null);
  }

  private loadAllClients = (): void => {
    this._apiService.apiName = "clients";
    this.clientsList$ = this._apiService.getAll().pipe(
      map((resp) => {
        return resp.error_code === 0 && resp.data;
      })
    );
  };

  private loadAllBusinessTypes = (): void => {
    this._apiService.apiName = `businesstypes`;
    this.allBusinessTypes$ = this._apiService
      .getAll()
      .pipe(map((resp) => resp.error_code === 0 && resp.data));
  };

  private loadAllCounties = (): void => {
    this._apiService.apiName = "countries";
    this.allCounties$ = this._apiService
      .getAll()
      .pipe(map((resp) => resp.error_code === 0 && resp.data));
  };

  getSubTagById = (id: any): void => {

    this._apiService.apiName = `tags/${id}/subtags`;
    this.subTags$ = this._apiService.getAll().pipe(
      map((resp) => {
        return resp.error_code === 0 && resp.data;
      })
    );
  };

  onChange(formValue) {
    this.tagId = formValue.value.tag
    this.getSubTagById(this.tagId)
    if (this.tagId === '') {
      this.disableSubTag = true
    } else {

      this.disableSubTag = false
    }
  }

  private loadAllTag = (): void => {
    this._apiService.apiName = "tags/all";
    this.allMainTags$ = this._apiService.getAll().pipe(
      map((resp) => {
        return resp.error_code === 0 && resp.data;
      })
    );
  };

  private loadAllPlans = (): void => {
    this._apiService.apiName = "plans";
    this.allPlans$ = this._apiService
      .getAll()
      .pipe(map((resp) => resp.error_code === 0 && resp.data));
  };
}
