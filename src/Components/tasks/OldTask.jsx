import React from "react";
import { Table } from "react-bootstrap"; // Import Table from react-bootstrap

function OldTask({ tasks }) {
  return (
    <div>
      <h3>Old Tasks</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Description</th>
            <th>Completed Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.title}</td>
              <td>{task.desc}</td>
              <td>{task.date}</td> {/* Assuming `date` is the completed date */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default OldTask;