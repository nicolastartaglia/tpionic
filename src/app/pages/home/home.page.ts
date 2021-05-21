import { Component, OnInit } from '@angular/core';
import { MethodHijacker } from 'src/app/decorators/methodHijacker.decorator';
import { TimeTracker } from 'src/app/decorators/timeTracker.decorator';
import { Traductor } from 'src/app/decorators/traductor.decorator';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
@TimeTracker('Home')
export class HomePage implements OnInit {


  @Traductor('eng')
  welcomeMessage: string;

  data: any;

  constructor() {
   }


   @MethodHijacker() // MethodDecorator
   sayGoodBye() {
    console.log("Good bye");
   }

  ngOnInit() {
    this.data = [
      {
        title: 'Plannifier sa semaine',
        description: 'Visibilité sur les 7 prochains jours',
        icon: 'assets/images/calendar.png'
      },
      {
        title: 'Atteindre ses objectifs',
        description: 'Priorisation des tâches',
        icon: 'assets/images/award.png'
      },
      {
        title: 'Analyser sa productivité',
        description: 'Visualiser le travail accompli',
        icon: 'assets/images/diagram.png'
      }
    ];
    this.sayGoodBye();
  }

  onClick(event){
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)');
    systemDark.addListener(this.colorTest);
    if(event.detail.checked){
      document.body.setAttribute('data-theme', 'dark');
    }
    else{
      document.body.setAttribute('data-theme', 'light');
    }
  }

   colorTest(systemInitiatedDark) {
    if (systemInitiatedDark.matches) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }

}
