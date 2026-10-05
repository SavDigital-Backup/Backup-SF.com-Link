/**
 * Layout Manager for Savoury Digital Factory
 * Manages layout options and grid configurations
 */

const layoutManager = {
  // Current layout settings
  settings: {
    layoutType: 'grid',
    gridLayout: '3x3',
    buttonSpacing: 16,
    buttonRadius: 10,
    horizontalGap: 16,
    verticalGap: 16,
    buttonPadding: 16,
    responsiveBehavior: 'auto'
  },
  
  // Get current settings
  getSettings: function() {
    return this.settings;
  },
  
  // Update settings
  updateSettings: function(newSettings) {
    this.settings = { ...this.settings, ...newSettings };
    return this.settings;
  },
  
  // Generate CSS for current layout
  generateLayoutCSS: function() {
    const { layoutType, gridLayout, horizontalGap, verticalGap, buttonPadding, responsiveBehavior } = this.settings;
    
    // Parse grid dimensions
    let gridColumns, gridRows;
    if (gridLayout.includes('x')) {
      [gridColumns, gridRows] = gridLayout.split('x').map(Number);
    } else {
      gridColumns = 3;
      gridRows = 3;
    }
    
    // Base CSS for different layout types
    let css = '';
    
    switch (layoutType) {
      case 'grid':
        css = `
.menu-grid {
    display: grid;
    grid-template-columns: repeat(${gridColumns}, 1fr);
    gap: ${verticalGap}px ${horizontalGap}px;
    width: 100%;
    margin-top: var(--spacing-lg);
}

.menu-item {
    padding: ${buttonPadding}px;
}`;
        break;
        
      case 'masonry':
        css = `
.menu-grid {
    display: grid;
    grid-template-columns: repeat(${gridColumns}, 1fr);
    grid-auto-rows: minmax(100px, auto);
    gap: ${verticalGap}px ${horizontalGap}px;
    width: 100%;
    margin-top: var(--spacing-lg);
}

.menu-item {
    padding: ${buttonPadding}px;
}

.menu-item:nth-child(3n+1) {
    grid-row: span 2;
}

.menu-item:nth-child(4n+2) {
    grid-column: span 2;
}`;
        break;
        
      case 'flex':
        css = `
.menu-grid {
    display: flex;
    flex-wrap: wrap;
    gap: ${verticalGap}px ${horizontalGap}px;
    width: 100%;
    margin-top: var(--spacing-lg);
}

.menu-item {
    flex: 1 1 calc(${100/gridColumns}% - ${horizontalGap}px);
    min-width: 150px;
    padding: ${buttonPadding}px;
}`;
        break;
        
      default:
        // Default to grid
        css = `
.menu-grid {
    display: grid;
    grid-template-columns: repeat(${gridColumns}, 1fr);
    gap: ${verticalGap}px ${horizontalGap}px;
    width: 100%;
    margin-top: var(--spacing-lg);
}

.menu-item {
    padding: ${buttonPadding}px;
}`;
    }
    
    // Add responsive behavior
    if (responsiveBehavior === 'auto') {
      css += `

@media (max-width: 767px) {
    .menu-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .menu-grid {
        grid-template-columns: 1fr;
    }
}`;
    } else if (responsiveBehavior === 'stack') {
      css += `

@media (max-width: 767px) {
    .menu-grid {
        display: flex;
        flex-direction: column;
        gap: ${verticalGap}px;
    }
    
    .menu-item {
        width: 100%;
    }
}`;
    }
    
    return css;
  }
};

// Initialize the layout manager
// No initialization needed

