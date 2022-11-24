import { UserGroup } from './user-group.model';
export interface User {
  id: number;
  name: string;
  password:string;
  username:string;
  mobile:string;
  email:string;
  role?:UserGroup;
}
