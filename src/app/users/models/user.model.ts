import { Address } from './address.model';
import { Company } from './company.model';

export class User {
    image?: string;
    id?: string;
    name?: string;
    username?: string;
    email?: string;
    address?: Address;
    phone?: string;
    website?: string;
    company?: Company;
}
