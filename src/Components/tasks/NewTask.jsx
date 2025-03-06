import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function NewTask({ addTask }) {
  const [task, setTask] = useState({
    name: "",
    date: "",
    desc: "",
    title: "",
    status: "working",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({ name: "", date: "", desc: "", title: "", status: "working" });
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-3">
      <Form.Group>
        <Form.Label>Name of the Task</Form.Label>
        <Form.Control type="text" value={task.name} onChange={(e) => setTask({ ...task, name: e.target.value })} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" value={task.date} onChange={(e) => setTask({ ...task, date: e.target.value })} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" value={task.desc} onChange={(e) => setTask({ ...task, desc: e.target.value })} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} required />
      </Form.Group>
      <Button type="submit" className="mt-2">Add Task</Button>
    </Form>
  );
}

export default NewTask;
