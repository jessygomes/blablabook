export type UserWithRole =
  | ({
      role: {
        name: string;
        id: number;
      };
    } & {
      id: number;
      username: string;
      email: string;
      password: string;
      isPrivate: boolean;
      createdAt: Date;
      updatedAt: Date;
      roleId: number;
    })
  | null;
