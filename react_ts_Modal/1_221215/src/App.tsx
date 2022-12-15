import "./App.css";
import { useState } from "react";
import BaseModalWrapper from "./ModalPopup/BaseModalWrapper";

function App() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  //모달을 열거나 닫는데 사용하는 토글 모달기능
  const toggleModal = () => {
    setIsModalVisible((wasModalVisable) => !wasModalVisable);
  };
  return (
    <div className="App">
      <button onClick={toggleModal}>Show Modal</button>
      <BaseModalWrapper
        isModalVisible={isModalVisible}
        onBackdropClick={toggleModal}
      />
    </div>
  );
}

export default App;
