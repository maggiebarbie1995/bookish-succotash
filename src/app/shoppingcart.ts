export class ProductItem {
    public showItemDetails: boolean;
  name: string;
  id: any;
    constructor ( 
       public itemName: string,       
       public itemValue: number,
       public imageurl:string,
       public price:number,
       public quantity:number,       
          
       
       ) {
      this.showItemDetails = false;
    }
  }
  