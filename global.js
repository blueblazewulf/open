// Insert Global Header
document.getElementById('header').innerHTML = `
    <div class="header-container">
        <!-- Logo -->
        <img src="logo.jpg" alt="Retro-Scape Logo" class="logo">
        <!-- Navigation Menu -->
        <nav>
            <div class="menu-icon" onclick="toggleMenu()">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
            <ul class="nav-links" id="nav-links">
                <li><a href="index.html">🏠 Home</a></li>
                <li><a href="product.html">🛍️ Products</a></li>
                <li><a href="About_us_page.html">🧑🏻‍🤝‍🧑🏽 About</a></li>
                <li><a href="Contact_us_page.html">📞 Contact Us</a></li>
            </ul>
        </nav>
    </div>
`;

// Insert Global Footer (Including Ticker)
document.getElementById('footer').innerHTML = `
    <footer class="footer">
        <div class="ticker">
            <p class="ticker-text">🔥 Black Friday Sale! Up to 50% off on all Retro Products! Don't miss out! 🛍️</p>
        </div>
        <p>&copy; 2024 Retro Products. All rights reserved.</p>
    </footer>
`;

// Hamburger Menu Toggle Function
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // Toggle the "active" class to show/hide the menu
}
