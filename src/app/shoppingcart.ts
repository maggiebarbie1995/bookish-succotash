export class Item {
    public showItemDetails: boolean;
    constructor (public itemName: string,
       public itemValue: string,
       public price:string,
       public quantity:string,
       public totalPrice:string,
       public date:string,
       public item:number ) {
      this.showItemDetails = false;
    }
  }
  