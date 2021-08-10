const RepositoryBase = require('.repositoryBase');

class StudentRepository extends RepositoryBase {
  constructor(db) {
    super();
    this.dataCollection = db.data;
  }
  getAll() {
    return this.studentCollection;
  }
  getById(id) {
    return this.dataCollection.find(data => data._id == id);
  }
  removeById(id {
    this.dataCollection = this.dataCollection.filter(data => data._id != id);
  }
}
module.exports = BookRepository;
