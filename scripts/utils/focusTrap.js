/**
 * Loop through all focusable elements and focus the first one.
 * @param {HTMLElement} element - The element to create the focus trap for.
 */
export default function FocusTrap(element) {
  console.log(element);
  const focusableElements = element.querySelectorAll(
    'video, a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
  );

  // Loop through focusable elements
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  /**
   * Handles the keydown event to trap focus within the element.
   * @param {KeyboardEvent} e - The keyboard event.
   */
  element.addEventListener('keydown', (e) => {
    const isTabPressed = (e.key === 'Tab' || e.keyCode === 9);
    if (!isTabPressed) return;

    /*
      * If the shift key is pressed while tabbing,
      * focus the last focusable element.
      * Otherwise, focus the first one.
      */
    if (e.shiftKey){
      if (document.activeElement === firstFocusable) {
        lastFocusable.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        firstFocusable.focus();
        e.preventDefault();
      }
    }
  });

}
