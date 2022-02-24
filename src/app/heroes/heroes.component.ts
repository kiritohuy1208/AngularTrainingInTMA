import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero"
import {HeroService} from '../hero.service'
// import {listHero} from '../mock-heroes'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService:HeroService) {  }
  // hero:Hero ={
  //   id:1,
  //   name:'QHuy'
  // }
  // list heroes
  heroes : Hero[]
  // function to get hero from service:
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  add(name:string) :void{
    name=name.trim()
    if(!name) {return}
    this.heroService.addHero({name} as Hero).subscribe(hero => {this.heroes.push(hero)})
  }
  delete(hero:Hero):void{
    this.heroes = this.heroes.filter(h=>h!==hero)
    this.heroService.deleteHero(hero).subscribe()
  }
  // selectedHero: Hero
  // onSelect(hero:Hero):void{
  //   this.selectedHero = hero
  // }
  ngOnInit() {
    this.getHeroes()
  }

}
