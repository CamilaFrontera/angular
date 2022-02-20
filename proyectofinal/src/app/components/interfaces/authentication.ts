
export interface AuthenticationResp{
  status?: boolean;
  uid?: string;
  username?: string;
  token?: string;

}

export interface LoggedUser{
  uid?: string;
  username?: string,
  email?: string;
}
