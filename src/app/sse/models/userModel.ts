export class UserModel {
  id: number;
  name: string;
  empresa: number;

  constructor(data: User) {
    this.id = data.id;
    this.name = data.name;
    this.empresa = data.empresa;
  }
}
export interface User {
  id: number;
  name: string;
  empresa: number;
}
