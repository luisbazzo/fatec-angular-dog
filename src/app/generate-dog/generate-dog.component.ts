import { DogService } from './../dog.service';
import { Dog } from './../dog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-dog',
  templateUrl: './generate-dog.component.html',
  styleUrls: ['./generate-dog.component.css']
})
export class GenerateDogComponent implements OnInit{

  constructor(private dogService : DogService) { }

  ngOnInit(): void {
    this.loadDog();
  }
  loadDog(){
    this.dogService.getRandomDog().subscribe(
      {
        next : dog => this.dog = dog
      }
    );
  }

  dog : Dog = {} as Dog;

getName() : string []{
  return this.dog.message.split("/")[4].split("-");
}
}
