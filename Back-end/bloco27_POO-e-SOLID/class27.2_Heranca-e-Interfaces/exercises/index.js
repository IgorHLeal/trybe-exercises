var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Student = /** @class */ (function () {
    function Student(registration, name, notesTests, notesJobs) {
        this._registration = registration;
        this._name = name;
        this._notesTests = notesTests;
        this._notesJobs = notesJobs;
    }
    Student.prototype.averageNotes = function () {
        var sum = this.sumNotes();
        var total = this._notesJobs.length + this._notesTests.length;
        return sum / total;
    };
    Student.prototype.sumNotes = function () {
        var sum = 0;
        var notes = __spreadArray(__spreadArray([], this._notesJobs, true), this._notesTests, true);
        notes.forEach(function (element) { return sum += element; });
        return sum;
        // Com Reduce tipar o método usando number
        /* return [...this._notesJobs, ...this._notesTests].reduce((prevNote, currNote) => {
          const notes = prevNote + currNote;
    
          return notes;
        }, 0 ); */
    };
    Object.defineProperty(Student.prototype, "registration", {
        get: function () {
            return this._registration;
        },
        set: function (value) {
            this._registration = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Student.prototype, "notesTests", {
        get: function () {
            return this._notesTests;
        },
        set: function (value) {
            this._notesTests = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Student.prototype, "notesJobs", {
        get: function () {
            return this._notesJobs;
        },
        set: function (value) {
            this._notesJobs = value;
        },
        enumerable: false,
        configurable: true
    });
    ;
    ;
    return Student;
}());
var student1 = new Student('123', 'Igor', [2, 4, 8, 10], [9, 9]);
console.log(student1);
console.log(student1.sumNotes());
console.log(student1.averageNotes());
