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

        { 
          titulo: 'Main',
          url: '/'
        },
        {
           titulo: 'Grafica',
           url: 'grafica1'
        },
        { 
          titulo: 'Progress',
          url: 'progress'
        },
        { 
          titulo: 'Promesas',
          url: 'promesas'
        },
        { 
          titulo: 'Rxjs',
          url: 'rxjs'
        },

      ]
    }
  ]


  constructor() { }
}
