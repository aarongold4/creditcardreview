/* CreditCardReview.org outbound links.
   Every Apply/Visit button carries data-product="<key>". This script looks the key up in
   /links.json and points the button at that entry's "url" (an affiliate tracking link once
   approved, the issuer's official page until then). If links.json can't load, the button
   keeps its built-in href, which is the issuer's official page. */
(function () {
  function apply(map) {
    var links = document.querySelectorAll('a[data-product]');
    for (var i = 0; i < links.length; i++) {
      var entry = map[links[i].getAttribute('data-product')];
      if (entry && typeof entry.url === 'string' && /^https?:\/\//.test(entry.url)) {
        links[i].setAttribute('href', entry.url);
      }
    }
  }
  try {
    fetch('/links.json', { cache: 'no-cache' })
      .then(function (r) { return r.ok ? r.json() : {}; })
      .then(apply)
      .catch(function () {});
  } catch (e) {}
})();
