import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../model/roles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {
  idList: IRole[] = [];

  http = inject(HttpClient); 
  
 


  ngOnInit(): void {
  this.getAllRoles()
 
}

  getAllRoles() { 
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res: any)=> { 
      this.idList = res.data; 
    })

  }









  // firstName: string = "John";
  // version: number = 18;
  // isActive: boolean = false;
  // currentDate: Date = new Date();
  // inputType: string = "button";
  // selectedCities: string = '';

  // showWelcomeAlert() { 
  //   alert ("welcome")
  // }

  // showMessage(message: string) { 
  //   alert(message)
  // }
}

