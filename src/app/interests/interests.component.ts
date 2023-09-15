import { Component } from '@angular/core';
import { InterestsService } from '../services/interests.service';


@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent {
  interests: any[] = [];

  constructor( private InteresesService:InterestsService) { }
  ngOnInit(): void {
    this.InteresesService.getInterests().subscribe((data: any[]) => {
      console.log(data);
      this.interests = data;
    });
  }

}
