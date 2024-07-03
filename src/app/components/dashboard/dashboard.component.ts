import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  public menuItems = [
    {
      SNo: "INC1",
      Opened: "2024-06-05 09:35:59",
      Description: "App appears to no longer work on iPhone",
      Caller: "Adam",
      Division: "Metals",
      OpenedBy: "Adam",
      Priority: "4 - Low",
      State: "In-Progress",
      Category: "Software",
      AssignmentGroup: "Custom Apps",
      AssignedTo: "David",
      Updated: "2024-06-25 02:53:05",
      UpdatedBy: "James@harsco.com"
    },
    {
      SNo: "INC2",
      Opened: "2024-06-05 09:35:59",
      Description: "App appears to no longer work on iPhone",
      Caller: "Adam",
      Division: "Metals",
      OpenedBy: "Adam",
      Priority: "4 - Low",
      State: "Error",
      Category: "Software",
      AssignmentGroup: "Custom Apps",
      AssignedTo: "David",
      Updated: "2024-06-25 02:53:05",
      UpdatedBy: "James@harsco.com"
    },
    {
      SNo: "INC3",
      Opened: "2024-06-05 09:35:59",
      Description: "App appears to no longer work on iPhone",
      Caller: "Adam",
      Division: "Metals",
      OpenedBy: "Adam",
      Priority: "4 - Low",
      State: "Completed",
      Category: "Software",
      AssignmentGroup: "Custom Apps",
      AssignedTo: "David",
      Updated: "2024-06-25 02:53:05",
      UpdatedBy: "James@harsco.com"
    }
];
}
