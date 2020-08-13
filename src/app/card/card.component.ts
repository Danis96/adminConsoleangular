import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  listaCustomera= [
    // {
    //   title:"Danis Preldzic",
    //   city:"Sarajevo, Bosna i Hercegovina"
    // },
    // {
    //   title:"Elvir Halilovic",
    //   city:"Sarajevo, Bosna i Hercegovina"
    // },
    // {
    //   title:"Amer Hero",
    //   city:"Sarajevo, Bosna i Hercegovina"
    // }
  ]

  ngOnInit(): void {
  }

}
