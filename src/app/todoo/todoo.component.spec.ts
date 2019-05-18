import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodooComponent } from './todoo.component';

describe('TodooComponent', () => {
  let component: TodooComponent;
  let fixture: ComponentFixture<TodooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
