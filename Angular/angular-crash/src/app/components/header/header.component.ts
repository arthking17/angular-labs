import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker';
  showAddTask!: boolean;
  subcription!: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subcription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
   }

  ngOnInit(): void {
  }

  toogleAppTask() {
    this.uiService.toogleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
