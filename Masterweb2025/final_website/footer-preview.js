        // Initialize footer preview
        function initializeFooterPreview() {
            const footerStyleSelect = document.getElementById('footer-style');
            const footerTextInput = document.getElementById('footer-text-input');
            const footerPreview = document.getElementById('footer-preview');
            const footerBgColor = document.getElementById('footer-bg-color');
            const footerTextColor = document.getElementById('footer-text-color');
            
            // Update footer preview when style changes
            footerStyleSelect.addEventListener('change', updateFooterPreview);
            
            // Update footer preview when text changes
            footerTextInput.addEventListener('input', updateFooterPreview);
            
            // Update footer preview when colors change
            footerBgColor.addEventListener('input', function() {
                document.getElementById('footer-bg-color-preview').style.backgroundColor = this.value;
                document.getElementById('footer-bg-color-hex').textContent = this.value;
                footerPreview.style.backgroundColor = this.value;
                updateFooterPreview();
            });
            
            footerTextColor.addEventListener('input', function() {
                document.getElementById('footer-text-color-preview').style.backgroundColor = this.value;
                document.getElementById('footer-text-color-hex').textContent = this.value;
                footerPreview.style.color = this.value;
                updateFooterPreview();
            });
            
            // Initial footer preview
            updateFooterPreview();
        }
        
        // Update footer preview
        function updateFooterPreview() {
            const footerStyleSelect = document.getElementById('footer-style');
            const footerTextInput = document.getElementById('footer-text-input');
            const footerPreview = document.getElementById('footer-preview');
            
            const selectedStyle = footerStyleSelect.value;
            const footerText = footerTextInput.value;
            
            // Get footer HTML from library
            const footerHTML = footerLibrary.generateFooterHTML(selectedStyle, footerText);
            
            // Update preview
            footerPreview.innerHTML = footerHTML;
        }

