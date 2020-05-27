Review.destroy_all
User.destroy_all
Movie.destroy_all
Genre.destroy_all

testUser = User.create(
    username: 'test',
    password: 'test'
)

testUser2 = User.create(
    username: 'test2',
    password: 'test2'
)

action = Genre.create(
    name: 'Action'
)

thriller = Genre.create(
    name: 'Thriller'
)

comedy = Genre.create(
    name: 'Comedy'
)

hp1 = Movie.create(
    title: "Harry Potter and the Philosopher's Stone",
    img_url: 'https://images-na.ssl-images-amazon.com/images/I/51asM9eJMXL._AC_.jpg',
    genre: thriller
)

hp2 = Movie.create(
    title: 'Harry Potter and the Deathly Hallows Part 1',
    img_url: 'https://www.movieartarena.com/imgs/hp7ff.jpg',
    genre: thriller
)

tb = Movie.create(
    title: 'Tommy Boy',
    img_url: 'https://images-na.ssl-images-amazon.com/images/I/514S53P8HJL._SY445_.jpg',
    genre: comedy
)

bs = Movie.create(
    title: 'Black Sheep',
    img_url: 'https://cdn.shopify.com/s/files/1/1416/8662/products/Black_Sheep_1995_original_film_art_2000x.jpg?v=1562544413',
    genre: comedy
)

b1 = Movie.create(
    title: 'The Bourne Identity',
    img_url: 'https://m.media-amazon.com/images/M/MV5BM2JkNGU0ZGMtZjVjNS00NjgyLWEyOWYtZmRmZGQyN2IxZjA2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
    genre: action 
)

b2 = Movie.create(
    title: 'The Bourne Supremacy',
    img_url: 'https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/the-bourne-supremacy-poster.jpg?itok=6EkQG-LG',
    genre: action
)

b3 = Movie.create(
    title: 'The Bourne Ultimatum',
    img_url: 'https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/the-bourne-ultimatum-poster.jpg?itok=hnMU7HvB',
    genre: action 
)

Review.create(
    movie: b1,
    user: testUser,
    rating: 5,
    description: 'Great movie.'
)

Review.create(
    movie: b2,
    user: testUser,
    rating: 5,
    description: 'Fantastic film.'
)

Review.create(
    movie: b3,
    user: testUser,
    rating: 3,
    description: 'Decent movie, could be better.'
)

Review.create(
    movie: b1,
    user: testUser2,
    rating: 1,
    description: 'Scary.'
)

Review.create(
    movie: b2,
    user: testUser2,
    rating: 2,
    description: 'Whoa, scary!'
)

Review.create(
    movie: b3,
    user: testUser2,
    rating: 1,
    description: 'Sad.'
)