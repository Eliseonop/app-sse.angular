export class TaskModel {
  id: number;
  name: string;
  description: string;
  empresa: number;

  constructor(data: Task) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.empresa = data.empresa;
  }
}

export interface Task {
  id: number;
  name: string;
  description: string;
  empresa: number;
}
