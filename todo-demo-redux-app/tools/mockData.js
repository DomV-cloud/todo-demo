const tasks = [
  {
    id: 1,
    title: "Buy groceries",
    description: "Milk, eggs, bread, and fruits",
    completed: false,
    priority: "high",
    dueDate: "2025-03-20",
    categoryId: 1
  },
  {
    id: 2,
    title: "Finish project report",
    description: "Complete the final section and review",
    completed: false,
    priority: "medium",
    dueDate: "2025-03-15",
    categoryId: 2
  },
  {
    id: 3,
    title: "Call the dentist",
    description: "Schedule an appointment for check-up",
    completed: true,
    priority: "low",
    dueDate: "2025-03-10",
    categoryId: 3
  },
  {
    id: 4,
    title: "Clean the house",
    description: "Living room, kitchen, and bathrooms",
    completed: false,
    priority: "medium",
    dueDate: "2025-03-17",
    categoryId: 1
  },
  {
    id: 5,
    title: "Workout",
    description: "30-minute run and stretching",
    completed: false,
    priority: "low",
    dueDate: "2025-03-14",
    categoryId: 4
  }
];

const categories = [
  { id: 1, name: "Home" },
  { id: 2, name: "Work" },
  { id: 3, name: "Health" },
  { id: 4, name: "Fitness" }
];

const newTask = {
  id: null,
  title: "",
  description: "",
  completed: false,
  priority: "medium",
  dueDate: null,
  categoryId: null
};

module.exports = {
  newTask,
  tasks,
  categories
};
