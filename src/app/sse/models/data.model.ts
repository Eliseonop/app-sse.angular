import { Task } from "./task.model";

interface Data {
  id: string;
  data: Task;
  empresa: number;
}

export class DataModel {
  id: string;
  data: Task;
  empresa: number;
  constructor(data: Data) {
    this.id = data.id;
    this.data = data.data;
    this.empresa = data.empresa;
  }
}
