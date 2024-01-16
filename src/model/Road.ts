export class Road {
    _id: string;
    _extend!: string;
    _routeRecomendation: any[] = [];
    _coordinate!: {
        lat: number;
        long: number;
    };
    _footer!: string;
    _icon!: string;
    _isBlocked: boolean = false;
    _description: string[] = [];
    _title!: string;
    _point!: string;
    _displayType!: string;
    _lorryParkingFeatureIcons: string[] = [];
    _future: boolean = false;
    _subtitle!: string;
    _startTimeStamp!: string;

    constructor(id: string) {
        this._id = id
    }


    get id() {
        return this._id;
    }

    set id(newId: string) {
        this._id = newId;
    }


    get extend() {
        return this._extend;
    }
    set extend(in_extend: string) {
        this._extend = in_extend;
    }

    get routeRecomendation() {
        return this._routeRecomendation;
    }
    set routeRecomendation(newRouteRecomendation: any[]) {
        this._routeRecomendation = newRouteRecomendation;
    }

    get coordinate() {
        return this._coordinate;
    }
    setCoordinate(lat: number, long: number) {
        this._coordinate = {lat, long};
    }

    get footer() {
        return this._footer;
    }
    set footer(newFooter: string) {
        this._footer = newFooter;
    }

    get icon() {
        return this._icon;
    }
    set icon(newIcon: string) {
        this._icon = newIcon;
    }

    get isBlocked() {
        return this._isBlocked;
    }
    set isBlocked(newIsBlocked: boolean) {
        this._isBlocked = newIsBlocked;
    }

    get description() {
        return this._description;
    }
    set description(newDescription: any[]) {
        this._description = newDescription;
    }

    get title() {
        return this._title;
    }
    set title(newTitle: string) {
        this._title = newTitle;
    }

    get point() {
        return this._point;
    }
    set point(newPoint: string) {
        this._point = newPoint;
    }

    get displayType() {
        return this._displayType;
    }
    set displayType(newDisplayType: string) {
        this._displayType = newDisplayType;
    }

    get lorryParkingFeatureIcons() {
        return this._lorryParkingFeatureIcons;
    }
    set lorryParkingFeatureIcons(newLorryParkingFeatureIcons: any[]) {
        this._lorryParkingFeatureIcons = newLorryParkingFeatureIcons;
    }

    get future() {
        return this._future;
    }
    set future(newFuture: boolean) {
        this._future = newFuture;
    }
    
    get subtitle() {
        return this._subtitle;
    }
    set subtitle(newSubtitle: string) {
        this._subtitle = newSubtitle;
    }
    
    get startTimeStamp() {
        return this._startTimeStamp;
    }
    set startTimeStamp(newStartTimeStamp: string) {
        this._startTimeStamp = newStartTimeStamp;
    }
}
