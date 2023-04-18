import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateDogComponent } from './generate-dog.component';

describe('GenerateDogComponent', () => {
  let component: GenerateDogComponent;
  let fixture: ComponentFixture<GenerateDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateDogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
