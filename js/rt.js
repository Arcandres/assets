!function () {
  var t   = document.getElementById('time'),
      p = `<data:post.body/>`,
      wpm = 200;

  p = p.split(' ');
  p = Math.round(p.length / wpm);

  if (p < 0)
    p.textContent = 'Menos de 1 min';
  else if (p > 1)
    t.textContent = ' ' + p + ' min';
  else
    t.textContent = ' ' + p + ' mins';
}();
