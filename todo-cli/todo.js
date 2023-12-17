const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
      overduelist=[]
      for (let i = 0; i < all.length; i++) {
          if (all[i].dueDate=== yesterday){
              overduelist.push(all[i])
          }
      }
      return overduelist
  }

  const dueToday = () => {
      dueTodaylist=[]
      for (let i = 0; i < all.length; i++) {
          if (all[i].dueDate=== today){
              dueTodaylist.push(all[i])
          }
      }
      return dueTodaylist
  }

  const dueLater = () => {
      dueLaterlist=[]
      for (let i = 0; i < all.length; i++) {
          if (all[i].dueDate=== tomorrow){
              dueLaterlist.push(all[i])
          }
      }
      return dueLaterlist
  }

  const toDisplayableList = (list) => {
    let dl=[];
    list.forEach(item =>{
      const s=item.completed? "[X]":"[ ]";
      const t=item.title;
      const due=item.dueDate===today?"":`${item.dueDate}`;
      dl.push(`${s} ${t} ${due}`);
    });
    return dl.join("\n");
  }

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")