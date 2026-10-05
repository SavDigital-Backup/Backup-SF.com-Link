/**
 * Background Manager for Savoury Digital Factory
 * Manages background options and patterns
 */

const backgroundManager = {
  // Digital patterns collection
  patterns: [
    { id: 'digital-pattern-1', name: 'Digital Grid', file: 'digital-pattern.png', category: 'abstract' },
    { id: 'digital-pattern-2', name: 'Tech Waves', file: 'tech-waves.png', category: 'abstract' },
    { id: 'digital-pattern-3', name: 'Geometric Shapes', file: 'geometric.png', category: 'abstract' },
    { id: 'digital-pattern-4', name: 'Circuit Board', file: 'circuit.png', category: 'tech' },
    { id: 'digital-pattern-5', name: 'Data Flow', file: 'data-flow.png', category: 'tech' },
    { id: 'digital-pattern-6', name: 'Binary Code', file: 'binary.png', category: 'tech' },
    { id: 'digital-pattern-7', name: 'Gradient Mesh', file: 'gradient-mesh.png', category: 'gradient' },
    { id: 'digital-pattern-8', name: 'Color Waves', file: 'color-waves.png', category: 'gradient' },
    { id: 'digital-pattern-9', name: 'Soft Blur', file: 'soft-blur.png', category: 'gradient' },
    { id: 'digital-pattern-10', name: 'Dots Grid', file: 'dots-grid.png', category: 'minimal' },
    { id: 'digital-pattern-11', name: 'Line Pattern', file: 'line-pattern.png', category: 'minimal' },
    { id: 'digital-pattern-12', name: 'Subtle Texture', file: 'subtle-texture.png', category: 'minimal' },
    { id: 'digital-pattern-13', name: 'Particle Network', file: 'particle-network.png', category: 'tech' },
    { id: 'digital-pattern-14', name: 'Hexagon Grid', file: 'hexagon-grid.png', category: 'abstract' },
    { id: 'digital-pattern-15', name: 'Topographic', file: 'topographic.png', category: 'abstract' },
    { id: 'digital-pattern-16', name: 'Noise Texture', file: 'noise.png', category: 'minimal' }
  ],
  
  // Pattern categories
  categories: [
    { id: 'all', name: 'All Patterns' },
    { id: 'abstract', name: 'Abstract' },
    { id: 'tech', name: 'Technology' },
    { id: 'gradient', name: 'Gradients' },
    { id: 'minimal', name: 'Minimal' }
  ],
  
  // Current background settings
  settings: {
    type: 'pattern',
    pattern: 'digital-pattern.png',
    customImage: null,
    opacity: 50
  },
  
  // Get patterns by category
  getPatternsByCategory: function(categoryId) {
    if (categoryId === 'all') {
      return this.patterns;
    }
    return this.patterns.filter(pattern => pattern.category === categoryId);
  },
  
  // Get all categories
  getCategories: function() {
    return this.categories;
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
  
  // Handle custom image upload
  handleImageUpload: function(file, callback) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.settings.customImage = e.target.result;
      this.settings.type = 'custom';
      if (callback) callback(e.target.result);
    };
    reader.readAsDataURL(file);
  },
  
  // Generate CSS for current background
  generateBackgroundCSS: function() {
    const { type, pattern, customImage, opacity } = this.settings;
    
    let css = '';
    
    switch (type) {
      case 'pattern':
        css = `
body::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('images/patterns/${pattern}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: ${opacity / 100}; /* Adjusted opacity */
    z-index: -1;
}`;
        break;
        
      case 'full-image':
        css = `
body::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('images/patterns/${pattern}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: ${opacity / 100}; /* Adjusted opacity */
    z-index: -1;
}`;
        break;
        
      case 'top-image':
        css = `
body::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-image: url('images/patterns/${pattern}');
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    opacity: ${opacity / 100}; /* Adjusted opacity */
    z-index: -1;
}`;
        break;
        
      case 'custom':
        if (customImage) {
          css = `
body::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('${customImage}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: ${opacity / 100}; /* Adjusted opacity */
    z-index: -1;
}`;
        }
        break;
        
      default:
        // Default to pattern
        css = `
body::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('images/patterns/digital-pattern.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: ${opacity / 100}; /* Adjusted opacity */
    z-index: -1;
}`;
    }
    
    return css;
  }
};

// Initialize the background manager
// No initialization needed

