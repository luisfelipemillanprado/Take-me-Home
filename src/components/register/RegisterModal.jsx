import { useState, useEffect } from 'react';
import RegisterModalCover from '@components/register/RegisterModalCover';
import RegisterModalForm from '@components/register/RegisterModalForm';
import AnimationsHandlers from '@styles/animation/AnimationsHandlers';
import { Modal, Space, ConfigProvider } from 'antd';
import bstyles from '@styles/common/Tools.module.css';
import styles from '@styles/components/register/RegisterModal.module.css';
// --
export default function RegisterModal() {
  // --
  const modalBodyStyle = { paddingMD: '0rem', fontFamily: 'revert' };
  const [state, setState] = useState({ isModalOpen: false });
  // --
  useEffect(() => {
    const startButtonLogInModal = document.getElementById('start-button-log-in-modal');
    addButtonModalListener(startButtonLogInModal);
  }, []);
  // --
  useEffect(() => {
    if (state.isModalOpen) {
      const startSwitchableCoverModal = document.getElementById('switchable-cover');
      const startSwitchableFormModal = document.getElementById('switchable-form');
      const switchableSignInContent = document.getElementById('switchable-welcome-back-content');
      const switchableSignUpContent = document.getElementById('switchable-hello-friend-content');
      const switchableCreateAccountText = document.getElementById('switchable-create-account-text');
      const switchableSignInPetgram = document.getElementById('switchable-sign-in-petgram');
      const switchableCreateAccountInput = document.getElementById('switchable-create-account-input');
      const switchableSignInPetgramInput = document.getElementById('switchable-sign-in-petgram-input');
      const switchableSignInButton = document.getElementById('switchable-sign-in-button');
      const switchableSingUpButton = document.getElementById('switchable-sign-up-button');
      const submitFormButtonText = document.getElementById('submit-form-button').childNodes[0];
      // --
      addSignInButtonListener(
        switchableSignInButton,
        startSwitchableCoverModal,
        startSwitchableFormModal,
        switchableSignInContent,
        switchableSignUpContent,
        switchableCreateAccountText,
        switchableSignInPetgram,
        switchableCreateAccountInput,
        switchableSignInPetgramInput,
        submitFormButtonText
      );
      addSignUpButtonListener(
        switchableSingUpButton,
        startSwitchableCoverModal,
        startSwitchableFormModal,
        switchableSignInContent,
        switchableSignUpContent,
        switchableCreateAccountText,
        switchableSignInPetgram,
        switchableCreateAccountInput,
        switchableSignInPetgramInput,
        submitFormButtonText
      );
    }
  }, [state.isModalOpen]);
  /**
   * @function: handlerShowModal.
   * @description: Show the modal.
   * @returns: void.
   */
  const handlerShowModal = () => {
    setState({ isModalOpen: true });
  };
  /**
   * @function: handlerOk
   * @description: Accept event handler.
   * @returns: void.
   */
  const handlerOk = () => {
    setState({ isModalOpen: false });
  };
  /**
   * @function: handlerCancel.
   * @description: Cancel event handler.
   * @returns: void.
   */
  const handlerCancel = () => {
    setState({ isModalOpen: false });
  };
  /**
   * @function: addButtonModalListener
   * @description: Add a listener event to the modal button,
   * @param {HTMLElement} startButtonRegisterModal
   * @returns: void.
   */
  const addButtonModalListener = (startButtonRegisterModal) => {
    startButtonRegisterModal.addEventListener('click', handlerShowModal, { capture: false, once: false });
  };
  /**
   * @function: addSignInButtonListener.
   * @description: Add a listener event to the sign in button.
   * @param {HTMLElement} switchableSignInButton
   * @param {HTMLElement} startSwitchableCoverModal
   * @param {HTMLElement} startSwitchableFormModal
   * @param {HTMLElement} switchableSignInContent
   * @param {HTMLElement} switchableSignUpContent
   * @param {HTMLElement} switchableCreateAccountText
   * @param {HTMLElement} switchableSignInPetgram
   * @param {HTMLElement} switchableCreateAccountInput
   * @param {HTMLElement} switchableSignInPetgramInput
   * @param {HTMLElement} submitFormButtonText
   * @returns: void.
   */
  const addSignInButtonListener = (
    switchableSignInButton,
    startSwitchableCoverModal,
    startSwitchableFormModal,
    switchableSignInContent,
    switchableSignUpContent,
    switchableCreateAccountText,
    switchableSignInPetgram,
    switchableCreateAccountInput,
    switchableSignInPetgramInput,
    submitFormButtonText
  ) => {
    if (switchableSignInButton) {
      switchableSignInButton.addEventListener(
        'click',
        (e) => {
          AnimationsHandlers.formCoverForwardAnimationHandler(
            startSwitchableCoverModal,
            startSwitchableFormModal
          );
          AnimationsHandlers.contentCoverForwardAnimationHandler(
            switchableSignInContent,
            switchableSignUpContent
          );
          AnimationsHandlers.formContentTopForwardAnimationHandler(
            switchableCreateAccountText,
            switchableSignInPetgram
          );
          AnimationsHandlers.formContentCenterForwardAnimationHandler(
            switchableCreateAccountInput,
            switchableSignInPetgramInput
          );
          AnimationsHandlers.formSubmitButtonForwardAnimationHandler(submitFormButtonText);
        },
        { capture: false, once: false }
      );
    }
  };
  /**
   * @function: addSignUpButtonListener.
   * @description: Add a listener event to the sign up button.
   * @param {HTMLElement} switchableSingUpButton
   * @param {HTMLElement} startSwitchableCoverModal
   * @param {HTMLElement} startSwitchableFormModal
   * @param {HTMLElement} switchableSignInContent
   * @param {HTMLElement} switchableSignUpContent
   * @param {HTMLElement} switchableCreateAccountText
   * @param {HTMLElement} switchableSignInPetgram
   * @param {HTMLElement} switchableCreateAccountInput
   * @param {HTMLElement} switchableSignInPetgramInput
   * @param {HTMLElement} submitFormButtonText
   */
  const addSignUpButtonListener = (
    switchableSingUpButton,
    startSwitchableCoverModal,
    startSwitchableFormModal,
    switchableSignInContent,
    switchableSignUpContent,
    switchableCreateAccountText,
    switchableSignInPetgram,
    switchableCreateAccountInput,
    switchableSignInPetgramInput,
    submitFormButtonText
  ) => {
    if (switchableSingUpButton) {
      switchableSingUpButton.addEventListener(
        'click',
        (e) => {
          AnimationsHandlers.formCoverBackwardAnimationHandler(
            startSwitchableCoverModal,
            startSwitchableFormModal
          );
          AnimationsHandlers.contentCoverBackwardAnimationHandler(
            switchableSignInContent,
            switchableSignUpContent
          );
          AnimationsHandlers.formContentTopBackwardAnimationHandler(
            switchableCreateAccountText,
            switchableSignInPetgram
          );
          AnimationsHandlers.formContentCenterBackwardAnimationHandler(
            switchableCreateAccountInput,
            switchableSignInPetgramInput
          );
          AnimationsHandlers.formSubmitButtonBackwardAnimationHandler(submitFormButtonText);
        },
        { capture: false, once: false }
      );
    }
  };
  // --
  return (
    <ConfigProvider theme={{ token: modalBodyStyle }}>
      <Modal
        className={styles.register_modal_section__register_modal_user}
        footer={null}
        centered
        open={state.isModalOpen}
        onOk={handlerOk}
        onCancel={handlerCancel}
        width={820}
      >
        <div
          className={[
            bstyles.wrapper_div_horizontal_center_positioning,
            styles.register_modal_section__register_modal_user_content,
          ].join(' ')}
        >
          <div
            id='switchable-cover'
            className={[
              bstyles.wrapper_div_horizontal_center_positioning,
              styles.register_modal_section__container_content_logo_text,
            ].join(' ')}
          >
            <RegisterModalCover
              params={{
                mainText: 'Welcome Back!',
                paragraph: {
                  first: 'To keep connected with us please',
                  second: 'login with your personal',
                  third: 'info.',
                },
                buttonText: 'SIGN IN',
                switchSense: false,
                visibility: true,
                contentId: 'switchable-welcome-back-content',
                buttonId: 'switchable-sign-in-button',
              }}
            />
            <RegisterModalCover
              params={{
                mainText: 'Hello, Friend!',
                paragraph: {
                  first: 'Enter your personal details',
                  second: 'and start journey with',
                  third: 'us.',
                },
                buttonText: 'SIGN UP',
                switchSense: true,
                visibility: false,
                contentId: 'switchable-hello-friend-content',
                buttonId: 'switchable-sign-up-button',
              }}
            />
          </div>
          <Space
            id='switchable-form'
            className={[
              bstyles.wrapper_div_horizontal_center_positioning,
              styles.header_description_section__container_register_modal_user_form,
            ]}
          >
            <RegisterModalForm
              params={{
                buttonText: 'SIGN UP',
                buttonId: 'submit-form-button',
              }}
            />
          </Space>
        </div>
      </Modal>
    </ConfigProvider>
  );
}
