import { Component, OnInit } from '@angular/core';
import { LosersService } from '../../services/losers.service';

@Component({
  selector: 'app-losers',
  templateUrl: './losers.component.html',
  styleUrls: ['./losers.component.css'],
  providers: [LosersService]
})
export class LosersComponent implements OnInit {

    losers : any[];
    location: string = 'Losers';

    constructor(private httpService: LosersService) 
    {       
    }

    ngOnInit()
    {
        this.init();
    }

    init() 
    {
        this.getLosers();
    }

    getLosers() 
    {
        this.httpService.getLosers().subscribe(                
            response => {
              if (response.error) 
              {
                alert('Server Error');
              } 
              else 
              {
                this.losers = response;                     
              }
            },
            error => {
              alert('Server error');
            }
            
          );       
    }

}
