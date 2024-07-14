import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    calcSummCoast(): number {
        const summ = this.items.reduce((acc, item) => {
            if ('quantity' in item) {
                return acc += (item.price * item.quantity);
            } 

            return acc += item.price;;
        }, 0);

        return summ;
    }

    calcSummCoastWithDiscount(percent: number): number {
        return this.calcSummCoast() - ((this.calcSummCoast() / 100) * percent);
    }

    private removeById(id: number): void {
        this._items = this._items.filter(item => item.id!== id);
    }

    removeToBasket(id: number): void {
        const index = this._items.findIndex(item => item.id === id);
        
        if('quantity' in this.items[index] && this.items[index].quantity > 1) {
            this._items[index].quantity -= 1;
        } else {
            this.removeById(id);
        }
    }
}