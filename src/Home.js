function Home() {
    return (
      <main className="App">
        <section>
          <h1>Writing App</h1>
          <form>
            <input type="email" placeholder="Email"></input>
            <input type="password"placeholder="password"></input>
            <button type="submit">Login</button>
            <button type="submit">Register</button>
          </form>
          <a href="#">Forgot Password</a>
        </section>
      </main>
    );
  }
  
  export default Home;