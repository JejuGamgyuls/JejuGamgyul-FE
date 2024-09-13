import * as S from './styles';

function CommonModal({ title, message, onCancel }) {
  return (
    <S.Wrapper>
      <S.ModalHeader>{title}</S.ModalHeader>
      <S.ModalBody>
        <S.ModalMessage>{message}</S.ModalMessage>
      </S.ModalBody>
      <S.ModalFooter>
        <S.Buttons>
          <S.CancelButton onClick={onCancel}>취소</S.CancelButton>
          <S.ConfirmButton>확인</S.ConfirmButton>
        </S.Buttons>
      </S.ModalFooter>
    </S.Wrapper>
  );
}

export default CommonModal;
