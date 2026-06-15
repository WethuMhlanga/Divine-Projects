import { Link } from 'react-router-dom'

const products = [
  {
    img: '/img/5.png',
    title: 'Refreshing Drink',
    desc: 'Cool down with our signature handcrafted beverages.',
    link: '/drinks',
  },
  {
    img: '/img/Meal.jpeg',
    title: 'Delicious Meal',
    desc: 'Experience the richness of flavors with our expertly crafted meals.',
    link: '/meals',
  },
  {
    img: '/img/lipapa.JPG',
    title: 'Gourmet Dish',
    desc: 'A perfect blend of tradition and innovation in every bite.',
    link: '/meals',
  },
]

function Products() {
  return (
    <section id="our-products" className="products-section">
      <div className="container">
        <div className="section-title text-center">
          <h2>Our Products</h2>
          <p className="lead">
            At Divine Projects, we take pride in offering a diverse range of culinary delights
            crafted with the finest ingredients and utmost care. From delectable meals to
            refreshing drinks, our products are designed to elevate your dining experience.
          </p>
        </div>

        <div className="row justify-content-center">
          {products.map((product, i) => (
            <div key={i} className="col-md-4 col-sm-6 mb-4">
              <div className="product-card">
                <img src={product.img} alt={product.title} />
                <div className="card-body">
                  <h4>{product.title}</h4>
                  <p>{product.desc}</p>
                  <Link to={product.link} className="btn-menu">
                    Check Out the Menu
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
