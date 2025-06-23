import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewsAndAnnouncementComponent } from './news-and-announcement.component';

describe('NewsAndAnnouncementComponent', () => {
  let component: NewsAndAnnouncementComponent;
  let fixture: ComponentFixture<NewsAndAnnouncementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NewsAndAnnouncementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsAndAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
