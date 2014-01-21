App.Task = DS.Model.extend({
  title: DS.attr('string'),
  notes: DS.attr('string'),
  effort: DS.attr('number'),
  isCompleted: DS.attr('boolean'),
  createdAt: DS.attr('date')
});

App.Task.FIXTURES = [
  { id: 1, title: "Task 1", notes: "", effort: 10, isCompleted: false, createdAt: new Date() },
  { id: 2, title: "Task 2", notes: "", effort: 15, isCompleted: false, createdAt: new Date() },
  { id: 3, title: "Task 3", notes: "", effort:  5, isCompleted: false, createdAt: new Date() },
  { id: 4, title: "Task 4", notes: "", effort: 20, isCompleted: false, createdAt: new Date() },
  { id: 5, title: "Task 5", notes: "", effort: 25, isCompleted: false, createdAt: new Date() }
];
