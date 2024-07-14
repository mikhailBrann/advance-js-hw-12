import Movie from '../domain/Movie';

test('add item to cart', () => {
    const testObj = new Movie(1, 'Movie 1', 10, 2019, 'USA', 'Movie 1 tagline', ['horror', 'action'], '1h 30m');
    const movie = {
        id: testObj.id,
        name: testObj.name,
        price: testObj.price,
        year: testObj.year,
        country: testObj.country,
        tagline: testObj.tagline,
        genre: testObj.genre,
        duration: testObj.duration
    };

    expect(testObj).toEqual(movie);
});