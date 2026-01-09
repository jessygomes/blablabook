export type UserWithRole = {
  role: {
    name: string;
    id: number;
  };
} & {
  id: number;
  username: string;
  profilePicture: string | null;
  email: string;
  password: string;
  isPrivate: boolean;
  createdAt: Date;
  updatedAt: Date;
  roleId: number;
};
