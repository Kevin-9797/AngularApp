import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[] = [
    {
      titulo: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main',url:'/'},
        { titulo: 'Grafica',url:'grafica1'},
        { titulo: 'Progress',url:'progress'},

      ]
    }
  ]


  constructor() { }
}
