interface ICreateUserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export { ICreateUserDTO };
