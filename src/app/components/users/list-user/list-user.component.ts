import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  userList: any[] = [];

  selectedUser: any = {};
 
  constructor( 
    private readonly userService: UsersService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.userService.findAllUsers().subscribe({
      next: res => {
        console.log(res.data);
        this.userList = res.data || [];
      }
    });
  }

  detailUser(user: any) {
    console.log(user);
    this.selectedUser = user;
  }

  showAlertDeleteUser(userId: number) {
    Swal.fire({
      title: 'Está seguro de borrar el usuario',
      showDenyButton: true,
      confirmButtonText: 'Sí',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.deleteUser(userId);
      }
    });
  }

  deleteUser(id: number) {
    this.userService.deleteById(id).subscribe({
      next: res => {
        console.log(res.data);
        Swal.fire(`${res.message}`, '', 'info');
        this.findAll();
      }
    }); 
  }

}
