import { Tag } from './tag.model';
import { Countries } from './countries.model';
import { City } from './city.model';
export interface Client {
    id: number;
    client_name: string;
    mobile: string;
    email: string;
    area: string;
    street?: string;
    building_number?: string;
    notes?: string;
    file?: string;
    city?: City;
    country?: Countries;
}
