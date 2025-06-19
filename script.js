document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const hireBtn = document.getElementById('hire-btn');
    const hireCount = document.getElementById('hire-count');
    const slaveImg = document.getElementById('slave-img');
    
    let count = 0;
    
    // Dark Mode Toggle
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggle.textContent = 'Light Mode';
        } else {
            darkModeToggle.textContent = 'Dark Mode';
        }
    });
    
    // Hire Button
    hireBtn.addEventListener('click', function() {
        count++;
        hireCount.textContent = count;
        
        // Animation effect
        hireBtn.textContent = 'ERFOLGREICH GEMIETET!';
        hireBtn.style.backgroundColor = '#00aa00';
        
        setTimeout(() => {
            hireBtn.textContent = 'NOCH EINMAL MIETEN!';
            hireBtn.style.backgroundColor = '';
        }, 1500);
        
        // Change image for fun
        if (count % 5 === 0) {
            slaveImg.src = 'https://via.placeholder.com/150/ff0000/ffffff?text=LIAM+' + count;
        }
    });
    
    // Easter egg - change image on click
    slaveImg.addEventListener('click', function() {
        slaveImg.src = 'https://via.placeholder.com/150/0000ff/ffffff?text=ÜBERRASCHUNG!';
        setTimeout(() => {
            slaveImg.src = 'https://via.placeholder.com/150';
        }, 2000);
    });
});
