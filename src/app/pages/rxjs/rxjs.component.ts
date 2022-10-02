import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, map, Observable, retry, Subscription, take } from 'rxjs';
import { filter } from 'rxjs/operators'
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs:Subscription;

  constructor() { 



  // this.returnObservable().pipe(
  //     retry(1), //el retry es para decirle al codigo cuantas veces intentar el observable 
      
  //   )
  //   .subscribe( 
  //     valor => console.log(valor) ,
  //     (err) => console.warn('ERROR',err),
  //     () => console.info('Obs terminado')

  //   )


    this.intervalSubs = this.returnInterval()
        .subscribe( (valor) => {
          console.log( valor )
        })


    
  }

  ngOnDestroy(): void {

    this.intervalSubs.unsubscribe();
    
  }

  

  returnInterval():Observable<number>{

    const interval$ = interval(100).pipe(
      map( valor => {
        return valor + 1;
      }),
      filter( valor => ( valor % 2 === 0 ? true : false )),
      take(4), // cuenta el numero de emisiones que va a realizar el subscribe
      );

    return interval$;
  }
  

returnObservable():Observable<number>{
  
  let i = -0;
    
  return new Observable<number>( observer => {


    const interval = setInterval( () => {
        i++;
        observer.next(i)
        
        if( i === 4){
          clearInterval( interval )
          observer.complete();


        }
        if( i === 2){
          i = 0;
          observer.error('i vale 2');


        }
      }, 1000)
  })


}



}
