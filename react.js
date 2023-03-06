const app = document.getElementById("app");

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
}

function HomePage() {
  React.useState();

  const [likes, setLikes] = React.useState(0);
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton"];

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      {/* Nesting the Header component */}
      <Header />
      <Header title="🔥 Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}

ReactDOM.render(<HomePage />, app);
