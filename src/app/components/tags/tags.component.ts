import { Component, OnInit } from '@angular/core';
import { TagsService } from '../../services/tags.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
  providers: [TagsService]
})
export class TagsComponent implements OnInit {

    location: string = 'Tags';
    tags: any;

  	constructor(private httpService : TagsService) 
  	{ 
  	}

  	ngOnInit() 
  	{ 	
  		this.init(); 	 	
  	}
  	
  	init()
    {  
        this.httpService.getTags().subscribe(
			response =>{
				if(response.error) { 
					alert('Server Error');
				} else {																																
					this.tags = response;															
				}
			},
			error =>{
				alert('Server error');
			}
		);
    }
}
