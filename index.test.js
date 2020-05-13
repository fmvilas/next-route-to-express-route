const { fromNextToExpressRoute } = require('./index');

describe('#fromNextToExpressRoute', () => {
  it('works with named params', () => {
    const route = fromNextToExpressRoute('/test/route/[id]/abc');
    expect(route).toEqual('/test/route/:id/abc');
  });

  it('works with multiple named params', () => {
    const route = fromNextToExpressRoute('/test/[id]/route/[id2]/abc');
    expect(route).toEqual('/test/:id/route/:id2/abc');
  });

  it('works with no named params', () => {
    const route = fromNextToExpressRoute('/test/route');
    expect(route).toEqual('/test/route');
  });

  it('works with a catch-all named param', () => {
    const route = fromNextToExpressRoute('/test/[...id]');
    expect(route).toEqual('/test/*');
  });

  it('does not work with a catch-all named param that is not at then end', () => {
    const route = fromNextToExpressRoute('/test/[...id]/abc');
    expect(route).toEqual('/test/[...id]/abc');
  });

  it('works with a catch-all param', () => {
    const route = fromNextToExpressRoute('/test/[...]');
    expect(route).toEqual('/test/*');
  });

  it('does not work with a catch-all param that is not at then end', () => {
    const route = fromNextToExpressRoute('/test/[...]/abc');
    expect(route).toEqual('/test/[...]/abc');
  });
});
