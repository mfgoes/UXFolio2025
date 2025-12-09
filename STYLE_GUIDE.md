# UXFolio Style & Color Guide

**Strategic Color System for Senior Product Management Portfolio**

---

## Color Palette

### Visual Swatches

**Primary Colors:**
- ![#6e56cf](https://placehold.co/30x30/6e56cf/6e56cf.png) **Deep Purple** `#6e56cf` - Primary Accent
- ![#10b981](https://placehold.co/30x30/10b981/10b981.png) **Emerald Green** `#10b981` - Success / Positive
- ![#f87171](https://placehold.co/30x30/f87171/f87171.png) **Soft Coral** `#f87171` - Failure / De-prioritized

**Neutral Colors:**
- ![#e5e7eb](https://placehold.co/30x30/e5e7eb/e5e7eb.png) **Cool Gray 100** `#e5e7eb` - Light backgrounds, tags
- ![#1f2937](https://placehold.co/30x30/1f2937/1f2937.png) **Cool Gray 900** `#1f2937` - Dark text/backgrounds
- ![#ffffff](https://placehold.co/30x30/ffffff/ffffff.png) **Pure White** `#ffffff` - Backgrounds, cards
- ![#111827](https://placehold.co/30x30/111827/111827.png) **Near Black** `#111827` - Primary text

---

### Primary Colors

| Role | Color Name | Hex | RGB | Usage |
|------|------------|-----|-----|-------|
| **Primary Accent** | Deep Purple | `#6e56cf` | `rgb(110, 86, 207)` | Headlines, key callouts, links, wins (e.g., "73% lift"), CTAs |
| **Success / Positive** | Emerald Green | `#10b981` | `rgb(16, 185, 129)` | Wins, positive metrics, "what worked" tags, success indicators |
| **Failure / De-prioritized** | Soft Coral | `#f87171` | `rgb(248, 113, 113)` | "What didn't work", reverted tests, de-prioritized features |

### Neutral Colors

| Role | Color Name | Hex | RGB | Usage |
|------|------------|-----|-----|-------|
| **Light Gray** | Cool Gray 100 | `#e5e7eb` | `rgb(229, 231, 235)` | Timeline labels, neutral test tags, backgrounds |
| **Dark Gray** | Cool Gray 900 | `#1f2937` | `rgb(31, 41, 55)` | Dark mode version, text on light backgrounds |
| **White** | Pure White | `#ffffff` | `rgb(255, 255, 255)` | Backgrounds, cards |
| **Black** | Near Black | `#111827` | `rgb(17, 24, 39)` | Primary text color |

---

## SCSS Variable Naming Convention

### Recommended Variables

```scss
// Primary Colors
$color-primary: #6e56cf;          // Deep Purple
$color-success: #10b981;          // Emerald Green
$color-warning: #f87171;          // Soft Coral (failures/de-prioritized)

// Neutrals
$color-gray-100: #e5e7eb;         // Light backgrounds
$color-gray-900: #1f2937;         // Dark text/backgrounds
$color-white: #ffffff;
$color-black: #111827;

// Semantic Aliases
$color-accent: $color-primary;
$color-link: $color-primary;
$color-positive: $color-success;
$color-negative: $color-warning;
$color-text-primary: $color-black;
$color-text-secondary: $color-gray-900;
$color-bg-neutral: $color-gray-100;
```

---

## Usage Guidelines

### Primary Accent (Deep Purple - #6e56cf)
- **Headlines and H1s**: Main project titles
- **Links**: All interactive text links
- **Key Metrics**: Important numerical wins (e.g., "73% conversion lift")
- **CTAs**: Primary buttons and action items
- **Highlights**: Drawing attention to experiments that worked

### Success Green (Emerald - #10b981)
- **Positive Outcomes**: Metrics that improved
- **"What Worked" Tags**: In case study breakdowns
- **Success Badges**: Labels for validated hypotheses
- **Wins**: A/B test winners, validated experiments

### Failure/Warning Coral (#f87171)
- **"What Didn't Work" Tags**: Failed experiments
- **Reverted Tests**: Experiments that were rolled back
- **De-prioritized Features**: Items in backlog that were cut
- **Learning Moments**: Not truly failures, but opportunities to iterate

### Neutral Grays
- **Timeline Labels**: Dates, durations (use #e5e7eb)
- **Neutral Tests**: Experiments with inconclusive results
- **Metadata**: Tags, categories, secondary information
- **Backgrounds**: Card backgrounds, sections

---

## Typography Pairing

### Recommended Font Hierarchy
- **Headlines (H1-H2)**: Bold weight, Deep Purple accent
- **Subheadlines (H3-H4)**: Semi-bold, Dark Gray
- **Body Text**: Regular weight, Near Black
- **Captions/Labels**: Light weight, Cool Gray 900
- **Metrics**: Bold weight, use semantic color (green for positive, purple for neutral/wins)

---

## Component-Specific Guidelines

### Cards
- **Background**: White (#ffffff)
- **Border**: Optional subtle border with Cool Gray 100 (#e5e7eb)
- **Title**: Deep Purple (#6e56cf)
- **Tags**: Use semantic colors based on outcome

### Buttons
- **Primary CTA**: Deep Purple background (#6e56cf), white text
- **Secondary**: Outline style with Deep Purple border
- **Hover State**: Darken primary by 10%

### Tags/Badges
```scss
.tag-success { background: #10b981; color: white; }
.tag-failure { background: #f87171; color: white; }
.tag-neutral { background: #e5e7eb; color: #1f2937; }
.tag-highlight { background: #6e56cf; color: white; }
```

### Metrics Display
- **Positive Change**: Emerald Green (#10b981)
- **Negative Change**: Soft Coral (#f87171)
- **Neutral/Total**: Deep Purple (#6e56cf)

---

## Accessibility Notes

### Contrast Ratios (WCAG AA Compliant)
- Deep Purple (#6e56cf) on white: ~4.8:1 ✓
- Emerald Green (#10b981) on white: ~2.8:1 ⚠️ (use white text on green bg instead)
- Soft Coral (#f87171) on white: ~3.2:1 ⚠️ (use white text on coral bg instead)
- Cool Gray 900 (#1f2937) on white: ~14.8:1 ✓

**Recommendation**: Always use white text when backgrounds use Success Green or Warning Coral.

---

## Migration Checklist

When updating SCSS files, replace:
- [ ] All hardcoded color values with SCSS variables
- [ ] Create a `_variables.scss` file with all color definitions
- [ ] Create a `_colors.scss` utility file for color classes
- [ ] Update component styles to use semantic color names
- [ ] Test contrast ratios for accessibility
- [ ] Ensure hover/active states use consistent color shifts

---

## Examples

### Before (Inconsistent)
```scss
.card-title {
  color: #7c3aed; // Random purple
}

.success-badge {
  background: #22c55e; // Different green
}
```

### After (Consistent)
```scss
.card-title {
  color: $color-primary;
}

.success-badge {
  background: $color-success;
  color: $color-white;
}
```

---

**Last Updated**: 2025-12-09
**Version**: 1.0
**Owner**: Mischa van der Goes
