import Buyable from "./Buyable";

export default class Gadget implements Buyable {

    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly type: string,
        readonly quantity: number
    ) 
    { }
}