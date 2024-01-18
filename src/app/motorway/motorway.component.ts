import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RoadService } from '../../services/road.service';

@Component({
  selector: 'app-motorway',
  templateUrl: './motorway.component.html',
  styleUrl: './motorway.component.css'
})
export class MotorwayComponent {
  roadIdList: string[] = [];
  roadList: any[] = [];
  roadWork: any;
  detail: boolean = false;
  submenuIsVisible: boolean = false;
  submenuTop: number = 0;
  submenuLeft: number = 0;

  constructor(private roadService: RoadService) {

  }

  ngOnInit(): void {
    this.getMotorwayId();
  }

  getMotorwayId(): void {
    this.roadService.getRoadIds().subscribe(data => {
      ;
      this.roadIdList = data.roads;

    })
  }

  click(id: string): void {
    this.roadService.getRoadWorks(id).subscribe(data => {
      ;
      this.roadList = data.roadworks;
      console.log(this.roadList);
    })
    this.detail = false;
  }

  clickRoad(road: string, event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    if (target.classList.contains('selectionableRoad')) {
      this.submenuTop = target.offsetTop;
      this.submenuLeft = target.offsetLeft + target.offsetWidth;
      this.submenuIsVisible = true;
      this.roadWork = road;

      // Resto del código...
    }
    else if (!target.classList.contains('submenu')) {
      this.submenuIsVisible = false;
      this.roadWork = "";    
    }
  }


  clickDetail(roadWork: any): void {
    this.detail = true;
    this.roadWork = roadWork;
    console.log(this.roadWork);
  }
}
