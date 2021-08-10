const students = require("../../data");

class Students {
    constructor(data) {
        this._data = data;
    }

    getAll() {
        return this._data;
    }

    getById(id) {
        return this._data.find(entry => Number(entry.id) === Number(id));
    }
}

module.exports = new Students(students);