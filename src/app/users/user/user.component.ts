import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user!: { id: number; name: string; };

  constructor(private route:ActivatedRoute) { }
  // este trecut users/:id
  ngOnInit(): void {
    this.user = {
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
      // id: Number(this.route.snapshot.paramMap.get('id')),
      // name: this.route.snapshot.paramMap.get('name')
    }
    this.route.params.subscribe((params:Params)=>{
      // console.log(this.user)
      console.log(params)
      // console.log(this.user.name)
      this.user.id = params['id'];
      this.user.name = params['name'];
    })
  }

}
