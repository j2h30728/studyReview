import { useState, useReducer } from "react";
import Student from "./Student";

//reducer - state를 업데이트 하는 역할 (은행)
//dipatch - state 업데이트를 위한 요구
//action - 요구의 내용

const reducer = (state, action) => {
  switch (action.type) {
    case "add-student":
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHeere: true,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
  }
};

const initialState = {
  count: 0,
  students: [
    {
      id: Date.now(),
      name: "James",
      isHere: false,
    },
  ],
};

function App() {
  const [name, setName] = useState("");
  const [studentInfro, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수: {studentInfro.count}</p>
      <input
        type="text"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "add-student", payload: { name } });
        }}
      >
        추가
      </button>
      {studentInfro.students.map((student) => {
        return <Student key={student.id} name={student.name} />;
      })}
    </div>
  );
}

export default App;
