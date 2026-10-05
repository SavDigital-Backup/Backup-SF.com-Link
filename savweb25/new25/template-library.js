/**
 * Template Library for Savoury Digital Factory
 * Contains 10+ templates with different styles
 */

const templateLibrary = {
  // Collection of templates
  templates: [
    {
      id: "default",
      name: "Default",
      description: "The default blue digital theme",
      preview: "template-default.png",
      colors: {
        primary: "#001440",
        secondary: "#0055cc",
        accent: "#00b8f0",
        light: "#f5f8ff",
        dark: "#333333"
      },
      styles: {
        fontFamily: "'Inter', sans-serif",
        buttonRadius: "0.5rem",
        buttonSpacing: "1rem",
        backgroundOpacity: 0.5,
        backgroundPattern: "digital-pattern.png"
      }
    },
    {
      id: "dark",
      name: "Dark Mode",
      description: "Sleek dark theme with vibrant accents",
      preview: "template-dark.png",
      colors: {
        primary: "#121212",
        secondary: "#2d2d2d",
        accent: "#7b68ee",
        light: "#f8f8f8",
        dark: "#0a0a0a"
      },
      styles: {
        fontFamily: "'Inter', sans-serif",
        buttonRadius: "0.5rem",
        buttonSpacing: "1rem",
        backgroundOpacity: 0.3,
        backgroundPattern: "digital-pattern-dark.png"
      }
    },
    {
      id: "light",
      name: "Light Mode",
      description: "Clean light theme with subtle accents",
      preview: "template-light.png",
      colors: {
        primary: "#ffffff",
        secondary: "#f0f0f0",
        accent: "#3498db",
        light: "#ffffff",
        dark: "#333333"
      },
      styles: {
        fontFamily: "'Inter', sans-serif",
        buttonRadius: "0.5rem",
        buttonSpacing: "1rem",
        backgroundOpacity: 0.2,
        backgroundPattern: "digital-pattern-light.png"
      }
    },
    {
      id: "gradient",
      name: "Gradient",
      description: "Modern gradient theme with smooth transitions",
      preview: "template-gradient.png",
      colors: {
        primary: "#4158D0",
        secondary: "#C850C0",
        accent: "#FFCC70",
        light: "#ffffff",
        dark: "#333333"
      },
      styles: {
        fontFamily: "'Inter', sans-serif",
        buttonRadius: "1rem",
        buttonSpacing: "1.2rem",
        backgroundOpacity: 0.7,
        backgroundPattern: "gradient-pattern.png",
        gradientBackground: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"
      }
    },
    {
      id: "corporate",
      name: "Corporate",
      description: "Professional corporate theme with clean lines",
      preview: "template-corporate.png",
      colors: {
        primary: "#1a5276",
        secondary: "#2874a6",
        accent: "#3498db",
        light: "#ecf0f1",
        dark: "#2c3e50"
      },
      styles: {
        fontFamily: "'Inter', sans-serif",
        buttonRadius: "0.25rem",
        buttonSpacing: "0.8rem",
        backgroundOpacity: 0.1,
        backgroundPattern: "corporate-pattern.png"
      }
    },
    {
      id: "tech",
      name: "Tech",
      description: "Futuristic tech theme with neon accents",
      preview: "template-tech.png",
      colors: {
        primary: "#0c0c14",
        secondary: "#1a1a2e",
        accent: "#00ff9f",
        light: "#e6e6e6",
        dark: "#0c0c14"
      },
      styles: {
        fontFamily: "'Inter', sans-serif",
        buttonRadius: "0rem",
        buttonSpacing: "1rem",
        backgroundOpacity: 0.6,
        backgroundPattern: "tech-pattern.png"
      }
    },
    {
      id: "minimal",
      name: "Minimal",
      description: "Clean minimal design with focus on content",
      preview: "template-minimal.png",
      colors: {
        primary: "#ffffff",
        secondary: "#f8f9fa",
        accent: "#212529",
        light: "#ffffff",
        dark: "#212529"
      },
      styles: {
        fontFamily: "'Inter', sans-serif",
        buttonRadius: "0.25rem",
        buttonSpacing: "1.5rem",
        backgroundOpacity: 0,
        backgroundPattern: "none"
      }
    },
    {
      id: "vibrant",
      name: "Vibrant",
      description: "Colorful and energetic theme",
      preview: "template-vibrant.png",
      colors: {
        primary: "#6200ea",
        secondary: "#9d46ff",
        accent: "#00e5ff",
        light: "#ffffff",
        dark: "#37474f"
      },
      styles: {
        fontFamily: "'Inter', sans-serif",
        buttonRadius: "1.5rem",
        buttonSpacing: "1rem",
        backgroundOpacity: 0.4,
        backgroundPattern: "vibrant-pattern.png"
      }
    },
    {
      id: "retro",
      name: "Retro",
      description: "Vintage-inspired design with retro colors",
      preview: "template-retro.png",
      colors: {
        primary: "#264653",
        secondary: "#2a9d8f",
        accent: "#e9c46a",
        light: "#f4f1de",
        dark: "#264653"
      },
      styles: {
        fontFamily: "'Inter', sans-serif",
        buttonRadius: "0.5rem",
        buttonSpacing: "1.2rem",
        backgroundOpacity: 0.3,
        backgroundPattern: "retro-pattern.png"
      }
    },
    {
      id: "nature",
      name: "Nature",
      description: "Organic theme inspired by natural elements",
      preview: "template-nature.png",
      colors: {
        primary: "#2d6a4f",
        secondary: "#40916c",
        accent: "#74c69d",
        light: "#d8f3dc",
        dark: "#1b4332"
      },
      styles: {
        fontFamily: "'Inter', sans-serif",
        buttonRadius: "0.75rem",
        buttonSpacing: "1rem",
        backgroundOpacity: 0.2,
        backgroundPattern: "nature-pattern.png"
      }
    },
    {
      id: "modern",
      name: "Modern",
      description: "Contemporary design with bold elements",
      preview: "template-modern.png",
      colors: {
        primary: "#212121",
        secondary: "#424242",
        accent: "#ff5722",
        light: "#fafafa",
        dark: "#212121"
      },
      styles: {
        fontFamily: "'Inter', sans-serif",
        buttonRadius: "0.5rem",
        buttonSpacing: "1.2rem",
        backgroundOpacity: 0.1,
        backgroundPattern: "modern-pattern.png"
      }
    },
    {
      id: "pastel",
      name: "Pastel",
      description: "Soft pastel colors for a gentle appearance",
      preview: "template-pastel.png",
      colors: {
        primary: "#f8edeb",
        secondary: "#fcd5ce",
        accent: "#f8ad9d",
        light: "#ffffff",
        dark: "#4a4e69"
      },
      styles: {
        fontFamily: "'Inter', sans-serif",
        buttonRadius: "1rem",
        buttonSpacing: "1rem",
        backgroundOpacity: 0.3,
        backgroundPattern: "pastel-pattern.png"
      }
    }
  ],
  
  // Get template by ID
  getTemplate: function(id) {
    return this.templates.find(template => template.id === id) || this.templates[0];
  },
  
  // Get all templates
  getAllTemplates: function() {
    return this.templates;
  },
  
  // Apply template to CSS
  applyTemplateToCSS: function(templateId, css) {
    const template = this.getTemplate(templateId);
    
    // Replace color variables
    css = css.replace(/--primary: #[0-9a-f]{6};/i, `--primary: ${template.colors.primary};`);
    css = css.replace(/--secondary: #[0-9a-f]{6};/i, `--secondary: ${template.colors.secondary};`);
    css = css.replace(/--accent: #[0-9a-f]{6};/i, `--accent: ${template.colors.accent};`);
    css = css.replace(/--light: #[0-9a-f]{6};/i, `--light: ${template.colors.light};`);
    css = css.replace(/--dark: #[0-9a-f]{6};/i, `--dark: ${template.colors.dark};`);
    
    // Replace style variables
    css = css.replace(/font-family: '[^']+';/i, `font-family: ${template.styles.fontFamily};`);
    css = css.replace(/--radius-md: [0-9.]+rem;/i, `--radius-md: ${template.styles.buttonRadius};`);
    css = css.replace(/--spacing-md: [0-9.]+rem;/i, `--spacing-md: ${template.styles.buttonSpacing};`);
    
    // Replace background pattern and opacity
    if (template.styles.backgroundPattern !== 'none') {
      css = css.replace(/background-image: url\('[^']+'\);/i, `background-image: url('images/${template.styles.backgroundPattern}');`);
      css = css.replace(/opacity: [0-9.]+;/i, `opacity: ${template.styles.backgroundOpacity};`);
    }
    
    // Add gradient background if present
    if (template.styles.gradientBackground) {
      css = css.replace(/background-color: var\(--primary\);/i, `background: ${template.styles.gradientBackground};`);
    }
    
    return css;
  }
};

// Create placeholder template preview images
function createTemplatePreviews() {
  // This function would generate preview images for each template
  // In a real implementation, this would create actual images
  console.log("Template previews would be generated here");
}

// Initialize the template library
createTemplatePreviews();

