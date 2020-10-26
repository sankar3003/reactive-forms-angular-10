import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  data: any;


  constructor(
    private dataservice:UserService
  ) { }

  ngOnInit() {
    this.dataservice.getData().subscribe(res=>{
      this.data=res
    })
  }

  view(id){


  }

}
