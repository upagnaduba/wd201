const todoList = require('../todo');

const {all, markAsComplete, add }=todoList();

describe("Todolist Test Suite", () => {
    let todos;
    beforeAll(() => {
        todos = todoList();
        const dateToday=new Date();
        const formattedDate = (d) => d.toISOString().split('T')[0];
        const today = formattedDate(dateToday);
        const yesterday = formattedDate(new Date(dateToday.setDate(dateToday.getDate() - 1)));
        const tomorrow = formattedDate(new Date(dateToday.setDate(dateToday.getDate() + 2)));
        add(
            {
                title: "Test todo",
                completed: false,
                dueDate:new Date().toISOString()
    });
    });

    test("Should add new todo", () => {
        const todoItemsCount = todos.all.length;
        add(
            {
                title: "Test todo",
                completed: false,
                dueDate: new Date().toISOString()
            }
        );
        expect(todos.all.length).toBe(todoItemsCount + 1);
    });
    test("Should mark a todo as complete", () => {
        expect(todos.all[0].completed).toBe(false);
        markAsComplete(0);
        expect(todos.all[0].completed).toBe(true);
    });
    test('Should retrieve overdue items', () => {
    const dateToday = new Date();
    const formattedDate = (d) => d.toISOString().split('T')[0]
    const y = formattedDate(new Date(dateToday.setDate(dateToday.getDate() - 1)));
    const od = {title: 'Do Coding', dueDate: y,completed:false};
    todos.add(od);
    const overdueItems=todos.overdue();
    expect(overdueItems.length).toBe(1);
    expect(overdueItems[0]).toEqual(od);
  });

  test('Should retrieve due today items', () => {
    const dateToday = new Date();
    const formattedDate = (d) => d.toISOString().split('T')[0];
    const today = formattedDate(dateToday);
    const todayAdd={title: 'Do laundry',dueDate: today,completed:'false'};
    todos.add(todayAdd);
    const todayItems = todos.dueToday();
    expect(todayItems.length).toBe(1);
    expect(todayItems[0]).toEqual(todayAdd);
  });

  test('Should retrieve due later items', () => {
    const dateToday = new Date();
    const formattedDate = (d) => d.toISOString().split('T')[0];
    const tomorrow = formattedDate(new Date(dateToday.setDate(dateToday.getDate() + 2)));
    const dl={title:'Return a book',dueDate:tomorrow,completed:false};
    todos.add(dl);
    const laterItems = todos.dueLater();
    expect(laterItems.length).toBe(1);
    expect(laterItems[0]).toEqual(dl);
  });
});
