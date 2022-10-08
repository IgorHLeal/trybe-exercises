"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = __importDefault(require("./pessoa"));
class Student extends pessoa_1.default {
    constructor(registration, name, notesTests, notesJobs, birthDate) {
        super(name, birthDate);
        this._registration = registration;
        this._name = name;
        this._notesTests = notesTests;
        this._notesJobs = notesJobs;
    }
    averageNotes() {
        const sum = this.sumNotes();
        const total = this._notesJobs.length + this._notesTests.length;
        return sum / total;
    }
    sumNotes() {
        let sum = 0;
        const notes = [...this._notesJobs, ...this._notesTests];
        notes.forEach((element) => sum += element);
        return sum;
        // Com Reduce tipar o método usando number
        /* return [...this._notesJobs, ...this._notesTests].reduce((prevNote, currNote) => {
          const notes = prevNote + currNote;
    
          return notes;
        }, 0 ); */
    }
    get registration() {
        return this._registration;
    }
    ;
    set registration(value) {
        this._registration = value;
    }
    ;
    get name() {
        return this._name;
    }
    ;
    set name(value) {
        this._name = value;
    }
    ;
    get notesTests() {
        return this._notesTests;
    }
    ;
    set notesTests(value) {
        this._notesTests = value;
    }
    ;
    get notesJobs() {
        return this._notesJobs;
    }
    ;
    set notesJobs(value) {
        this._notesJobs = value;
    }
    ;
}
const student1 = new Student('123', 'Igor', [2, 4, 8, 10], [9, 9], new Date(1996 / 3 / 22));
console.log(student1);
console.log(student1.sumNotes());
console.log(student1.averageNotes());
