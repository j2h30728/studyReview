import "./App.css";
import { useState } from "react";
import BaseModalWrapper from "./ModalPopup/BaseModalWrapper";
import { Message } from "./ModalPopup/ModalPopup.styles";

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
        header="Login"
        message="Please Login"
        isModalVisible={isModalVisible}
        onBackdropClick={toggleModal}
      />
    </div>
  );
}

export default App;
