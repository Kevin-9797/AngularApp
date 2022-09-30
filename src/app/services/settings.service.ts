import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public linkTheme = document.querySelector('#theme');

  constructor() { }


  changeTheme( value:string ){
    
    const url = `./assets/css/colors/${ value }.css`
    this.linkTheme.setAttribute('href',url);
    localStorage.setItem('theme',url)
    
    this.checkCurrrentTheme();
  }
  
  
  
  checkCurrrentTheme(){
    
    const  links:NodeListOf<Element> = document.querySelectorAll('.selector') ;


 
    links.forEach( e => {
      e.classList.remove('working');
      const btnTheme = e.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`

      const currentTheme = this.linkTheme.getAttribute('href');

      if( btnThemeUrl === currentTheme ){
        e.classList.add('working')
      }


    })

  }



}
