import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Navbar } from '../../components/shared/navbar/navbar';

@Component({
  selector: 'app-cocinero',
  imports: [CommonModule, RouterLink, Navbar],
  templateUrl: './cocinero.html',
  styleUrl: './cocinero.css',
})
export class Cocinero {

  pedidos = [
    {
      id: 101,
      mesa: 5,
      estado: 'pendiente',
      hora: '12:30',
      productos: [
        { nombre: 'Hamburguesa', cantidad: 2 },
        { nombre: 'Gaseosa', cantidad: 1 }
      ]
    },
    {
      id: 102,
      mesa: 3,
      estado: 'pendiente',
      hora: '12:35',
      productos: [
        { nombre: 'Pizza', cantidad: 1 },
        { nombre: 'Jugo', cantidad: 2 }
      ]
    }
  ];

  pedidoSeleccionado: any = null;

  seleccionarPedido(pedido: any) {
    this.pedidoSeleccionado = pedido;
  }

}

