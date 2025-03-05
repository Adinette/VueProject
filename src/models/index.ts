interface ITimeStamp {
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}

interface IUser extends ITimeStamp {
  id: string;
  username: string;
  email: string;
  password: string;
  token: string;
}

export type { IUser, ITimeStamp };
