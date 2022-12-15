import React from "react";
import Modal from "./Modal";
import { DesktopModalContainer, Header } from "./ModalPopup.styles";

//porps 는 표시여부에 대한 정보를 전달해야함
interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({
  onBackdropClick,
  isModalVisible,
}) => {
  if (!isModalVisible) {
    return null;
  }

  return (
    <Modal onBackdropClick={onBackdropClick}>
      <DesktopModalContainer>
        {/*children 추가 */}
        <Header>Modal Info</Header>
      </DesktopModalContainer>
    </Modal>
  );
};

export default BaseModalWrapper;
