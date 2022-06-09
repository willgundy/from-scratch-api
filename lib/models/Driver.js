const pool = require('../utils/pool');

class Driver {
    id;
    name;
    number;
    team;
    country;
    dob;
    pob;
    picture;

    constructor(driver) {
        this.id = driver.id;
        this.name = driver.name;
        this.number = driver.number;
        this.team = driver.team;
        this.country = driver.country;
        this.dob = driver.dob;
        this.pob = driver.pob;
        this.picture = driver.picture;
    }

  static async getAllDrivers() {
      const { rows } = await pool.query('SELECT * FROM drivers;')
      return rows.map((row) => new Driver(row));
  }

  static async getDriverById(id) {
      const { rows } = await pool.query('SELECT * FROM drivers WHERE id=$1', [id]);
      if(!rows[0]) return null;

      return new Driver(rows[0]);
  }
}

module.exports = Driver;