export function setupPromiseModals(hooks) {
  hooks.beforeEach(function () {
    document.documentElement.style.setProperty('--epm-animation-backdrop-in-duration', `0.00001s`);
    document.documentElement.style.setProperty('--epm-animation-backdrop-out-duration', `0.00001s`);
    document.documentElement.style.setProperty('--epm-animation-backdrop-in-delay', `0.00001s`);
    document.documentElement.style.setProperty('--epm-animation-backdrop-out-delay', `0.00001s`);
    document.documentElement.style.setProperty('--epm-animation-modal-in-duration', `0.00001s`);
    document.documentElement.style.setProperty('--epm-animation-modal-out-duration', `0.00001s`);
    document.documentElement.style.setProperty('--epm-animation-modal-in-delay', `0.00001s`);
    document.documentElement.style.setProperty('--epm-animation-modal-out-delay', `0.00001s`);

    this.modals = this.owner.lookup('service:modals');
  });

  hooks.afterEach(function () {
    // be sure to close all modals after a test
    if (this.modals) {
      this.modals._stack.forEach(modal => modal.close());
    }

    document.documentElement.style.removeProperty('--epm-animation-backdrop-in-duration', `0.00001s`);
    document.documentElement.style.removeProperty('--epm-animation-backdrop-out-duration', `0.00001s`);
    document.documentElement.style.removeProperty('--epm-animation-backdrop-in-delay', `0.00001s`);
    document.documentElement.style.removeProperty('--epm-animation-backdrop-out-delay', `0.00001s`);
    document.documentElement.style.removeProperty('--epm-animation-modal-in-duration', `0.00001s`);
    document.documentElement.style.removeProperty('--epm-animation-modal-out-duration', `0.00001s`);
    document.documentElement.style.removeProperty('--epm-animation-modal-in-delay', `0.00001s`);
    document.documentElement.style.removeProperty('--epm-animation-modal-out-delay', `0.00001s`);
  });
}
