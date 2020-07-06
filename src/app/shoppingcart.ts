export class Item {
    public showItemDetails: boolean;
  name: string;
  id: any;
    constructor ( 
       public itemName: string,
       public itemValue: string,
       public price:string,
       public quantity:string,
       public total:string,
       public date:Date,
       public Item:number ) {
      this.showItemDetails = false;
    }
  }
  