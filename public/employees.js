const employees = [
  { id: 1, name: 'Alice Johnson', role: 'Manager' },
  { id: 2, name: 'Bob Smith', role: 'Developer' },
  { id: 3, name: 'Carol Davis', role: 'Designer' }
];

// React component
function EmployeeList() {
  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "Employee List"),
    React.createElement(
      "ul",
      null,
      employees.map(function (emp) {
        return React.createElement(
          "li",
          { key: emp.id },
          emp.name,
          " - ",
          emp.role
        );
      })
    )
  );
}

// Render to the DOM
const rootElement = document.getElementById('root');
ReactDOM.render(React.createElement(EmployeeList, null), rootElement);
