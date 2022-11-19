import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageObject = [{
    image: 'https://trebadaznas.com/wp-content/uploads/2020/04/Elektrotehni%C4%8Dki-fakultet-Univerzitet-u-Beogradu.jpg',
    thumbImage: 'https://trebadaznas.com/wp-content/uploads/2020/04/Elektrotehni%C4%8Dki-fakultet-Univerzitet-u-Beogradu.jpg',
    title: 'ETF 1'
  }, {
    image: 'https://www.danas.rs/wp-content/uploads/2020/04/ETF-e1586033288891.jpg',
    thumbImage: 'https://www.danas.rs/wp-content/uploads/2020/04/ETF-e1586033288891.jpg'
  }, {
    image: 'https://www.politika.rs/thumbs//upload/Article/Image/2018_03///677z381_ETF-------foot-D-JEVREMOVICH.jpg',
    thumbImage: 'https://www.politika.rs/thumbs//upload/Article/Image/2018_03///677z381_ETF-------foot-D-JEVREMOVICH.jpg',
    title: 'ETF title 2'
  }, {
    image: 'http://telit.etf.rs/wp-content/gallery/etf-zgrada/425585_254089181349680_2068448777_n.jpg',
    thumbImage: 'http://telit.etf.rs/wp-content/gallery/etf-zgrada/425585_254089181349680_2068448777_n.jpg',
    title: 'ETF title 3'
  }];

}
