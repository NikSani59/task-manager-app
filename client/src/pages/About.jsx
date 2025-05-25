import { useEffect } from 'react'
import '../css/About.css'

function About() {

    useEffect(() => {
    document.title = "Task Manager | About";
    })

  return (
    <div className="about-container">
      <h1>About</h1>
      <p>Welcome to Task Manager, the single greatest advancement in human productivity since the invention of the calendar.

I am the Chief Executive Officer, Supreme Architect, and Benevolent Overlord of this operation. Every pixel, every checkbox, every line of JavaScript has been hand-forged in the fires of sheer willpower and caffeine-fueled obsession.

This is not just a to-do list.

This is a strategic command center for your entire existence.</p>

<p>Built with the precision of a Swiss watch and the aggression of a high-speed train, this app exists to dominate your day.

If you’ve ever felt the crushing weight of responsibility and thought, “There must be a better way” — this is that better way. And I, the mastermind behind it all, have generously decided to share it with the world.

You’re welcome.</p>
    </div>
  )
}

export default About
