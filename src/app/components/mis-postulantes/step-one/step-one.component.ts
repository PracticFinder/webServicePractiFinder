import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent  implements OnInit{
  ofertaData: any;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const navigation = window.history.state;
    if (navigation && navigation.ofertaData) {
      this.ofertaData = navigation.ofertaData;
    }
  }

  postulantes(): void {
    this.router.navigate(['/mis-postulantes']);
  }

  showUsuario(data: any): void{
    this.router.navigate(['/view-postulante'], {
      state: {
        user: data,
        ofertadata: this.ofertaData
      }
    });
  }
}
