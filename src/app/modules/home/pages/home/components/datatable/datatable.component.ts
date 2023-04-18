import { Component } from '@angular/core';
import { PostService } from 'src/app/core/services/post.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {
  numResults = 10;
  resultsToShow = this.numResults;
  public posts: Array<any> = []
  constructor(
    private postService: PostService
  ) {
    this.postService.getPost().subscribe(
      (resp: any) => {
        console.log(resp)
        this.posts = resp;
      }
    )
  }
  loadMore() {
    this.resultsToShow += this.numResults;
  }
}
