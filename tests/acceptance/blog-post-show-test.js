import { test } from 'qunit';
import moduleForAcceptance from 'workshop/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | blog post show');

test('visit blog post from index', function(assert) {
  visit('/');
  let blogSelector = 'article:first-of-type a';

  andThen(function() {
    click(blogSelector);
  });

  andThen(function() {
    assert.equal(currentURL(), '/post/1');
  });
});

