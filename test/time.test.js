const request = require('supertest');
const app = require('../app');

describe('GET /time', () => {
  it('should return ISO formatted time', async () => {
    const res = await request(app).get('/time');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('time');

    const t = res.body.time;
    const parsed = new Date(t);

    expect(isNaN(parsed.getTime())).toBe(false);
    expect(t).toBe(parsed.toISOString());
  });
});
