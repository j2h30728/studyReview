import React from "react";
import Modal from "./Modal";
import {
  DesktopModalContainer,
  Header,
  Message,
  DesktopCloseButton,
  CloseSign,
} from "./ModalPopup.styles";

//porps 는 표시여부에 대한 정보를 전달해야함
interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
  header: string; //아래의 정적인 Header태그내용인 'Modal Info'는 좋지않음.항상 모달의 제목이 필요하다고 봄
  message?: string;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({
  onBackdropClick,
  isModalVisible,
  header,
  message,
}) => {
  if (!isModalVisible) {
    return null;
  }

  return (
    <Modal onBackdropClick={onBackdropClick}>
      <DesktopModalContainer onClick={onBackdropClick}>
        <DesktopCloseButton>
          <CloseSign />
        </DesktopCloseButton>

        {/*children 추가 */}
        <Header>{header}</Header>
        {message && <Message>{message}</Message>}
      </DesktopModalContainer>
    </Modal>
  );
};

export default BaseModalWrapper;
