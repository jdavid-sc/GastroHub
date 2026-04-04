import { Component } from '@angular/core';
import { RouterLink, Routes } from '@angular/router';
import { Navbar } from '../../components/shared/navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
