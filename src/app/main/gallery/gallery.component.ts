import { GalleryService } from './../../service/gallery.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {

  currentIndex: any = -1;
  showFlag: any = false;
  selectedImageIndex: number = -1;

    constructor (private service:GalleryService) {}


    imageObject: Array<object>;
//     = [{
//       image: 'assets/img/slider/1.jpg',
//       thumbImage: 'assets/img/slider/1_min.jpeg',
//       alt: 'alt of image',
//       title: 'title of image'
//   }, {
//       image: '.../iOe/xHHf4nf8AE75h3j1x64ZmZ//Z==', // Support base64 image
//       thumbImage: '.../iOe/xHHf4nf8AE75h3j1x64ZmZ//Z==', // Support base64 image
//       title: 'Image title', //Optional: You can use this key if want to show image with title
//       alt: 'Image alt' //Optional: You can use this key if want to show image with alt
//   }
// ];

    showLightbox(index) {
        this.selectedImageIndex = index;
        this.showFlag = true;
    }

    closeEventHandler() {
        this.showFlag = false;
        this.currentIndex = -1;
    }

    ngOnInit(): void {
      
      this.service.getFiles(10000).snapshotChanges().pipe(
        map(changes =>
          // store the key
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      ).subscribe(fileUploads => {
        console.log(        this.imageObject = fileUploads    );
        this.imageObject = fileUploads;
      });
    };



}
