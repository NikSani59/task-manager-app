const headers = { "Content-Type": "application/json" };

export const getTasks = () => 
    fetch("/tasks").then((r) => r.json());

export const addTask = async (name) => {
  const res = await fetch("/tasks", {
    method: "POST",
    headers,
    body: JSON.stringify({ name }),
  });
  if (!res.ok) throw new Error("Failed to create task");
  return res.json();
};

export const updateTask = (id, name) =>
  fetch(`/tasks/${id}`, {
    method: "PUT",
    headers,
    body: JSON.stringify({ name }),
  });
  
export const deleteTask = async (id) => {
  const res = await fetch(`/tasks/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error('Failed to delete task');
  return res.json();
};
