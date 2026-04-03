import { useMemo, useState } from "react";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import RestaurantCard from "./components/RestaurantCard";
import { categories, restaurants } from "./data/restaurants";

function App() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter((restaurant) => {
      const matchesQuery =
        restaurant.name.toLowerCase().includes(query.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(query.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || restaurant.category === activeCategory;

      return matchesQuery && matchesCategory;
    });
  }, [query, activeCategory]);

  return (
    <div className="app">
      <Header query={query} onQueryChange={setQuery} />

      <main className="container">
        <section className="hero">
          <h2>Discover the best food in Thimphu</h2>
          <p>Order from top restaurants with quick delivery.</p>
        </section>

        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <section className="grid">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </section>

        {filteredRestaurants.length === 0 && (
          <p className="empty-state">No restaurants found for your search.</p>
        )}
      </main>
    </div>
  );
}

export default App;
