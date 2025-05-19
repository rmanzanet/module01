const employees = [
  { id: 1, name: 'Alice Johnson', role: 'Manager' },
  { id: 2, name: 'Bob Smith', role: 'Developer' },
  { id: 3, name: 'Carol Davis', role: 'Designer' }
];

// React component
function EmployeeList() {
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.name} - {emp.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Render to the DOM
const rootElement = document.getElementById('root');
ReactDOM.render(<EmployeeList />, rootElement);
