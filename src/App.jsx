import Header from "./components/Header";
import Subheader from "./components/Subheader";
import ListContainer from "./components/ListContainer";

function App() {
  const tasks = [
    { id: 1, title: "Learn React", description: "Study React hooks", status: "in progress" },
    { id: 2, title: "Grocery Shopping", description: "Buy milk and eggs", status: "pending" },
    { id: 3, title: "Workout", description: "Go to the gym", status: "done" },
  ];

  return (
    <div className="app">
      <Header />
      <Subheader subtitle="Todo List Manager" />
      <ListContainer title="Todo List" items={tasks} />
    </div>
  );
}

export default App;
