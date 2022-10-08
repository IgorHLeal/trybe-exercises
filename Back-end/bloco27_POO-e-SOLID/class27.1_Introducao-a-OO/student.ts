class Student {
  private _registration: string;
  private _name: string;
  private _notesTests: number[];
  private _notesJobs: number[];

  constructor(registration: string , name: string, notesTests: number[], notesJobs: number[]) {
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

  get registration(): string {
    return this._registration;
  };
  set registration(value: string) {
    this._registration = value;
  };

  public get name(): string {
    return this._name;
  };
  public set name(value: string) {
    this._name = value;
  };

  public get notesTests(): number[] {
    return this._notesTests;
  };
  public set notesTests(value: number[]) {
    this._notesTests = value;
  };

  public get notesJobs(): number[] {
    return this._notesJobs;
  };
  public set notesJobs(value: number[]) {
    this._notesJobs = value;
  };


}

const student1 = new Student('123', 'Igor', [2, 4, 8, 10], [9, 9]);

console.log(student1);
console.log(student1.sumNotes());
console.log(student1.averageNotes());
