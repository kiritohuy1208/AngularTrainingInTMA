import { AfterContentChecked,EventEmitter, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import {Hero} from './../hero'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements 
  OnInit,
  OnChanges,
  DoCheck,
  OnDestroy, 
  AfterContentInit ,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
  {

  @Input() hero: Hero
  @Input() isToggle:boolean
  @Output() voted = new EventEmitter<Hero>();
  @ContentChild('projectedContent',{"static":true}) projectedContent:any
  @ViewChild('contentChild',{static:true}) contentChild:any
  heroTmp:string
  counter=0
  interval:any
  didVote = false;
  constructor() { }

  vote(agreed:Hero){
    this.voted.emit(agreed);
   
  }
  onRemoteFarent(){
    console.log("Remote it")
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
  }
  ngOnInit() {
    this.heroTmp="Huy"
    console.log("lifecycle ngOnInit called")
    // this.interval= setInterval(()=>{
    //   this.counter = this.counter+1
    //   console.log(this.counter)
    // },1000)
    console.log(this.projectedContent)
    console.log("View child "+this.contentChild)
  }
  ngDoCheck(): void {
      console.log('Docheck called')
      console.log("View child "+this.contentChild)
  }
  // Nó thực thi sau khi Angular chiếu content lên component view với thẻ ng-content nên phương thức này giúp bạn có thể truy xuất content 
  //được truyền vào với ContentChild decorator ví dụ như lấy giá trị 1 public property từ component content chẳng hạn
  ngAfterContentInit(): void {
      console.log("after content init")
      console.log(this.projectedContent)
      console.log("View child "+this.contentChild)
  }
  // then call after ngAfterContentInit and after doCheck called againt
  ngAfterContentChecked(): void {
      console.log("After content checked init")
      console.log("View child "+this.contentChild)
  }
  //Được gọi sau khi Angular đã hoàn thành khởi tạo view component và view con. 
  //Và nó chỉ chạy duy nhất một lần Mục đích sử dụng thông thường là thực thi view query với tham chiếu bằng ViewChild hoặc ViewChilden
  ngAfterViewInit(): void {
    
    console.log("After view  init")
    console.log("View child "+this.contentChild)
  }
  //Được gọi sau khi Angular kiểm tra component view và view những thằng con hoặc view chứa directive. 
  //Phương thức được gọi sau ngAfterViewInit lần đầu tiên, và sau mỗi ngAfterContentChecked
  ngAfterViewChecked(): void {
    console.log("After view  checked")
    console.log("View child "+this.contentChild)
  }
  ngOnDestroy(): void {
      console.log("lifeCyle ngOnDestroy called")
      clearInterval(this.interval)
  }

}
