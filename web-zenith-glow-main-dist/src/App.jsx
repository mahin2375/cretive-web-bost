const features = [
  'Responsive product design',
  'Fast performance builds',
  'Reliable deployments on Vercel',
];

function App() {
  return (
    <main className="app-shell">
      <section className="hero-card">
        <p className="eyebrow">Zenith Glow</p>
        <h1>Modern web experiences, rebuilt for production.</h1>
        <p className="description">
          This project has been restored into a complete source-based Vite app so it can be built,
          run locally, and deployed correctly on Vercel.
        </p>
        <ul>
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
