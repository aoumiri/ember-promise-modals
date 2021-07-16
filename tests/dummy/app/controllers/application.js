import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  modals: service(),

  actions: {
    showModal() {
      this.modals.open('example-modal');
    },

    showModalFromTop() {
      this.modals.open('example-modal', null, {
        className: 'from-top',
      });
    },

    showModalFromBottom() {
      this.modals.open('example-modal', null, {
        className: 'from-bottom',
      });
    },
  },
});
