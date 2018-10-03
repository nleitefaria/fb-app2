import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IposService} from '../../services/ipos.service';

@Component({
  selector: 'app-ipos',
  templateUrl: './ipos.component.html',
  styleUrls: ['./ipos.component.css'],
  providers: [IposService]
})

export class IposComponent implements OnInit 
{
    id: string;
    upcomingIPOs : any[];
    todaysIPOs : any[];
    location: string = 'IPOs';

  constructor(private route: ActivatedRoute, private httpService: IposService) {
    this.route.params.subscribe((params) => {
      this.id = params.id;
    });
  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.getUpcomingIpos();
    this.getTodaysIpos();
  }

  getUpcomingIpos() {
    this.httpService.getUpcomingIpos().subscribe(
      response => {
        if (response.error) {
          alert('Server Error');
        } else {

          this.upcomingIPOs = response.rawData;									
        }
      },
      error => {
        alert('Server error');
      }
    );

  }
  
  getTodaysIpos() {
      this.httpService.getTodaysIpos().subscribe(
        response => 
        {
          if (response.error) 
          {
            alert('Server Error');
          } 
          else 
          {
            this.todaysIPOs = response.rawData; 
            console.log(this.todaysIPOs);
          }
        },
        error => {
          alert('Server error');
        }
      );

    }

}
