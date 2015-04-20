function bootstrap(element, deployment) {
  var entity = Hull.entity.encode(Hull.findUrl());

  Hull.api(`${entity}/comments`, { wrapped: true }, function(r) {
    var count = r.pagination.total || 0;

    var k;
    if (count > 1) {
      k = 'more_comment';
    } else if (count === 1) {
      k = 'one_comment';
    } else {
      k = 'zero_comment';
    }

    var message = deployment.ship.translations.en[k].replace('{count}', count);
    element.innerHTML = message;
  });
}

export default bootstrap;

