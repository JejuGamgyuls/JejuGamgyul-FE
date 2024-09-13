import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 325px;
  height: 160px;
  border-radius: 5px;
  background: #fff;
`;
export const ModalHeader = styled.div`
  margin-top: 0;
  padding-top: 18px;
  padding-left: 22px;
  color: var(--Gray09, #333);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ModalMessage = styled.div`
  width: 100%;
  padding-top: 27px;
  color: var(--Gray07, #595959);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const ModalFooter = styled.div`
  width: 100%;
  margin-top: auto;
`;
export const Buttons = styled.div`
  display: flex;
  height: 37px;
  justify-content: flex-end;
  padding-bottom: 12px;
  padding-right: 22px;
`;
// 버튼 공통 스타일 정의
const ButtonBase = styled.div`
  width: 48.2px;
  height: 100%;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
export const CancelButton = styled(ButtonBase)`
  color: #000;
`;
export const ConfirmButton = styled(ButtonBase)`
  color: var(--Orange, #fd825b);
`;
