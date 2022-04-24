export type LoginResponse = {
  user: User;
  token: string;
};

export type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  createdAt: string;
};

export type LoginData = {
  email: string;
  password: string;
};
