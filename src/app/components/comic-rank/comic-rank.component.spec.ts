import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicRankComponent } from './comic-rank.component';

describe('ComicRankComponent', () => {
  let component: ComicRankComponent;
  let fixture: ComponentFixture<ComicRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
