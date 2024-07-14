import Gadget from "../domain/Gadget";

test('Gadget', () => {
    const testObj = new Gadget(1, 'Samsung', 1500, 'phone', 2);
    const gadget = {
        id: testObj.id,
        name: testObj.name,
        price: testObj.price,
        type: testObj.type,
        quantity: testObj.quantity,
    };

    expect(testObj).toEqual(gadget);
});