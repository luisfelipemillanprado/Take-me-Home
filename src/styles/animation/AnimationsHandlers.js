import useRemoveClassElement from '@hooks/useClassRemove';
import astyles from '@styles/animation/Animations.module.css';
// --
const borderRadiusStyles = { initial: '0.8rem 0rem 0rem 0.8rem', end: '0rem 0.8rem 0.8rem 0rem' };
const nameVariable = '--br-pseudo';
/**
 * @function: formCoverForwardAnimationHandler.
 * @param {HTMLElement} startSwitchableCoverModal
 * @param {HTMLElement} startSwitchableFormModal
 * @returns: void.
 */
const formCoverForwardAnimationHandler = (startSwitchableCoverModal, startSwitchableFormModal) => {
  if (
    startSwitchableCoverModal.classList.contains(astyles.switchable_cover_reverse) &&
    startSwitchableFormModal.classList.contains(astyles.switchable_form_reverse)
  ) {
    startSwitchableCoverModal.classList.add(astyles.switchable_cover);
    startSwitchableFormModal.classList.add(astyles.switchable_form);
    setTimeout(() => {
      startSwitchableCoverModal.style.setProperty(nameVariable, borderRadiusStyles.end);
      startSwitchableCoverModal.style.borderRadius = borderRadiusStyles.end;
    }, 100);
    useRemoveClassElement(
      startSwitchableCoverModal,
      startSwitchableFormModal,
      astyles.switchable_cover_reverse,
      astyles.switchable_form_reverse
    );
  } else {
    startSwitchableCoverModal.classList.add(astyles.switchable_cover);
    startSwitchableFormModal.classList.add(astyles.switchable_form);
    setTimeout(() => {
      startSwitchableCoverModal.style.setProperty(nameVariable, borderRadiusStyles.end);
      startSwitchableCoverModal.style.borderRadius = borderRadiusStyles.end;
    }, 100);
  }
};
/**
 * @function: formCoverBackwardAnimationHandler.
 * @param {HTMLElement} startSwitchableCoverModal
 * @param {HTMLElement} startSwitchableFormModal
 * @returns: void.
 */
const formCoverBackwardAnimationHandler = (startSwitchableCoverModal, startSwitchableFormModal) => {
  if (
    startSwitchableCoverModal.classList.contains(astyles.switchable_cover) &&
    startSwitchableFormModal.classList.contains(astyles.switchable_form)
  ) {
    startSwitchableCoverModal.classList.add(astyles.switchable_cover_reverse);
    startSwitchableFormModal.classList.add(astyles.switchable_form_reverse);
    setTimeout(() => {
      startSwitchableCoverModal.style.setProperty(nameVariable, borderRadiusStyles.initial);
      startSwitchableCoverModal.style.borderRadius = borderRadiusStyles.initial;
    }, 100);
    useRemoveClassElement(
      startSwitchableCoverModal,
      startSwitchableCoverModal,
      astyles.switchable_cover,
      astyles.switchable_form
    );
  }
};
/**
 * @function: contentCoverForwardAnimationHandler.
 * @param {HTMLElement} switchableSignUpContent
 * @param {HTMLElement} switchableSignInContent
 * @returns: void.
 */
const contentCoverForwardAnimationHandler = (switchableSignInContent, switchableSignUpContent) => {
  if (
    switchableSignInContent.classList.contains(astyles.switchable_welcome_back_content_reverse) &&
    switchableSignUpContent.classList.contains(astyles.switchable_hello_friend_content_reverse)
  ) {
    switchableSignInContent.classList.add(astyles.switchable_welcome_back_content);
    switchableSignUpContent.classList.add(astyles.switchable_hello_friend_content);
    switchableSignUpContent.style.visibility = 'visible';
    switchableSignInContent.style.visibility = 'hidden';
    useRemoveClassElement(
      switchableSignInContent,
      switchableSignUpContent,
      astyles.switchable_welcome_back_content_reverse,
      astyles.switchable_hello_friend_content_reverse
    );
  } else {
    switchableSignInContent.classList.add(astyles.switchable_welcome_back_content);
    switchableSignUpContent.classList.add(astyles.switchable_hello_friend_content);
    switchableSignInContent.style.visibility = 'hidden';
    switchableSignUpContent.style.visibility = 'visible';
  }
};
/**
 * @function: contentCoverBackwardAnimationHandler.
 * @param {HTMLElement} switchableSignInContent
 * @param {HTMLElement} switchableSignUpContent
 * @returns: void.
 */
const contentCoverBackwardAnimationHandler = (switchableSignInContent, switchableSignUpContent) => {
  if (
    switchableSignInContent.classList.contains(astyles.switchable_welcome_back_content) &&
    switchableSignUpContent.classList.contains(astyles.switchable_hello_friend_content)
  ) {
    switchableSignInContent.classList.add(astyles.switchable_welcome_back_content_reverse);
    switchableSignUpContent.classList.add(astyles.switchable_hello_friend_content_reverse);
    switchableSignUpContent.style.visibility = 'hidden';
    switchableSignInContent.style.visibility = 'visible';
    useRemoveClassElement(
      switchableSignInContent,
      switchableSignUpContent,
      astyles.switchable_welcome_back_content,
      astyles.switchable_hello_friend_content
    );
  }
};
/**
 * @function: formContentTopForwardAnimationHandler.
 * @param {HTMLElement} switchableCreateAccountText
 * @param {HTMLElement} switchableSignInPetgram
 * @returns: void.
 */
const formContentTopForwardAnimationHandler = (switchableCreateAccountText, switchableSignInPetgram) => {
  if (
    switchableCreateAccountText.classList.contains(astyles.switchable_create_account_text_reverse) &&
    switchableSignInPetgram.classList.contains(astyles.switchable_sign_in_petgram_reverse)
  ) {
    switchableCreateAccountText.classList.add(astyles.switchable_create_account_text);
    switchableSignInPetgram.classList.add(astyles.switchable_sign_in_petgram);
    useRemoveClassElement(
      switchableCreateAccountText,
      switchableSignInPetgram,
      astyles.switchable_create_account_text_reverse,
      astyles.switchable_sign_in_petgram_reverse
    );
  } else {
    switchableCreateAccountText.classList.add(astyles.switchable_create_account_text);
    switchableSignInPetgram.classList.add(astyles.switchable_sign_in_petgram);
  }
};
/**
 * @function: formContentTopForwardAnimationHandler.
 * @param {HTMLElement} switchableCreateAccountText
 * @param {HTMLElement} switchableSignInPetgram
 * @returns: void.
 */
const formContentTopBackwardAnimationHandler = (switchableCreateAccountText, switchableSignInPetgram) => {
  if (
    switchableCreateAccountText.classList.contains(astyles.switchable_create_account_text) &&
    switchableSignInPetgram.classList.contains(astyles.switchable_sign_in_petgram)
  ) {
    switchableCreateAccountText.classList.add(astyles.switchable_create_account_text_reverse);
    switchableSignInPetgram.classList.add(astyles.switchable_sign_in_petgram_reverse);
    useRemoveClassElement(
      switchableCreateAccountText,
      switchableSignInPetgram,
      astyles.switchable_create_account_text,
      astyles.switchable_sign_in_petgram
    );
  }
};
/**
 * @function: formContentCenterForwardAnimationHandler.
 * @param {HTMLElement} switchableCreateAccountInput
 * @param {HTMLElement} switchableSignInPetgramInput
 * @returns: void.
 */
const formContentCenterForwardAnimationHandler = (
  switchableCreateAccountInput,
  switchableSignInPetgramInput
) => {
  if (
    switchableCreateAccountInput.classList.contains(astyles.switchable_create_account_input_reverse) &&
    switchableSignInPetgramInput.classList.contains(astyles.switchable_sign_in_petgram_input_reverse)
  ) {
    switchableCreateAccountInput.classList.add(astyles.switchable_create_account_input);
    switchableSignInPetgramInput.classList.add(astyles.switchable_sign_in_petgram_input);
    useRemoveClassElement(
      switchableCreateAccountInput,
      switchableSignInPetgramInput,
      astyles.switchable_create_account_input_reverse,
      astyles.switchable_sign_in_petgram_input_reverse
    );
  } else {
    switchableCreateAccountInput.classList.add(astyles.switchable_create_account_input);
    switchableSignInPetgramInput.classList.add(astyles.switchable_sign_in_petgram_input);
  }
};
/**
 * @function: formContentCenterBackwardAnimationHandler.
 * @param {HTMLElement} switchableCreateAccountInput
 * @param {HTMLElement} switchableSignInPetgramInput
 * @returns: void.
 */
const formContentCenterBackwardAnimationHandler = (
  switchableCreateAccountInput,
  switchableSignInPetgramInput
) => {
  if (
    switchableCreateAccountInput.classList.contains(astyles.switchable_create_account_input) &&
    switchableSignInPetgramInput.classList.contains(astyles.switchable_sign_in_petgram_input)
  ) {
    switchableCreateAccountInput.classList.add(astyles.switchable_create_account_input_reverse);
    switchableSignInPetgramInput.classList.add(astyles.switchable_sign_in_petgram_input_reverse);
    useRemoveClassElement(
      switchableCreateAccountInput,
      switchableSignInPetgramInput,
      astyles.switchable_create_account_input,
      astyles.switchable_sign_in_petgram_input
    );
  }
};
/**
 * @function: formSubmitButtonForwardAnimationHandler.
 * @param {HTMLElement} submitFormButton
 * @returns: void.
 */
const formSubmitButtonForwardAnimationHandler = (submitFormButton) => {
  if (submitFormButton.innerHTML === 'SIGN UP') {
    setTimeout(() => {
      submitFormButton.innerHTML = 'SIGN IN';
    }, 400);
  }
};
/**
 * @function: formSubmitButtonBackwardAnimationHandler.
 * @param {HTMLElement} submitFormButton
 * @returns: void.
 */
const formSubmitButtonBackwardAnimationHandler = (submitFormButton) => {
  if (submitFormButton.innerHTML === 'SIGN IN') {
    setTimeout(() => {
      submitFormButton.innerHTML = 'SIGN UP';
    }, 400);
  }
};
// --
const Animations = {
  formCoverForwardAnimationHandler,
  formCoverBackwardAnimationHandler,
  contentCoverForwardAnimationHandler,
  contentCoverBackwardAnimationHandler,
  formContentTopForwardAnimationHandler,
  formContentTopBackwardAnimationHandler,
  formContentCenterForwardAnimationHandler,
  formContentCenterBackwardAnimationHandler,
  formSubmitButtonForwardAnimationHandler,
  formSubmitButtonBackwardAnimationHandler,
};
// --
export default Animations;
