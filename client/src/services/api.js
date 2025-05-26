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

export const updateTask = (id, data) =>
  fetch(`/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => {
    if (!res.ok) throw new Error("Failed to update task");
    return res.json();
  });
  
export const deleteTask = async (id) => {
  const res = await fetch(`/tasks/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error('Failed to delete task');
  return res.json();
};
