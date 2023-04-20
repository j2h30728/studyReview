import React, { StrictMode } from "react"; //React
import { createRoot } from "react-dom/client"; //웹 브라우저와 상호작용하는 React의 라이브러리(React DOM)
import "./styles.css"; //컴포넌트의 스타일

import App from "./App"; //App.js에서 만들어진 컴포넌트.

//나머지 파일은 모든 조각을 한데 모아 최종 결과물을 public 폴더의 index.html에 주입합니다.
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
