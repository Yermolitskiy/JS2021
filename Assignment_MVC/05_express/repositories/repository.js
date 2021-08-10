const StudentReeporitory = require('./studentRepository');

class Repository {
  constructor(db) {
    this._db = db;
  }
  registerRepositories() {
    this.student = new StudentRepository(this._db);
  }
}
module.exports = Repository;
