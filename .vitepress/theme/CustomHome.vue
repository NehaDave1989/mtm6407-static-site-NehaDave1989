<template>
  <div class="custom-home">
    <header class="hero">
      <h1>Neha's Cooking Corner</h1>
      <nav class="quick-links">
        <a href="/recipes.html">See Recipes</a>
        <a href="/tips.html">Kitchen Tips</a>
        <a href="/contact.html">Contact Me</a>
      </nav>

      <img class="hero-image" src="https://t4.ftcdn.net/jpg/09/53/85/55/360_F_953855515_YQ5peGf7ezd16cbl41c8gk0LbUuelBv8.jpg" alt="Cooking Banner" />
      <p class="tagline">Wholesome Recipes & Kitchen Wisdom</p>
    </header>

    <main class="home-content">
      <section class="card">
        <h2>Why This Site?</h2>
        <ul>
          <li><strong>Hand-picked Indian & fusion recipes</strong> — Curated to bring you the best flavors from traditional and modern kitchens.</li>
          <li><strong>Easy kitchen hacks & tips</strong> — Save time and improve your cooking skills with smart, simple tricks.</li>
          <li><strong>Connect and collaborate</strong> — Join a community of food lovers to share recipes, ideas, and experiences.</li>
          <li><strong>Step-by-step guides</strong> — Each recipe comes with detailed instructions and photos for perfect results.</li>
          <li><strong>Healthy & tasty options</strong> — Focus on balanced meals that nourish without compromising flavor.</li>
          <li><strong>Seasonal & budget-friendly meals</strong> — Recipes designed for every season and wallet.</li>
        </ul>

        <figure>
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" alt="Delicious cooking setup" style="width:100%; border-radius:8px; margin-top:1rem;" />
        </figure>
      </section>
    </main>
  </div>
</template>


<style scoped>
.custom-home {
  min-height: 100vh;
  background: linear-gradient(to bottom right, #fff2e6, #ffe0b2);
  font-family: 'Segoe UI', sans-serif;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero {
  text-align: center;
  margin-bottom: 2rem;
}

.hero-image {
  width: 100%;
  max-width: 800px;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.hero h1 {
  font-size: 3rem;
  color: #d35400;
  margin-bottom: 2.3rem;
  line-height: 50px;
}

.tagline {
  font-size: 1.3rem;
  color: #555;
  font-weight: 500;
}

.home-content {
  width: 100%;
  max-width: 850px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.card {
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.card h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #e67e22;
}

.card ul {
  list-style: none;
  padding-left: 0;
}

.card li {
  font-size: 1.1rem;
  margin: 0.6rem 0;
}

.card a {
  color: #d35400;
  font-weight: bold;
  text-decoration: none;
}

.card a:hover {
  text-decoration: underline;
}
.quick-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 1rem 0 2rem 0;
  font-weight: 600;
}

.quick-links a {
  color: #d35400;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  transition: background-color 0.3s, color 0.3s;
}

.quick-links a:hover {
  background-color: #d35400;
  color: white;
}
</style>