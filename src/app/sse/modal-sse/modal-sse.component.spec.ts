import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSseComponent } from './modal-sse.component';

describe('ModalSseComponent', () => {
  let component: ModalSseComponent;
  let fixture: ComponentFixture<ModalSseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
