/**
 * Layout Manager Initialization and Event Handlers
 */

// Initialize layout controls
function initializeLayoutControls() {
    // Grid layout controls
    const gridControls = document.querySelectorAll('.grid-control');
    gridControls.forEach(control => {
        control.addEventListener('click', () => {
            gridControls.forEach(c => c.classList.remove('active'));
            control.classList.add('active');
            
            // Update layout manager
            layoutManager.updateSettings({
                gridLayout: control.dataset.grid
            });
            
            // Update preview
            updatePreview();
        });
    });
    
    // Layout type controls
    const layoutTypeControls = document.querySelectorAll('.layout-type-control');
    layoutTypeControls.forEach(control => {
        control.addEventListener('click', () => {
            layoutTypeControls.forEach(c => c.classList.remove('active'));
            control.classList.add('active');
            
            // Update layout manager
            layoutManager.updateSettings({
                layoutType: control.dataset.layoutType
            });
            
            // Update preview
            updatePreview();
        });
    });
    
    // Button spacing
    const buttonSpacing = document.getElementById('button-spacing');
    buttonSpacing.addEventListener('input', () => {
        // Update layout manager
        layoutManager.updateSettings({
            buttonSpacing: parseInt(buttonSpacing.value)
        });
        
        // Update preview
        updatePreview();
    });
    
    // Advanced spacing controls
    const horizontalGap = document.getElementById('horizontal-gap');
    const verticalGap = document.getElementById('vertical-gap');
    const buttonPadding = document.getElementById('button-padding');
    
    horizontalGap.addEventListener('input', () => {
        document.getElementById('horizontal-gap-value').textContent = horizontalGap.value;
        
        // Update layout manager
        layoutManager.updateSettings({
            horizontalGap: parseInt(horizontalGap.value)
        });
        
        // Update preview
        updatePreview();
    });
    
    verticalGap.addEventListener('input', () => {
        document.getElementById('vertical-gap-value').textContent = verticalGap.value;
        
        // Update layout manager
        layoutManager.updateSettings({
            verticalGap: parseInt(verticalGap.value)
        });
        
        // Update preview
        updatePreview();
    });
    
    buttonPadding.addEventListener('input', () => {
        document.getElementById('button-padding-value').textContent = buttonPadding.value;
        
        // Update layout manager
        layoutManager.updateSettings({
            buttonPadding: parseInt(buttonPadding.value)
        });
        
        // Update preview
        updatePreview();
    });
    
    // Responsive behavior
    const responsiveBehavior = document.getElementById('responsive-behavior');
    responsiveBehavior.addEventListener('change', () => {
        // Update layout manager
        layoutManager.updateSettings({
            responsiveBehavior: responsiveBehavior.value
        });
        
        // Update preview
        updatePreview();
    });
}

// Call this function from the main initialization
// initializeLayoutControls();

