import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RoadService } from '../../services/road.service';
import {
  trigger, state, style, animate, transition, query, group
} from '@angular/animations';

@Component({
  selector: 'app-motorway',
  templateUrl: './motorway.component.html',
  styleUrl: './motorway.component.css',
  animations: [
    trigger('fade', [])
  ]
})
export class MotorwayComponent {
  roadIdList: string[] = [];
  roadList: any[] = [];
  roadWork: any;
  road: any;
  detail: boolean = false;
  submenuIsVisible: boolean = false;
  submenuTop: number = 0;
  submenuLeft: number = 0;
  call: string = "";
  callDetail: string = "";
  home: boolean = true;

  constructor(private roadService: RoadService) {
    this.roadWork = '';
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

  clickRoad(road: string, event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    if (target.classList.contains('selectionableRoad')) {
      const rect = target.getBoundingClientRect();

      const adjustedTop = rect.top + window.scrollY;
      const adjustedLeft = rect.left + window.scrollX + target.offsetWidth;

      this.submenuTop = adjustedTop;
      this.submenuLeft = adjustedLeft;
      this.roadWork = road;
      if (!this.submenuIsVisible) {
        this.submenuIsVisible = true;
      }
      else if (this.submenuIsVisible) {
        this.submenuIsVisible = false;
      }

    }
    else if (!target.classList.contains('submenu')) {
      this.submenuIsVisible = false;
      this.roadWork = "";
      document.body.classList.remove('scroll-locked');

    }
  }

  clickRoadWork(): void {
    this.roadService.getRoadWorks(this.roadWork).subscribe(data => {
      ;
      this.roadList = data.roadworks;
      console.log(this.roadList);
    })    
    if (!this.submenuIsVisible) {
      this.submenuIsVisible = true;
    }
    else if (this.submenuIsVisible) {
      this.submenuIsVisible = false;
    }
    this.home = false;
    this.detail = false;
    this.call = "roadwork";
    this.callDetail = "roadwork";
  }


  clickParking(): void {
    this.roadService.getParking(this.roadWork).subscribe(data => {
      ;
      this.roadList = data.parking_lorry;
      console.log(this.roadList);
    })
    if (!this.submenuIsVisible) {
      this.submenuIsVisible = true;
    }
    else if (this.submenuIsVisible) {
      this.submenuIsVisible = false;
    }
    this.home = false;
    this.detail = false;
    this.call = "parking lorry";
    this.callDetail = "parking_lorry";
  }

  clickWarning(): void {
    this.roadService.getWarning(this.roadWork).subscribe(data => {
      ;
      this.roadList = data.warning;
      console.log(this.roadList);
    })
    if (!this.submenuIsVisible) {
      this.submenuIsVisible = true;
    }
    else if (this.submenuIsVisible) {
      this.submenuIsVisible = false;
    }
    this.home = false;
    this.detail = false;
    this.call = "warning";
    this.callDetail = "warning";
  }

  clickClosure(): void {
    this.roadService.getClosure(this.roadWork).subscribe(data => {
      ;
      this.roadList = data.closure;
      console.log(this.roadList);
    })
    if (!this.submenuIsVisible) {
      this.submenuIsVisible = true;
    }
    else if (this.submenuIsVisible) {
      this.submenuIsVisible = false;
    }
    this.home = false;
    this.detail = false;
    this.call = "closure";
    this.callDetail = "warning";
  }

  clickElectricCharge(): void {
    this.roadService.getElectricCharge(this.roadWork).subscribe(data => {
      ;
      this.roadList = data.electric_charging_station;
      console.log(this.roadList);
    })
    if (!this.submenuIsVisible) {
      this.submenuIsVisible = true;
    }
    else if (this.submenuIsVisible) {
      this.submenuIsVisible = false;
    }
    this.home = false;
    this.detail = false;
    this.call = "electric charging station";
    this.callDetail = "electric_charging_station";
  }

  clickDetail(road: any): void {
    this.detail = true;
    this.road = road;
    let id: string = road.identifier;
    this.roadService.getDetail(this.callDetail + "/" + id).subscribe(data => {
      this.road = data
    })
    if (!this.submenuIsVisible) {
      this.submenuIsVisible = true;
    }
    else if (this.submenuIsVisible) {
      this.submenuIsVisible = false;
    }
    console.log(this.road);
    if (this.road.lorryParkingFeatureIcons.length !== 0) {
      console.log(true)
    }
    else { console.log(false) }
  }

  getIcon(text: string): string {
    //picnic, restroom, Restaurant, gaspump, shopping, Kiosk, shower
    if(text.includes("picnic")){
      return "fa-person-hiking"
    }
    if(text.includes("restroom")){
      return "fa-restroom"
    }
    if(text.includes("Restaurant")){
      return "fa-utensils"
    }
    if(text.includes("gaspump")){
      return "fa-gas-pump"
    }
    if(text.includes("shopping")){
      return "fa-cart-shopping"
    }
    if(text.includes("Kiosk")){
      return "fa-shop"
    }
    if(text.includes("shower")){
      return "fa-shower"
    }
    if(text.includes("playground")){
      return "fa-fort-awesome"
    }
    if(text.includes("Toilette")){
      return "fa-toilet"
    }
    if(text.includes("toll_terminal")){
      return "fa-money-bills"
    }
    if(text.includes("vending_machine")){
      return "fa-cash-register"
    }
    if(text.includes("almo-utensils")){
      return "fa-utensils"
    }
    
    else {
      return text
    }
  }

  returnHome(): void {
    this.roadList = []
    this.detail = false 
    this.submenuIsVisible = false
    this.call = ''
    this.callDetail = ''
    this.home = true;
  }
}
