
function Hero() {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>feet youbqbhbbqbbb</p>
        <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
            <p>Also Availble On</p>
            <div className="brand-icons">
                <img src="amazon.png" alt="amazon" />
                <img src="flipkart.png" alt="flipkart" /> 
            </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="air-max.png" alt="max-air" height={600}/>
      </div>
    </main>
  )
}

export default Hero
