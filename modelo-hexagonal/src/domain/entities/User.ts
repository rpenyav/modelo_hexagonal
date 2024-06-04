export interface User {
  list: List[];
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
  isLast: boolean;
}

export interface List {
  _id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  role: string;
  address: string;
  postalcode: string;
  phone1: string;
  isActive: boolean;
  __v: number;
}
