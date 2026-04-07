import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-admin',
  imports: [CommonModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
   productos = [
    { id: 1, nombre: 'Hamburguesa', precio: 15000, estado: 'Activo' },
    { id: 2, nombre: 'Pizza', precio: 20000, estado: 'Activo' },
    { id: 3, nombre: 'Jugo', precio: 8000, estado: 'Activo' }
  ];
}
