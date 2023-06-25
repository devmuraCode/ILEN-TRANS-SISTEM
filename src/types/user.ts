export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
  success: boolean;
}
export interface User {
  id?: any;
  name: string;
  email: string;
  company: string;
  admin: boolean;
}

export interface UserAdd {
  id?: number;
  company: string;
  email: string;
  name: string;
  password: string;
  admin: boolean;
}
