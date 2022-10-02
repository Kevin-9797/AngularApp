import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'path';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const promesa = new Promise( (resolve,reject) => {
      
    //   if( true ){
        
    //     resolve('Hola mundo')  


    //   }else{
    //     reject('Algo salio mal')
  
    //   }



    // });


    // promesa.then( ( mensaje ) => {
    //   console.log(mensaje)

    // }).catch(err => {
     
    // })

    this.getUsers().then( users => {
      console.log(users)
    })

  }


  getUsers(){
    

    const promise = new Promise( resolve => {


      
          fetch('https://reqres.in/api/users?page=2')
              .then( resp => {
                console.log(resp.body)
              }).then( body => {
                console.log(body)
              })


    })

    return promise;
  }
}
