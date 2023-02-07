import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

interface ModalProps {
  // 사용자가 모달창 바깥 창을 눌러 창을 끄는 행동
  onBackdropClick: () => void;
  children?: React.ReactNode;
}

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Modal 의 frame 이기 때문에 그 내부에 자식이 알맞게 렌더링 되어야함 => porps에 children 추가
const Modal: React.FC<ModalProps> = ({ onBackdropClick, children }) => {
  //children === 내가 렌더링하고 싶은 콘텐츠이기 때문에
  //무언가를 반환하는 것이아닌, 구체적으로 ReacDOM.createPortal을 호출해야함

  //배경색 - 전체화면을 덮어야함!

  // 모달을 중앙에 배치하고싶어서 전부 중앙정렬!!!

  return ReactDOM.createPortal(
    <Overlay onClick={onBackdropClick}>
      {/*.stopPropagation() 함수를 쓰게 되면, 모달창(children)을 눌러도 모달창이 꺼지지않고, 배경을 누르면 모달창이 꺼짐
    .eventbubbilig 이라는 dom 자바스크립트 원리
     */}
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </Overlay>,
    document.getElementById("modal-root")!
    //모달을 마운트하기위해 요소를 반환하도록 document를 요청
    //id 권한이 존재할수도 아닐수도있음
    //하지만 우리가 직접 정확하게 id를 부여해줬기때문에, 맨뒤에 !를 붙여 강제시키도록함
    //if 문 써서 타입가드 해도됨

    //createPortal 을 통해 다른경로로(modal-root) 가는 포탈을 만듬
  );
};

export default Modal;
