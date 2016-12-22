/**
 * these tests are run on geez.js file
 */
const test = require('tape');
const geezer = require('./index');

test('Running Geezer', (t) => {
  t.plan(65);

  t.equal(geezer('1'), '፩', '፩');
  t.equal(geezer('10'), '፲', '፲');
  t.equal(geezer('100'), '፻', '፻');
  t.equal(geezer('1000'), '፲፻', '፲፻');
  t.equal(geezer('10000'), '፼', '፼');
  t.equal(geezer('100000'), '፲፼', '፲፼');
  t.equal(geezer('1000000'), '፻፼', '፻፼');
  t.equal(geezer('10000000'), '፲፻፼', '፲፻፼');
  t.equal(geezer('100000000'), '፼፼', '፼፼');
  t.equal(geezer('1000000000'), '፲፼፼', '፲፼፼');
  t.equal(geezer('10000000000'), '፻፼፼', '፻፼፼');
  t.equal(geezer('100000000000'), '፲፻፼፼', '፲፻፼፼');
  t.equal(geezer('1000000000000'), '፼፼፼', '፼፼፼');
  t.equal(geezer('100010000'), '፼፩፼', '፼፩፼');
  t.equal(geezer('100100000'), '፼፲፼', '፼፲፼');
  t.equal(geezer('100200000'), '፼፳፼', '፼፳፼');
  t.equal(geezer('100110000'), '፼፲፩፼', '፼፲፩፼');
  t.equal(geezer('11'), '፲፩', '፲፩');
  t.equal(geezer('111'), '፻፲፩', '፻፲፩');
  t.equal(geezer('1111'), '፲፩፻፲፩', '፲፩፻፲፩');
  t.equal(geezer('11111'), '፼፲፩፻፲፩', '፼፲፩፻፲፩');
  t.equal(geezer('111111'), '፲፩፼፲፩፻፲፩', '፲፩፼፲፩፻፲፩');
  t.equal(geezer('1111111'), '፻፲፩፼፲፩፻፲፩', '፻፲፩፼፲፩፻፲፩');
  t.equal(geezer('11111111'), '፲፩፻፲፩፼፲፩፻፲፩', '፲፩፻፲፩፼፲፩፻፲፩');
  t.equal(geezer('111111111'), '፼፲፩፻፲፩፼፲፩፻፲፩', '፼፲፩፻፲፩፼፲፩፻፲፩');
  t.equal(geezer('1111111111'), '፲፩፼፲፩፻፲፩፼፲፩፻፲፩', '፲፩፼፲፩፻፲፩፼፲፩፻፲፩');
  t.equal(geezer('11111111111'), '፻፲፩፼፲፩፻፲፩፼፲፩፻፲፩', '፻፲፩፼፲፩፻፲፩፼፲፩፻፲፩');
  t.equal(geezer('111111111111'), '፲፩፻፲፩፼፲፩፻፲፩፼፲፩፻፲፩', '፲፩፻፲፩፼፲፩፻፲፩፼፲፩፻፲፩');
  t.equal(geezer('1111111111111'), '፼፲፩፻፲፩፼፲፩፻፲፩፼፲፩፻፲፩', '፼፲፩፻፲፩፼፲፩፻፲፩፼፲፩፻፲፩');
  t.equal(geezer('12'), '፲፪', '፲፪');
  t.equal(geezer('123'), '፻፳፫', '፻፳፫');
  t.equal(geezer('1234'), '፲፪፻፴፬', '፲፪፻፴፬');
  t.equal(geezer('12345'), '፼፳፫፻፵፭', '፼፳፫፻፵፭');
  t.equal(geezer('7654321'), '፯፻፷፭፼፵፫፻፳፩', '፯፻፷፭፼፵፫፻፳፩');
  t.equal(geezer('17654321'), '፲፯፻፷፭፼፵፫፻፳፩', '፲፯፻፷፭፼፵፫፻፳፩');
  t.equal(geezer('51615131'), '፶፩፻፷፩፼፶፩፻፴፩', '፶፩፻፷፩፼፶፩፻፴፩');
  t.equal(geezer('15161513'), '፲፭፻፲፮፼፲፭፻፲፫', '፲፭፻፲፮፼፲፭፻፲፫');
  t.equal(geezer('10101011'), '፲፻፲፼፲፻፲፩', '፲፻፲፼፲፻፲፩');
  t.equal(geezer('3'), '፫', '፫');
  t.equal(geezer('30'), '፴', '፴');
  t.equal(geezer('33'), '፴፫', '፴፫');
  t.equal(geezer('303'), '፫፻፫', '፫፻፫');
  t.equal(geezer('3003'), '፴፻፫', '፴፻፫');
  t.equal(geezer('3030'), '፴፻፴', '፴፻፴');
  t.equal(geezer('3033'), '፴፻፴፫', '፴፻፴፫');
  t.equal(geezer('3300'), '፴፫፻', '፴፫፻');
  t.equal(geezer('3303'), '፴፫፻፫', '፴፫፻፫');
  t.equal(geezer('3333'), '፴፫፻፴፫', '፴፫፻፴፫');
  t.equal(geezer('30003'), '፫፼፫', '፫፼፫');
  t.equal(geezer('30303'), '፫፼፫፻፫', '፫፼፫፻፫');
  t.equal(geezer('300003'), '፴፼፫', '፴፼፫');
  t.equal(geezer('303030'), '፴፼፴፻፴', '፴፼፴፻፴');
  t.equal(geezer('3000003'), '፫፻፼፫', '፫፻፼፫');
  t.equal(geezer('3000303'), '፫፻፼፫፻፫', '፫፻፼፫፻፫');
  t.equal(geezer('3030003'), '፫፻፫፼፫', '፫፻፫፼፫');
  t.equal(geezer('3300003'), '፫፻፴፼፫', '፫፻፴፼፫');
  t.equal(geezer('3030303'), '፫፻፫፼፫፻፫', '፫፻፫፼፫፻፫');
  t.equal(geezer('303030303'), '፫፼፫፻፫፼፫፻፫', '፫፼፫፻፫፼፫፻፫');
  t.equal(geezer('333333333'), '፫፼፴፫፻፴፫፼፴፫፻፴፫', '፫፼፴፫፻፴፫፼፴፫፻፴፫');
  t.equal(geezer(333333333), '፫፼፴፫፻፴፫፼፴፫፻፴፫', '፫፼፴፫፻፴፫፼፴፫፻፴፫');

  // [Invalid]
  t.equal(geezer('3.3'), '3.3', '3.3');
  t.equal(geezer('NaN'), 'NaN', 'NaN');
  t.equal(geezer('0'), '0', '0');
  t.equal(geezer(undefined), undefined, 'Undefined');
  t.equal(geezer(null), null, 'Null');
});
