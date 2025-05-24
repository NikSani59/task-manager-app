import React from 'react'
import "../css/Footer.css"

function Footer() {
  return (
    <footer className='footer'>
        <div class="footer-container">
            <div class="footer-content">
                <p>© 2025 - task manager app</p>
                <p>made by NikSani59</p>
            </div>
            <div class="footer-icons">
                <a class="facebook" href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>  
                <a class="twitter" href="https://twitter.com/NikSani59" target="_blank"><i class="fab fa-twitter"></i></a>
                <a class="github" href="https://www.facebook.com/Alexander.Baratashvili.59/" target="_blank"><i class="fab fa-github"></i></a>
                <a class="linkedin" href="https://www.linkedin.com/in/alexander-baratashvili-785788363/" target="_blank"><i class="fab fa-linkedin"></i></a>    
            </div>
        </div>
    </footer>
  )
}

export default Footer
