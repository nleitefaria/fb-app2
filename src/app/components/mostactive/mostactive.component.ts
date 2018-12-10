import { Component, OnInit } from '@angular/core';
import { MostactiveService } from '../../services/mostactive.service';

@Component({
  selector: 'app-mostactive',
  templateUrl: './mostactive.component.html',
  styleUrls: ['./mostactive.component.css'],
  providers: [MostactiveService]
})
export class MostactiveComponent implements OnInit 
{ 
    mostActives : any[];
    location: string = 'Most active';

    constructor(private httpService: MostactiveService) 
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
        this.httpService.getMostactive().subscribe(                
                response => {
                  if (response.error) 
                  {
                    alert('Server Error');
                  } 
                  else 
                  {
                    this.mostActives = response;                     
                  }
                },
                error => {
                  alert('Server error');
                }
                
              );       
    }
    

}
