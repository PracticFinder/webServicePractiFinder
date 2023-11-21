import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-view-postulante',
  templateUrl: './view-postulante.component.html',
  styleUrls: ['./view-postulante.component.css']
})
export class ViewPostulanteComponent implements OnInit{
  usuario: any;
  ofertaData: any;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const navigation = window.history.state;
    if (navigation && navigation.user) {
      this.usuario = navigation.user;
    }
    if (navigation && navigation.ofertadata) {
      this.ofertaData = navigation.ofertadata;
    }
  }

}
