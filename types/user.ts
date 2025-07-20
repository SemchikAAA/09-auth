export type User = {
  username: string;
  email: string;
  avatar: string;
};

export type AuthRequest = {
  email: string;
  password: string;
};

export type UpdateUserProps = {
  username: string;
};
