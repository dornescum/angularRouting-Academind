import { Component, OnInit } from '@angular/core';
import {ServiceService} from "src/app/servers/service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServiceService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.servers = this.serversService.getServers();
  }
  onReload(){
    // fara slash//
    // this.router.navigate(['servers'], {relativeTo: this.route})
  }
}
