import "./Modal.css";

interface Props {
  isShowSignUpModal?: boolean;
  isShowAddAccountModal?: boolean;
  isShowExistAccountModal?: boolean;
  setIsShowSignUpModal: Function;
}

const renderSignUpModal = (props: Props) => {
  if (props.isShowSignUpModal) {
    return (
      <div className="sign-up-modal-container">
        <div
          className="sign-up-modal-content"
          onClick={() => props.setIsShowSignUpModal(false)}
        >
          <div className="sign-up-modal-main">
            <div className="sign-up-modal">
              <div className="sign-up-modal-area">
                <p>hello form signup modal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const renderAddAccountModal = (props: Props) => {
  if (props.isShowAddAccountModal) {
    return (
      <div>
        <p>hello form add account modal</p>
      </div>
    );
  }
};

const renderExistAccountModal = (props: Props) => {
  if (props.isShowExistAccountModal) {
    return (
      <div>
        <p>hello form exist account modal</p>
      </div>
    );
  }
};

const Modal = (props: Props) => {
  return (
    <div>
      {renderSignUpModal(props)}

      {renderAddAccountModal(props)}

      {renderExistAccountModal(props)}
    </div>
  );
};

export default Modal;
