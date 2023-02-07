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
  const Nav = ({ topics }) => {
    const liTag = topics.map(topic => (
      <li key={topic.id}>
        <a href={"/read/" + topic.id}>{topic.title}</a>
      </li>
    ));
    return (
      <nav>
        <ul>{liTag}</ul>
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

  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "js", body: "js is ..." },
  ];
  return (
    <div>
      <Header title="웹" />
      <Nav topics={topics} />
      <Article title="어서오세요!" body="웹의 세계로 초대합니다." />
    </div>
  );
}

export default App;
