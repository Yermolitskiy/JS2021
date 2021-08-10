const students = require("../../data");

class Students {
    constructor(data) {
        this._data = data;
    }

    getAll() {
        return this._data;
    }
}

module.exports = new Students(students);