import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  public keyword:string;
  public currentPage:number=1;
  public size:number=10;
  public dataImages=[];
  private totalPages: number;

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

  onLoadImages () {
    this.dataImages = [];
    this.currentPage =1;
    this.totalPages =0;
    this.doSearch();
  }

  doSearch() {
    this.httpClient.get('https://pixabay.com/api/?key=18337228-6af736da5f9a0eedaf9bb10d9&q='+
      this.keyword+'&per_page='+
      this.size+'&page='+
      this.currentPage)
      .subscribe(data=>{
        data['hits'].forEach(image => {
          this.dataImages.push(image);
        });
        this.totalPages = data['totalHits']/this.size;
        console.log('page'+this.currentPage+"/"+ this.totalPages);
        
      },err=>{
        console.log(err);
      })
  }

  loadData (evt) {
    if(this.currentPage < this.totalPages){
      ++this.currentPage;
      this.doSearch();
      evt.target.complete();
    }
    if(this.currentPage >= this.totalPages)
      evt.target.disabled=true;
    
  }

}
