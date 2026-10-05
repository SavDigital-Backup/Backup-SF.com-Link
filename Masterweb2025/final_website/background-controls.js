/**
 * Background Controls Initialization and Event Handlers
 */

// Initialize background controls
function initializeBackgroundControls() {
    // Background type selector
    const bgType = document.getElementById('bg-type');
    const patternSelector = document.getElementById('pattern-selector');
    const imageUpload = document.getElementById('image-upload');
    
    // Pattern categories
    const patternCategories = document.querySelectorAll('.pattern-category');
    
    // Background opacity
    const bgOpacity = document.getElementById('bg-opacity');
    
    // Background color
    const bgColor = document.getElementById('bg-color');
    
    // Custom image upload
    const bgImageUpload = document.getElementById('bg-image-upload');
    const customImagePreview = document.getElementById('custom-image-preview');
    const customImagePreviewImg = document.getElementById('custom-image-preview-img');
    
    // Populate patterns
    function populatePatterns(categoryId) {
        const patternGrid = document.getElementById('pattern-grid');
        patternGrid.innerHTML = '';
        
        const patterns = backgroundManager.getPatternsByCategory(categoryId);
        
        patterns.forEach(pattern => {
            const patternItem = document.createElement('div');
            patternItem.className = 'pattern-item';
            patternItem.dataset.pattern = pattern.file;
            
            // Check if this is the currently selected pattern
            if (pattern.file === backgroundManager.getSettings().pattern) {
                patternItem.classList.add('selected');
            }
            
            patternItem.innerHTML = `
                <img src="images/patterns/${pattern.file}" alt="${pattern.name}">
                <div class="pattern-name">${pattern.name}</div>
            `;
            
            patternItem.addEventListener('click', () => {
                document.querySelectorAll('.pattern-item').forEach(item => {
                    item.classList.remove('selected');
                });
                patternItem.classList.add('selected');
                
                // Update background manager
                backgroundManager.updateSettings({
                    type: 'pattern',
                    pattern: pattern.file
                });
                
                // Update preview
                updatePreview();
            });
            
            patternGrid.appendChild(patternItem);
        });
    }
    
    // Background type change
    bgType.addEventListener('change', () => {
        const type = bgType.value;
        
        // Show/hide appropriate sections
        if (type === 'pattern' || type === 'full-image' || type === 'top-image') {
            patternSelector.style.display = 'block';
            imageUpload.style.display = 'none';
        } else if (type === 'custom') {
            patternSelector.style.display = 'none';
            imageUpload.style.display = 'block';
        }
        
        // Update background manager
        backgroundManager.updateSettings({
            type: type
        });
        
        // Update preview
        updatePreview();
    });
    
    // Pattern category change
    patternCategories.forEach(category => {
        category.addEventListener('click', () => {
            patternCategories.forEach(c => c.classList.remove('active'));
            category.classList.add('active');
            
            // Populate patterns for this category
            populatePatterns(category.dataset.category);
        });
    });
    
    // Background opacity change
    bgOpacity.addEventListener('input', () => {
        // Update background manager
        backgroundManager.updateSettings({
            opacity: parseInt(bgOpacity.value)
        });
        
        // Update preview
        updatePreview();
    });
    
    // Background color change
    bgColor.addEventListener('input', function() {
        document.getElementById('bg-color-preview').style.backgroundColor = this.value;
        document.getElementById('bg-color-hex').textContent = this.value;
        
        // Update preview
        updatePreview();
    });
    
    // Custom image upload
    bgImageUpload.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            // Handle image upload
            backgroundManager.handleImageUpload(this.files[0], (dataUrl) => {
                // Show preview
                customImagePreview.style.display = 'block';
                customImagePreviewImg.src = dataUrl;
                
                // Update preview
                updatePreview();
            });
        }
    });
    
    // Initial population of patterns
    populatePatterns('all');
}

// Call this function from the main initialization
// initializeBackgroundControls();

