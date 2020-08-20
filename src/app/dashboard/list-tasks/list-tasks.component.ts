import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-tasks",
  templateUrl: "./list-tasks.component.html",
  styleUrls: ["./list-tasks.component.scss"],
})
export class ListTasksComponent implements OnInit {
  Task = "";
  ListTask: any[] = [];
  constructor() {}

  ngOnInit(): void {}

  AddTask() {
    //Creo la constante tareas y las propiedades que tiene
    const Task = {
      nombre: this.Task,
      done: false,
    };
    this.ListTask.push(Task);
    this.Task = "";
  }

  //Funcion para eliminar la tarea especifica
  DeleteTask(index: number) {
    this.ListTask.splice(index, 1);
  }

  //Funcion para actualizar el estado de la tarea
  UpdateTask(Tasks, index) {
    this.ListTask[index].finalizada = !Tasks.finalizada;
  }
}
