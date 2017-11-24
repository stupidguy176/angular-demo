import { Address } from './address.model';
import { Company } from './company.model';

export class User {
    id?: string;
    name?: string;
    username?: string;
    email?: string;
    address?: Address;
    phone?: string;
    website?: string;
    company?: Company;
}
