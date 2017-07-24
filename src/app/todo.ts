var ID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
};

export class Todo {
  public done: boolean;
  public text: string;
  public dueDateTime: Date;
  public id: string;

  constructor(done: boolean, text: string, dueDateTime: Date) {
    this.done = done;
    this.text = text;
    this.dueDateTime = dueDateTime;
    this.id = ID();
  }
}
