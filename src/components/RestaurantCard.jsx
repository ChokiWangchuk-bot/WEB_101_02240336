function RestaurantCard({ restaurant }) {
  return (
    <article className="card">
      <img src={restaurant.image} alt={restaurant.name} className="card-image" />
      <div className="card-body">
        <div className="card-row">
          <h3>{restaurant.name}</h3>
          <span className="rating">{restaurant.rating}</span>
        </div>
        <p className="muted">{restaurant.cuisine}</p>
        <div className="card-row muted">
          <span>{restaurant.eta}</span>
          <span>{restaurant.priceForTwo}</span>
        </div>
      </div>
    </article>
  );
}

export default RestaurantCard;
