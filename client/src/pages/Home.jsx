import { useEffect } from 'react'
import TaskForm from '../components/TaskForm'

function Home() {

  useEffect(() => {
    document.title = "Task Manager | Home";
  }, []);

  return (
    <TaskForm />
  )
}

export default Home
