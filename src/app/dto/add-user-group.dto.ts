import { PermissionsList } from './../models/permissions-list.model';
export interface AddUserGroupDto {
  name: string;
  permissions_list: PermissionsList[];
}


