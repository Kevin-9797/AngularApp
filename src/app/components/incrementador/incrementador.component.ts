import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

  @Input('valor') progress:number ;
  @Input('btnClass') btnClass:string = 'btn-primary' ;

  ngOnInit(){
    
    this.btnClass = `btn ${ this.btnClass }`
    
  }

  @Output() valueExit:EventEmitter<number> = new EventEmitter();

 
  

  constructor() { }

  get porcentaje(){
    return `${ this.progress }%`
  }

  changeValue( valor:number ){

    if( this.progress >= 100 && valor >= 0 ){
        this.valueExit.emit(100)
        return this.progress = 100;
    }

    
    if( this.progress <= 0 && valor < 0 ){
      this.valueExit.emit(0)
      return this.progress = 0;
  }

    this.progress = this.progress + valor
    this.valueExit.emit( this.progress )
  }

  onChange( valor:number ){

    if( valor >= 100){
      this.progress = 100;
    }else if( valor <= 0){
      this.progress = 0;
    }else{
      this.progress = valor;
    }


    
    this.valueExit.emit( this.progress );

    

  }

  isInvalid(){
    return ( this.progress >= 100 || this.progress <= 0 ) ? 'is-invalid' : ''
  }



}
