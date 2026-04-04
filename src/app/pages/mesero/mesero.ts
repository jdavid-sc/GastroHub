import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../components/shared/navbar/navbar';

@Component({
  selector: 'app-mesero',
  imports: [RouterLink, FormsModule, CommonModule, Navbar],
  templateUrl: './mesero.html',
  styleUrl: './mesero.css',
})
export class Mesero {
     busqueda = '';

  productos = [
    { id: 1, nombre: 'Hamburguesa', precio: 15000 },
    { id: 2, nombre: 'Pizza', precio: 25000 },
    { id: 3, nombre: 'Gaseosa', precio: 5000 },
    { id: 4, nombre: 'Perro Caliente', precio: 12000 }
  ];

  pedido: any[] = [];

  productosFiltrados() {
    return this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
    );
  }

  agregarProducto(producto: any) {
    this.pedido.push(producto);
  }

}

