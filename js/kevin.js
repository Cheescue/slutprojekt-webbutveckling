function toggleBox(box) {
    box.classList.toggle("expanded");
}

function toggleMenu() {
    console.log("Menu toggled!");  // För att kontrollera att funktionen körs
    var menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}


