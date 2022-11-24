export interface SystemModule {
  id: number;
  name: string;
  subModules?:SystemModule[];
  parentModule?:SystemModule;
  creation_date: string;
}
