const today = new Date();
console.log(today);

function formateDate(date) {
  const day = Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
  return day;
}

export default function TodoList() {
  return (
    <h1>Todo list for {formateDate(today)}</h1>
  );
}