const todoList = require('../todo');

const {all, markAsComplete, add }=todoList();

describe("Todolist Test Suite", () => {
    beforeAll(() => {
        add(
            {
                title: "Test todo",
                completed: false,
                dueDate:new Date().toISOString()
    });
    });

    test("Should add new todo", () => {
        const todoItemsCount = all.length;
        add(
            {
                title: "Test todo",
                completed: false,
                dueDate: new Date().toISOString()
            }
        );
        expect(all.length).toBe(todoItemsCount + 1);
    });

test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
});
});