import { SystemModule } from './system-module.model';
export interface Plan {
  id: number;
  plan_name: string;
  system_modules?: SystemModule[];
  created_at: Date;
}
