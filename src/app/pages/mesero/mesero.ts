import { Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface OrderItem {
  product: Product;
  quantity: number;
  notes: string;
}

@Component({
  selector: 'app-mesero',
  standalone: true,
  imports: [CommonModule, FormsModule,],
import { RouterLink } from '@angular/router';
import { Navbar } from '../../components/shared/navbar/navbar';

@Component({
  selector: 'app-mesero',
  imports: [RouterLink, FormsModule, CommonModule, Navbar],
  templateUrl: './mesero.html',
  styleUrls: ['./mesero.css']
})
export class MeseroComponent {
  searchTerm: string = '';
  order: OrderItem[] = [];

  // 10 Platos reales con imágenes
  products: Product[] = [
    { id: 1, name: 'Margarita Tradicional', price: 50000, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&q=80' },
    { id: 2, name: 'Risotto de Setas', price: 45000, image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&q=80' },
    { id: 3, name: 'Tacos de Atún', price: 34000, image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=500&q=80' },
    { id: 4, name: 'Muffin de Arándanos', price: 28000, image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=500&q=80' },
    { id: 5, name: 'Hamburguesa Clásica', price: 52000, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80' },
    { id: 6, name: 'Ensalada César', price: 25000, image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&q=80' },
    { id: 7, name: 'Corte Ribeye (Carnes)', price:75000, image: 'https://images.unsplash.com/photo-1594046243098-0fceea9d451e?w=500&q=80' },
    { id: 8, name: 'Sushi Roll Salmón', price: 64000, image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&q=80' },
    { id: 9, name: 'Sopa de Tomate', price: 20000, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80' },
    { id: 10, name: 'Cheesecake Fresa', price: 19000, image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&q=80' }
  ];

  // Lógica para que la barra de búsqueda filtre al instante
  get filteredProducts() {
    return this.products.filter(p => 
      p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Agregar producto al pedido
  addToOrder(product: Product) {
    const existingItem = this.order.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.order.push({ product, quantity: 1, notes: '' });
    }
  }

  // Quitar producto del pedido
  removeFromOrder(product: Product) {
    const index = this.order.findIndex(item => item.product.id === product.id);
    if (index !== -1) {
      if (this.order[index].quantity > 1) {
        this.order[index].quantity--;
      } else {
        this.order.splice(index, 1);
      }
    }
  }

  // Calcular el total a pagar
  get orderTotal() {
    return this.order.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  // Función final del botón rojo
  sendToChef() {
    if (this.order.length === 0) {
      alert('Agrega al menos un producto al pedido antes de enviarlo.');
      return;
    }
    console.log('Pedido enviado:', this.order);
    alert('¡Pedido enviado al Chef exitosamente!');
    this.order = []; // Limpia el carrito para la siguiente mesa
  }
}