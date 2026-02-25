# Header Design Implementation Plan

This document outlines the HTML structure and CSS modifications required to match the reference "Buliten" header design. Ensure you make these changes to `index.html` and `style.css`.

## 1. Top Bar Optimization

**Goal:** Match the black background with the distinct white language switcher.

### CSS Updates (`style.css`)
```css
/* Update topbar styles */
.topbar {
  background: var(--dark-alt); /* almost black */
  border-bottom: none;
  padding: 0; /* Remove top/bottom padding to let lang-switcher fill height */
}

.topbar .container {
  min-height: 40px;
}

.topbar-right {
  height: 100%;
}

.lang-switcher {
  background: var(--white);
  color: var(--gold-dark); /* Orange text */
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 0;
  font-weight: 600;
}

.lang-switcher i {
  color: var(--gold-dark);
}
```

## 2. Main Header & Angled Logo Section

**Goal:** Create the signature dark-grey slanted background behind the logo while keeping the rest of the header black.

### HTML Structure Adjustments (`index.html`)

You might need to adjust the `.header-main` and `.header-wrapper` layout slightly, or use a pseudo-element for the slant.

### CSS Updates (`style.css`)
```css
.header {
  background: var(--dark-alt); /* Black background for the right side */
  border-bottom: none;
}

.header-wrapper {
  display: flex;
  align-items: stretch; /* Make both sides equal height */
  position: relative;
  z-index: 1;
}

/* The dark grey slanted background for the logo */
.logo-section {
  background: #222222; /* Dark grey */
  padding: 20px 60px 20px 20px;
  position: relative;
  display: flex;
  align-items: center;
}

/* CREATE THE SLANT */
.logo-section::after {
  content: '';
  position: absolute;
  top: 0;
  right: -30px; /* Width of the slant */
  bottom: 0;
  width: 60px;
  background: #222222;
  transform: skewX(-25deg);
  z-index: -1;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
}

/* Optional: The left-side orange tool tab */
.logo-section::before {
  content: '\f1fc'; /* FontAwesome brush icon */
  font-family: 'Font Awesome 6 Free';
  font-weight: 900;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background: var(--gold);
  color: var(--white);
  width: 30px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
```

## 3. Contact Info & CTA Button (Top Right)

**Goal:** Orange icons, precise text colors, and a pill-shaped orange CTA button.

### CSS Updates (`style.css`)
```css
.header-top-row {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* Subtle divider line */
  gap: 30px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.contact-item i {
  color: var(--gold); /* Orange icons */
  font-size: 24px;
}

.contact-item .info small {
  color: var(--white);
  font-weight: 700;
  font-size: 14px;
  text-transform: capitalize;
}

.contact-item .info span {
  color: var(--gray-400);
  font-size: 13px;
  display: block;
}

/* Quote Button Pill Shape */
.btn-quote, .header-cta .btn {
  background: var(--gold);
  color: var(--dark);
  border-radius: 500px; /* Pill shape */
  padding: 12px 28px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
```

## 4. Navigation Menu & Utility Icons (Bottom Right)

**Goal:** Orange active state, white menu text, cart icon with badge, and search icon.

### HTML Updates (`index.html`)
Add the cart and search icons inside the navbar area:
```html
<nav class="navbar">
  <div class="navbar-inner">
    <ul class="main-nav" id="mainNav">
        <!-- Existing nav items... -->
    </ul>
    
    <!-- New Utility Icons -->
    <div class="header-utils">
      <a href="#" class="cart-icon">
        <i class="fas fa-shopping-cart"></i>
        <span class="badge">2</span>
      </a>
      <a href="#" class="search-icon">
        <i class="fas fa-search"></i>
      </a>
    </div>
  </div>
</nav>
```

### CSS Updates (`style.css`)
```css
.navbar {
  padding: 15px 0;
}

.navbar-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-nav > li > a {
  color: var(--white);
  font-weight: 600;
  font-size: 13px;
  text-transform: uppercase;
  padding: 5px 10px;
}

.main-nav > li > a.active,
.main-nav > li:hover > a {
  color: var(--gold);
}

/* Utility Icons */
.header-utils {
  display: flex;
  align-items: center;
  gap: 20px;
}

.header-utils a {
  color: var(--white);
  font-size: 16px;
  position: relative;
  transition: var(--transition);
}

.header-utils a:hover {
  color: var(--gold);
}

/* Cart Badge */
.header-utils .cart-icon .badge {
  position: absolute;
  top: -8px;
  right: -10px;
  background: var(--gold);
  color: var(--dark);
  font-size: 10px;
  font-weight: 700;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## Summary of Execution
1. Copy the CSS blocks into `style.css` (replace original matching classes).
2. Tweak the HTML in `index.html` to add the cart/search utilities.
3. Validate the skew background doesn't overflow mobile views by adding media queries for smaller screens.
