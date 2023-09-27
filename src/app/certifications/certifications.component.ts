import { Component, OnInit } from '@angular/core';
import { CertificationsService } from '../services/certifications.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  certificaciones: any[] = [];

  constructor(private certificacionesService: CertificationsService) { }
  ngOnInit(): void {
    this.certificacionesService.getCertifications().subscribe((data: any[]) => {
      console.log(data);
      this.certificaciones = data;
    });
  }

}
