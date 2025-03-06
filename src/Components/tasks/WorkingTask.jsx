import React, { useState } from "react";
import { Table, Button, Form } from "react-bootstrap";

function WorkingTask({ tasks, deleteTask, updateTask }) {
  const [editId, setEditId] = useState(null);
  const [editedTask, setEditedTask] = useState({});

  const handleEdit = (task) => {
    setEditId(task.id);
    setEditedTask(task);
  };

  const handleSave = () => {
    console.log("Saving task:", editedTask); // Debugging log
    updateTask(editId, editedTask);
    setEditId(null);
  };

  return (
    <div className="mt-3">
      <h3>Working Tasks</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Description</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>
                {editId === task.id ? (
                  <Form.Control type="text" value={editedTask.name} onChange={(e) => setEditedTask({ ...editedTask, name: e.target.value })} />
                ) : (
                  task.name
                )}
              </td>
              <td>
                {editId === task.id ? (
                  <Form.Control type="date" value={editedTask.date} onChange={(e) => setEditedTask({ ...editedTask, date: e.target.value })} />
                ) : (
                  task.date
                )}
              </td>
              <td>
                {editId === task.id ? (
                  <Form.Control as="textarea" value={editedTask.desc} onChange={(e) => setEditedTask({ ...editedTask, desc: e.target.value })} />
                ) : (
                  task.desc
                )}
              </td>
              <td>
                {editId === task.id ? (
                  <Form.Control type="text" value={editedTask.title} onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })} />
                ) : (
                  task.title
                )}
              </td>
              <td>
                {editId === task.id ? (
                  <>
                    <Button variant="success" onClick={handleSave}>Save</Button>
                    <Button variant="secondary" onClick={() => setEditId(null)}>Cancel</Button>
                  </>
                ) : (
                  <>
                    <Button variant="warning" onClick={() => handleEdit(task)}>Edit</Button>
                    <Button variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default WorkingTask;
