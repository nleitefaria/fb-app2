import { Component, OnInit } from '@angular/core';
import { GainersService } from '../../services/gainers.service';

@Component({
  selector: 'app-gainers',
  templateUrl: './gainers.component.html',
  styleUrls: ['./gainers.component.css'],
  providers: [GainersService]
})
export class GainersComponent implements OnInit 
{
    gainers : any[];
    location: string = 'Gainers';

    constructor(private httpService: GainersService) 
    {       
    }

    ngOnInit()
    {
        this.init();
    }

    init() 
    {
        this.getMostActive();
    }

    getMostActive() 
    {
        this.httpService.getGainers().subscribe(                
            response => {
              if (response.error) 
              {
                alert('Server Error');
              } 
              else 
              {
                this.gainers = response;                  
              }
            },
            error => {
              alert('Server error');
            }         
          );       
    }
}
