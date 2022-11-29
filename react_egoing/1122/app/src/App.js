import { useState } from "react";

const Header = ({ title, onChangeMode }) => {
  return (
    <header>
      <h1>
        <a
          href="index.html"
          onClick={e => {
            e.preventDefault();
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
        href={`/read/${topic.id}`}
        onClick={e => {
          e.preventDefault();
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
const Control = ({ onChangeMode }) => {
  const createHandler = e => {
    e.preventDefault();
    onChangeMode("CREATE");
  };
  const updateHandler = e => {
    e.preventDefault();
    onChangeMode("UPDATE");
  };

  return (
    <ul>
      <li>
        <a href="/create" onClick={createHandler}>
          Create
        </a>
      </li>
      <li>
        <a href="/update" onClick={updateHandler}>
          Update
        </a>
      </li>
    </ul>
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
  const changeModeHadler = (mode, id) => {
    setMode(mode);
    if (id !== undefined) {
      setId(id);
    }
  };
  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Hello" body="Welcomem WEB!" />;
  } else if (mode === "READ") {
    const selected = topics.find(topic => topic.id === id);
    content = <Article title={selected.title} body={selected.body} />;
  } else if (mode === "CREATE") {
    content = <div>Create</div>;
  } else if (mode === "UPDATE") {
    content = <div>UPDATE</div>;
  }
  return (
    <div>
      <Header title="웹" onChangeMode={changeModeHadler} />
      <Nav topics={topics} onChangeMode={changeModeHadler} />
      {content}
      <Control onChangeMode={changeModeHadler} />
    </div>
  );
}

export default App;
