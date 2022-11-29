function App() {
  const Header = ({ title }) => {
    return (
      <header>
        <h1>
          <a href="index.html">{title}</a>
        </h1>
      </header>
    );
  };
  const Nav = () => {
    return (
      <nav>
        <ul>
          <li>
            <a href="1.html">html</a>
          </li>
          <li>
            <a href="2.html">css</a>
          </li>
          <li>
            <a href="3.html">js</a>
          </li>
        </ul>
      </nav>
    );
  };
  const Article = ({ title, body }) => {
    return (
      <article>
        <h2>{title}</h2>
        {body}
      </article>
    );
  };
  return (
    <div>
      <Header title="웹" />
      <Nav />
      <Article title="어서오세요!" body="웹의 세계로 초대합니다." />
    </div>
  );
}

export default App;
