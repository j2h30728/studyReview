import { useState } from "react";

const Header = ({ title, onChangeMode }) => {
  return (
    <header>
      <h1>
        <a
          href="index.html"
          onClick={evt => {
            evt.preventDefault();
            onChangeMode("WELCOME");
          }}>
          {title}
        </a>
      </h1>
    </header>
  );
};
const Nav = ({ topics, onChangeMode }) => {
  const liTag = topics.map(topic => (
    <li key={topic.id}>
      <a
        href={"/read/" + topic.id}
        onClick={evt => {
          evt.preventDefault();
          onChangeMode("READ", topic.id);
        }}>
        {topic.title}
      </a>
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

function App() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const topics = [
    { id: 1, title: "html", body: "html is ..." },
    { id: 2, title: "css", body: "css is ..." },
    { id: 3, title: "js", body: "js is ..." },
  ];
  const changeHandler = (mode, id) => {
    setMode(mode);
    if (id !== undefined) {
      setId(id);
    }
  };

  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Hello" body="Welcome, WEB!" />;
  } else if (mode === "READ") {
    const selected = topics.find(topic => topic.id === id);
    content = <Article title={selected.title} body={selected.body} />;
  }
  return (
    <div>
      <Header title="웹" onChangeMode={changeHandler} />
      <Nav topics={topics} onChangeMode={changeHandler} />
      {content}
    </div>
  );
}

export default App;
