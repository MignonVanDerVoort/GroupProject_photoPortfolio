import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectureAlbumComponent } from './architecture-album.component';

describe('ArchitectureAlbumComponent', () => {
  let component: ArchitectureAlbumComponent;
  let fixture: ComponentFixture<ArchitectureAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchitectureAlbumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchitectureAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
