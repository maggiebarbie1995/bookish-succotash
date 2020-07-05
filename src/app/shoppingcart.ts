export class Item {
    public showItemDetails: boolean;
    constructor (public shoppingcartValue: string, public authorName: string, public userName: string, public upVote: number, public downVote: number, public date: Date) {
      this.showItemDetails = false;
    }
  }
  