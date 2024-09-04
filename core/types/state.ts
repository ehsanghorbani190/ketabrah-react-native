import {TUser} from '@/core/types/data';

export interface IAuthState {
  username: string;
  password: string;
  user: TUser | null;
}
export interface IUserAccountState {
  logoutModalVisibility: boolean;
}
