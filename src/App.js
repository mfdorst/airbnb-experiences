import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

function App() {
  const cards =
    data.map(({id, coverImg, stats: {rating, reviewCount}, location, title, price, openSpots}) =>
      <Card
        key={id}
        img={coverImg}
        rating={rating}
        reviewCount={reviewCount}
        location={location}
        title={title}
        price={price}
        openSpots={openSpots}
      />)

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards">
        {cards}
      </section>
    </div>
  );
}

export default App;
