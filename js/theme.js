// Toggle module content
function toggleModule(header) {
    const content = header.nextElementSibling;
    content.classList.toggle('show');
}

// Mark lesson complete
function markComplete() {
    const progressBar = document.querySelector('.progress-bar');
    let currentWidth = parseInt(progressBar.style.width);
    if (currentWidth < 100) {
        progressBar.style.width = (currentWidth + 10) + '%';
    }
    alert('Lesson marked as complete!');
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('logout')?.addEventListener('click', () => alert('Logged out.'));
});
