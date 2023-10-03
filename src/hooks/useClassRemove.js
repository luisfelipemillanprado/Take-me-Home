/**
 * @function: removeClassElement.
 * @description: Remove a class fron the element's classList based on especified position.
 * @param {*} switchableFirtsElement
 * @param {*} switchableSecondElement
 * @param {*} firtsElementClassName
 * @param {*} secondElementClassName
 * @returns: void.
 */
const useRemoveClassElement = (
  switchableFirtsElement,
  switchableSecondElement,
  firtsElementClassName,
  secondElementClassName
) => {
  switchableFirtsElement.classList.remove(firtsElementClassName);
  switchableSecondElement.classList.remove(secondElementClassName);
};
// --
export default useRemoveClassElement;
