import { Component, Input, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router'; 
import { DeliveryService } from 'src/app/servicios/delivery.service';  
@Component({   
  selector: 'app-detalle-plato',   
  templateUrl: './detalle-plato.component.html',   
  styleUrls: ['./detalle-plato.component.css'] }) export class DetallePlatoComponent implements OnInit {  
  preciototal:any;
 @Input() arregloplato: any []=[];
  plato: any;
  cantidad:number=0; 
  precioplato: number=0;
  
  constructor(private activatedRoute:ActivatedRoute, private servicioDelibery:DeliveryService) {  
      }  
      ngOnInit(): void { 
        this.activatedRoute.params.subscribe(params =>
          {console.log(params['id'])       
          this.plato = this.servicioDelibery.getPlatoXId(params['id'])  })
        this.precioplato= this.plato?.precio;
          console.log("probando input"+this.plato)


        } 
    
    agregar()  {
      
      


      //this.cantidad+=1;
      //this.preciototal=this.cantidad*this.precioplato;
      //console.log("Probando el método");
      //console.log("Probando cantidad platos: " + this.cantidad);
      //console.log( this.preciototal);
      this.servicioDelibery.disparadorDeAgregacion.emit({data:this.arregloplato})              
      
      
  }

  
    } 