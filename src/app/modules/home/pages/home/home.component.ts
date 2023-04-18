import { Component } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private postService:PostService
  ){
this.postService.getPost().subscribe(
  resp=>{
    console.log(resp)
  }
)
  }

}
