import { render, settled } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

import Component from '@ember/component';

import hbs from 'htmlbars-inline-precompile';

module('Component | ModalContainer', function(hooks) {
  setupRenderingTest(hooks);

  test('renders the modals for the `modals` service', async function(assert) {
    this.owner.register(
      'component:foo',
      Component.extend({
        layout: hbs`foo {{@data.bar}}`,
      }),
    );

    await render(hbs`<ModalContainer />`);
    assert.dom(this.element).hasText('');

    let modals = this.owner.lookup('service:modals');

    let modal = modals.open('foo', { bar: 'baz' });
    await settled();
    assert.dom(this.element).hasText('foo baz');

    modal.close();
    await settled();
    assert.dom(this.element).hasText('');
  });
});
