/**
 * Page Manager for Savoury Digital Factory
 * Manages multiple pages and navigation between them
 */

const pageManager = {
  // Collection of pages
  pages: [
    {
      id: "index",
      title: "Home",
      isHome: true,
      buttons: [] // Will be populated from the main interface
    }
  ],
  
  // Current active page for editing
  currentPageId: "index",
  
  // Get page by ID
  getPage: function(id) {
    return this.pages.find(page => page.id === id) || this.pages[0];
  },
  
  // Get current page
  getCurrentPage: function() {
    return this.getPage(this.currentPageId);
  },
  
  // Get all pages
  getAllPages: function() {
    return this.pages;
  },
  
  // Add new page
  addPage: function(title) {
    // Create a sanitized ID from the title
    const id = title.toLowerCase().replace(/[^a-z0-9]/g, '-');
    
    // Check if ID already exists
    if (this.pages.some(page => page.id === id)) {
      return { success: false, message: "A page with this name already exists" };
    }
    
    // Create new page
    const newPage = {
      id: id,
      title: title,
      isHome: false,
      buttons: []
    };
    
    // Add to pages collection
    this.pages.push(newPage);
    
    // Set as current page
    this.currentPageId = id;
    
    return { success: true, page: newPage };
  },
  
  // Delete page
  deletePage: function(id) {
    // Cannot delete home page
    if (this.getPage(id).isHome) {
      return { success: false, message: "Cannot delete the home page" };
    }
    
    // Remove page
    this.pages = this.pages.filter(page => page.id !== id);
    
    // If current page was deleted, set current to home
    if (this.currentPageId === id) {
      this.currentPageId = this.pages.find(page => page.isHome).id;
    }
    
    return { success: true };
  },
  
  // Set current page
  setCurrentPage: function(id) {
    if (this.getPage(id)) {
      this.currentPageId = id;
      return true;
    }
    return false;
  },
  
  // Update page buttons
  updatePageButtons: function(id, buttons) {
    const page = this.getPage(id);
    if (page) {
      page.buttons = buttons;
      return true;
    }
    return false;
  },
  
  // Generate all pages HTML and CSS
  generateAllPages: function(generateHtmlFunc, generateCssFunc) {
    const pages = {};
    const css = generateCssFunc(); // CSS is shared across all pages
    
    // Generate HTML for each page
    this.pages.forEach(page => {
      // Store current buttons
      const currentButtons = document.querySelectorAll('.button-item');
      const buttonData = [];
      
      // Save button data
      currentButtons.forEach(button => {
        buttonData.push({
          text: button.textContent,
          color: button.style.backgroundColor,
          url: button.dataset.url || '#'
        });
      });
      
      // If this is not the current page, replace buttons with page's buttons
      if (page.id !== this.currentPageId) {
        // Clear current buttons
        const buttonGrid = document.getElementById('button-grid');
        buttonGrid.innerHTML = '';
        
        // Add page's buttons
        page.buttons.forEach((buttonInfo, index) => {
          const buttonItem = document.createElement('div');
          buttonItem.className = 'button-item';
          buttonItem.dataset.index = index;
          buttonItem.dataset.url = buttonInfo.url;
          buttonItem.style.backgroundColor = buttonInfo.color;
          buttonItem.textContent = buttonInfo.text;
          buttonGrid.appendChild(buttonItem);
        });
      }
      
      // Generate HTML for this page
      pages[page.id] = {
        html: generateHtmlFunc(page.title),
        css: css
      };
      
      // If this is not the current page, restore original buttons
      if (page.id !== this.currentPageId) {
        // Clear temporary buttons
        const buttonGrid = document.getElementById('button-grid');
        buttonGrid.innerHTML = '';
        
        // Restore original buttons
        buttonData.forEach((buttonInfo, index) => {
          const buttonItem = document.createElement('div');
          buttonItem.className = 'button-item';
          buttonItem.dataset.index = index;
          buttonItem.dataset.url = buttonInfo.url;
          buttonItem.style.backgroundColor = buttonInfo.color;
          buttonItem.textContent = buttonInfo.text;
          
          buttonItem.addEventListener('click', () => {
            document.querySelectorAll('.button-item').forEach(b => b.classList.remove('selected'));
            buttonItem.classList.add('selected');
            
            document.getElementById('button-text').value = buttonItem.textContent;
            document.getElementById('button-color').value = buttonInfo.color;
            document.getElementById('button-color-preview').style.backgroundColor = buttonInfo.color;
            document.getElementById('button-color-hex').textContent = buttonInfo.color;
            document.getElementById('button-url').value = buttonItem.dataset.url;
          });
          
          buttonGrid.appendChild(buttonItem);
        });
      }
    });
    
    return pages;
  },
  
  // Save current buttons to current page
  saveCurrentButtons: function() {
    const currentButtons = document.querySelectorAll('.button-item');
    const buttonData = [];
    
    currentButtons.forEach(button => {
      buttonData.push({
        text: button.textContent,
        color: button.style.backgroundColor,
        url: button.dataset.url || '#'
      });
    });
    
    this.updatePageButtons(this.currentPageId, buttonData);
  }
};

// Initialize the page manager
// No initialization needed

