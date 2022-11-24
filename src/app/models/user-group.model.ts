import { PermissionsList } from './permissions-list.model';
export interface UserGroup {
  id: number;
  name: string;
  rolePermissions?: PermissionsList[];
}
