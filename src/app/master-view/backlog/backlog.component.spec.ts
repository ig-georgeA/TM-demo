import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxListModule, IgxAvatarModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxInputGroupModule, IgxTabsModule, IgxGridModule } from '@infragistics/igniteui-angular';
import { BacklogComponent } from './backlog.component';

describe('BacklogComponent', () => {
  let component: BacklogComponent;
  let fixture: ComponentFixture<BacklogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacklogComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxListModule, IgxAvatarModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxInputGroupModule, IgxTabsModule, IgxGridModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
