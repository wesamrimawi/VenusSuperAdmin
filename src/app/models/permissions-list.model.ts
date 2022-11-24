export interface PermissionsList {
  id?: number;
  name: string;
  permission_id: number;
  create: boolean;
  update: boolean;
  delete: boolean;
  read: boolean;
}
