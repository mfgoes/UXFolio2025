# Navbar Component Documentation

## Overview
The navbar component is a reusable, component-based navigation menu with a dropdown for case studies. It includes thumbnail previews, project titles, and brief descriptions.

## Component Structure

### Files
- **HTML Template**: `assets/html/navbar.html`
- **CSS Styles**: `assets/css/navbar.css`
- **JavaScript Loader**: `assets/components/navbar.js`

## How It Works

### 1. HTML Template (`navbar.html`)
Contains the Bootstrap navbar structure with a dropdown menu for case studies. Each project includes:
- Thumbnail image (80x80px)
- Project title
- Brief description (1-2 lines)

### 2. CSS Styles (`navbar.css`)
Provides styling for:
- Dropdown mega menu with dark background
- Project preview cards with hover effects
- Responsive design for mobile devices
- Smooth animations and transitions

### 3. JavaScript Loader (`navbar.js`)
Loads the navbar HTML template into any page with `<div id="navbar-container"></div>`

## Adding a New Project to the Dropdown

To add a new case study to the dropdown menu:

1. **Add HTML in `navbar.html`**:
```html
<a href="your-project.html" class="dropdown-item project-preview-item">
    <div class="project-preview">
        <img src="assets/images/your-project/thumbnail.jpg" alt="Project Name" class="project-thumbnail">
        <div class="project-info">
            <h6 class="project-title">Project Name</h6>
            <p class="project-description">Brief one-sentence description of the project</p>
        </div>
    </div>
</a>
```

2. **Ensure thumbnail exists**:
   - Image should be at least 160x160px (displays at 80x80px)
   - Use square aspect ratio
   - Optimize for web (PNG or JPG)

3. **Include navbar.css in your project page**:
```html
<link rel="stylesheet" href="assets/css/navbar.css" />
```

## Current Projects in Dropdown

1. **PostNL IBAC**
   - File: `postnl-ibac.html`
   - Thumbnail: `assets/images/IBAC/thumbnail.jpg`
   - Description: "Systematic A/B testing drove 73% conversion lift and 27% revenue growth"

2. **Tasteradar**
   - File: `tasteradar.html`
   - Thumbnail: `assets/images/tasteradar/screen_collection.jpg`
   - Description: "AI-powered restaurant discovery platform reaching 500+ beta users"

3. **Mendix Security Audits**
   - File: `mendix.html`
   - Thumbnail: `assets/images/mendix/homepage.jpg`
   - Description: "Streamlined compliance workflows for enterprise security teams"

## Styling Customization

### Colors
The dropdown uses the following color scheme (defined in `navbar.css`):
- Background: `rgba(17, 24, 39, 0.98)` (dark with transparency)
- Hover accent: `#6e56cf` (deep purple from style guide)
- Text: `#ffffff` (white)
- Description text: `rgba(255, 255, 255, 0.65)` (muted white)

### Modifying Dropdown Width
Change `min-width` in `.project-dropdown`:
```css
.project-dropdown {
    min-width: 400px; /* Adjust as needed */
}
```

### Modifying Thumbnail Size
Change dimensions in `.project-thumbnail`:
```css
.project-thumbnail {
    width: 80px;  /* Adjust width */
    height: 80px; /* Adjust height */
}
```

## Responsive Behavior

- **Desktop (>768px)**: Full dropdown with 80x80px thumbnails
- **Mobile (<768px)**: Full-width dropdown with 60x60px thumbnails

## Accessibility

- Focus states included for keyboard navigation
- ARIA attributes for screen readers
- Proper semantic HTML structure

## Maintenance

When updating:
1. Keep descriptions to 1-2 lines max (automatically truncated with CSS)
2. Use consistent thumbnail aspect ratios
3. Test on mobile devices after adding new projects
4. Ensure all links point to valid project pages

## Integration

To use the navbar on a new page:

1. Add the navbar container:
```html
<div id="navbar-container"></div>
```

2. Include required CSS:
```html
<link rel="stylesheet" href="assets/css/navbar.css" />
```

3. Include the loader script:
```html
<script src="assets/components/navbar.js"></script>
```

---

**Last Updated**: 2025-12-09
**Component Version**: 1.0
