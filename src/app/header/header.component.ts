import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../services/header.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

	constructor(private headerService: HeaderService){}

	name : string = "";
	titulo : string = "";
	mision : string = "";
	foto : string = "";
	email : string = "";
	celular : string = "";
	ubicacion : string = "";
	redsocial : string = "";


	ngOnInit(): void {
        this.headerService.getHeader()
	.subscribe(  (data: any) =>{
	console.log(data);
	//alert(data);
	this.name = data.name;
	this.titulo = data.titulo;
	this.mision = data.mision;
	this.foto = data.foto;
	this.email = data.email;
	this.celular = data.celular;
	this.ubicacion = data.ubicacion;
	this.redsocial = data.redsocial;
	});
    }
}
