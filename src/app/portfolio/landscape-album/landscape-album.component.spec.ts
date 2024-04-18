import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeAlbumComponent } from './landscape-album.component';

describe('LandscapeAlbumComponent', () => {
  let component: LandscapeAlbumComponent;
  let fixture: ComponentFixture<LandscapeAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandscapeAlbumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandscapeAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
