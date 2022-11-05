import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  filter = new FormControl('');
  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.filter.valueChanges.subscribe((value) => {
      this.appService.filter = value || '';
    })
  }

  handleClear() {
    this.filter.setValue('');
  }

}
