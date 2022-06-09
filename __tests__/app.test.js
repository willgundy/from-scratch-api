const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { drivers } = require('../data/drivers');

describe('drivers routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/drivers should return a list of drivers', async () => {
    const res = await request(app).get('/drivers/1');
    const lewis = {
      "id": "1",
      "name": "Lewis Hamilton",
      "number": 44,
      "team": "Mercedes",
      "country": "United Kingdom",
      "dob": "01/07/1985",
      "pob": "Stevenage. England",
      "picture": "https://rbbzxmskagprovqccrmk.supabase.co/storage/v1/object/sign/f1-images/hamilton.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJmMS1pbWFnZXMvaGFtaWx0b24ucG5nIiwiaWF0IjoxNjQ4MDYzNjA5LCJleHAiOjE5NjM0MjM2MDl9.s-ymo0b9xrrUF-4vO9cWHI0ARA07g9e8EB8F2xDutDA"
      };
    expect(res.body).toEqual(lewis);
  });
  it('/drivers should return a list of drivers', async () => {
    const res = await request(app).get('/drivers');
    expect(res.body).toEqual(drivers);
  });
  afterAll(() => {
    pool.end();
  });
});
