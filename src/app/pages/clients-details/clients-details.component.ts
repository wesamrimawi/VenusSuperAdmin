import { SubscriptionType } from './../../enum/subscription-type.enum';
import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ApiService } from "src/app/shared/services/api.service";
import { Status } from "src/app/enum/status.enum";
import { Plan } from "src/app/models/plan.model";
import { Countries } from "src/app/models/countries.model";
import { Tag } from 'src/app/models/tag.model';
import { SelectItem } from 'primeng/api';
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";
import { Client } from 'src/app/models/client.model';

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
  clients;
  limit: number = 10;
  offset: number = 0;
  branchesList$: Observable<any[] | any> = of([]);
  constructor(
    private _translate: TranslateService,
    private _fb: FormBuilder,
    private _apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.subscription = Object.entries(SubscriptionType).map(
      ([key, value]) => ({ label: key, value: value })
    );
    this.initTableColsHeader();
    this.loadDateTimeOptions();
    this.initFilterForm();
    this.loadAllBusinessTypes();
    this.loadAllCounties();
    this.loadAllTag();
    this.loadAllPlans();
    this.loadAllClients();
    this.getClientsDetails();
    this.loadAllBranches()
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
      code: null,
    };
    this.clientsDetails$ = this._apiService.add(tableBody).pipe(
      map((resp) => {
        console.log(resp.data.clientLists);
        this.clients = resp.data.clientLists;
        return resp.error_code === 0 && resp.data.clientLists;
      })
    );
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
    ];
  }

  private loadAllClients = (): void => {
    this._apiService.apiName = "clients";
    this.clientsList$ = this._apiService.getAll().pipe(
      map((resp) => {
        console.log(resp.data);
        // this.clients = resp.data;
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
        console.log(resp.data);
        return resp.error_code === 0 && resp.data;
      })
    );
  };

  private loadAllTag = (): void => {
    this._apiService.apiName = "tags/all";
    this.allMainTags$ = this._apiService.getAll().pipe(
      map((resp) => {
        resp.data.map((tag) => {
          // console.log(tag.id)
          return this.getSubTagById(tag.id);
        });
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
  private loadAllBranches = (): void => {
    this._apiService.apiName = "clients/branches";
    this.branchesList$ = this._apiService
      .getAll()
      .pipe(map((resp) => {
        console.log(resp.data)
        return resp.error_code === 0 && resp.data
      }));
  };
}
