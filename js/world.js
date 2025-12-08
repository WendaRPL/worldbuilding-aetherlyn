// Main Website JavaScript
const MainApp = (function() {
    // Elements
    let hamburger = null;
    let navLinks = null;
    let cursorDot = null;
    let cursorOutline = null;
    let isCursorInitialized = false;
    
    // Initialize
    function init() {
        console.log('MainApp initialized');
        cacheElements();
        bindEvents();
        initCustomCursor(); 
        initDropdowns();
    }
    
    // === DROPDOWNS ===
function initDropdowns() {
    console.log('Initializing dropdowns');

    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            // Mobile-only behavior
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();

                const dropdown = this.closest('.dropdown');
                const isActive = dropdown.classList.contains('active');

                // Close other dropdowns
                dropdowns.forEach(d => {
                    if (d !== dropdown) d.classList.remove('active');
                });

                dropdown.classList.toggle('active');
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    // ESC key to close dropdowns
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    // Desktop hover support
    if (window.innerWidth > 768) {
        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('mouseenter', function() {
                this.classList.add('active');
            });

            dropdown.addEventListener('mouseleave', function() {
                this.classList.remove('active');
            });
        });
    }
}

    // Initialize custom cursor
    function initCustomCursor() {
        if (isCursorInitialized) {
            console.log('Cursor already initialized');
            return;
        }
        
        cursorDot = document.querySelector('.cursor-dot');
        cursorOutline = document.querySelector('.cursor-outline');
        
        if (!cursorDot || !cursorOutline) {
            console.warn('Cursor elements not found, will retry...');
            setTimeout(() => {
                cursorDot = document.querySelector('.cursor-dot');
                cursorOutline = document.querySelector('.cursor-outline');
                if (cursorDot && cursorOutline) {
                    setupCursor();
                }
            }, 500);
            return;
        }
        
        setupCursor();
    }
    
    // Setup cursor functionality
    function setupCursor() {
        console.log('Setting up custom cursor');
        
        cursorDot.style.opacity = '1';
        cursorOutline.style.opacity = '0.5';
        document.body.style.cursor = 'none';
        
        document.addEventListener('mousemove', handleMouseMove);
        
        const interactiveElements = 'a, button, .cta-button, .portal-card, .nav-links a, input, textarea, .location-card, .filter-btn';
        document.querySelectorAll(interactiveElements).forEach(el => {
            el.addEventListener('mouseenter', handleElementHover);
            el.addEventListener('mouseleave', handleElementLeave);
        });
        
        isCursorInitialized = true;
        console.log('Custom cursor setup complete');
    }
    
    // Handle mouse movement
    function handleMouseMove(e) {
        if (!cursorDot || !cursorOutline) return;
        
        const posX = e.clientX;
        const posY = e.clientY;
        
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        cursorOutline.style.transition = 'left 0.1s ease-out, top 0.1s ease-out';
        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
    }
    
    // Handle element hover
    function handleElementHover() {
        if (!cursorOutline) return;
        
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorOutline.style.backgroundColor = 'rgba(76, 201, 240, 0.15)';
        cursorOutline.style.borderColor = 'var(--accent-primary)';
        cursorOutline.style.opacity = '0.8';
    }
    
    // Handle element leave
    function handleElementLeave() {
        if (!cursorOutline) return;
        
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.backgroundColor = '';
        cursorOutline.style.borderColor = 'var(--accent-primary)';
        cursorOutline.style.opacity = '0.5';
    }
    
    // Cache DOM elements
    function cacheElements() {
        hamburger = document.querySelector('.hamburger');
        navLinks = document.querySelector('.nav-links');
    }
    
    // Bind event listeners
    function bindEvents() {
        console.log('Binding events');
        
        // Mobile navigation
        if (hamburger && navLinks) {
            hamburger.addEventListener('click', toggleMobileMenu);
            
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', closeMobileMenu);
            });
        }

            // Modified: Handle dropdown toggle clicks
        document.querySelectorAll('.nav-links a').forEach(link => {
            if (link.classList.contains('dropdown-toggle')) {
                // Let initDropdowns() handle dropdown toggles
                return;
            }
            link.addEventListener('click', closeMobileMenu);
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideSidebar = event.target.closest('.nav-links');
            const isClickOnHamburger = event.target.closest('.hamburger');
            
            if (!isClickInsideSidebar && !isClickOnHamburger && navLinks.classList.contains('active')) {
                closeMobileMenu();
            }
        });
        
        // ESC key to close mobile menu
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                closeMobileMenu();
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', handleSmoothScroll);
        });
        
        // Portal card hover effects
        document.querySelectorAll('.portal-card').forEach(card => {
            card.addEventListener('mouseenter', handlePortalCardHover);
            card.addEventListener('mouseleave', handlePortalCardLeave);
        });
        
        // CTA button hover effects
        document.querySelectorAll('.cta-button').forEach(button => {
            button.addEventListener('mouseenter', handleCtaButtonHover);
            button.addEventListener('mouseleave', handleCtaButtonLeave);
        });
    }
    
    // Mobile menu functions
    function toggleMobileMenu() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    }
    
    function closeMobileMenu() {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
    
    // Smooth scroll handling
    function handleSmoothScroll(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    }
    
    // Portal card hover effects
    function handlePortalCardHover() {
        const icon = this.querySelector('.portal-icon i');
        if (icon) {
            icon.style.transition = 'transform 0.3s ease';
            icon.style.transform = 'scale(1.2) rotate(5deg)';
        }
    }
    
    function handlePortalCardLeave() {
        const icon = this.querySelector('.portal-icon i');
        if (icon) {
            icon.style.transform = '';
        }
    }
    
    // CTA button hover effects
    function handleCtaButtonHover() {
        const icon = this.querySelector('i');
        if (icon) {
            icon.style.transform = 'translateX(5px)';
        }
    }
    
    function handleCtaButtonLeave() {
        const icon = this.querySelector('i');
        if (icon) {
            icon.style.transform = '';
        }
    }
    
    // Handle window resize
    function handleWindowResize() {
        if (window.innerWidth <= 768) {
            if (cursorDot) cursorDot.style.display = 'none';
            if (cursorOutline) cursorOutline.style.display = 'none';
            document.body.style.cursor = 'auto';
            document.removeEventListener('mousemove', handleMouseMove);
        } else {
            if (cursorDot && cursorOutline && isCursorInitialized) {
                cursorDot.style.display = 'block';
                cursorOutline.style.display = 'block';
                document.body.style.cursor = 'none';
                document.addEventListener('mousemove', handleMouseMove);
            }
        }
    }
    
    // Public API
    return {
        init: init,
        initCustomCursor: initCustomCursor,
        toggleMobileMenu: toggleMobileMenu,
        closeMobileMenu: closeMobileMenu,
        handleWindowResize: handleWindowResize,
        handleElementHover: handleElementHover,
        handleElementLeave: handleElementLeave
    };
})();

// ===== WORLDBUILDING APP =====
const WorldbuildingApp = (function() {
    // State
    let currentLocations = [];
    let currentFilter = 'all';
    let currentSort = 'name-asc';
    let currentSearch = '';
    
    // Elements
    const elements = {
        grid: null,
        filterButtons: null,
        searchInput: null,
        sortSelect: null,
        showingCount: null,
        totalCount: null,
        loadingState: null,
        emptyState: null,
        resetButton: null
    };
    
    // Initialize
    function init() {
        console.log('WorldbuildingApp initializing...');
        console.log('WorldLocations available:', !!window.WorldLocations);
        
        cacheElements();
        setupEventListeners();
        loadLocations();
        updateUI();
    }
    
    // Cache DOM elements
    function cacheElements() {
        elements.grid = document.getElementById('locationsGrid');
        elements.filterButtons = document.querySelectorAll('.filter-btn');
        elements.searchInput = document.getElementById('locationSearch');
        elements.sortSelect = document.getElementById('sortSelect');
        elements.showingCount = document.getElementById('showingCount');
        elements.totalCount = document.getElementById('totalCount');
        elements.loadingState = document.getElementById('loadingState');
        elements.emptyState = document.getElementById('emptyState');
        elements.resetButton = document.getElementById('resetFilters');
    }
    
    // Load locations from data
    function loadLocations() {
        showLoading();
        
        setTimeout(() => {
            console.log('🔄 Loading locations data...');
            
            // Check if WorldLocations exists
            if (!window.WorldLocations) {
                console.error('❌ WorldLocations is not defined!');
                showErrorMessage('WorldLocations data not loaded. Check console.');
                hideLoading();
                return;
            }
            
            // Get all locations with safety check
            let allLocations = [];
            try {
                allLocations = WorldLocations.getAllLocations();
                console.log('Raw locations:', allLocations);
            } catch (error) {
                console.error('Error getting locations:', error);
                showErrorMessage('Error loading location data: ' + error.message);
                hideLoading();
                return;
            }
            
            // Filter out invalid locations
            currentLocations = allLocations.filter(loc => {
                if (!loc || typeof loc !== 'object') {
                    console.warn('Removing invalid location:', loc);
                    return false;
                }
                if (!loc.name) {
                    console.warn('Location missing name:', loc);
                    loc.name = `Location ${loc.id || 'Unknown'}`;
                }
                return true;
            });
            
            console.log(`✅ Loaded ${currentLocations.length} valid locations`);
            
            updateTotalCount();
            renderLocations();
            hideLoading();
        }, 500);
    }
    
    // Render locations to grid
    function renderLocations() {
        if (!elements.grid) {
            console.error('Grid element not found');
            return;
        }
        
        // Filter locations
        let filtered = filterLocations();
        
        // Sort locations
        filtered = sortLocations(filtered);
        
        // Update showing count
        if (elements.showingCount) {
            elements.showingCount.textContent = filtered.length;
        }
        
        // Clear grid
        elements.grid.innerHTML = '';
        
        // Show empty state if no results
        if (filtered.length === 0) {
            showEmptyState();
            return;
        }
        
        // Hide empty state
        hideEmptyState();
        
        // Create and append cards
        filtered.forEach(location => {
            try {
                const card = createLocationCard(location);
                if (card) {
                    elements.grid.appendChild(card);
                }
            } catch (error) {
                console.error('Error creating card for location:', location, error);
                // Add error card instead
                const errorCard = createErrorCard(location?.id || 'Unknown', error.message);
                elements.grid.appendChild(errorCard);
            }
        });
    }
    
    // Create a single location card element - FIXED VERSION
    function createLocationCard(location) {
        // SAFETY CHECK: Ensure location is valid
        if (!location || typeof location !== 'object') {
            console.error('Invalid location passed to createLocationCard:', location);
            return createErrorCard('Invalid', 'Location data is invalid');
        }
        
        // Create safe location object with defaults
        const safeLoc = {
            id: location.id || 0,
            name: location.name || 'Unknown Location',
            category: location.category || 'others',
            governingBody: location.governingBody || 'Unknown Authority',
            description: location.description || 'No description available.',
            features: Array.isArray(location.features) ? location.features : ['Mysterious'],
            danger: location.danger || 'low',
            magic: location.magic || 'medium',
            activity: typeof location.activity === 'number' ? Math.min(100, Math.max(0, location.activity)) : 50,
            exploration: typeof location.exploration === 'number' ? Math.min(100, Math.max(0, location.exploration)) : 50,
            members: typeof location.members === 'number' ? location.members : 100,
            discovered: location.discovered || '2023-01-01'
        };
        
        // Get category, danger, magic with fallbacks
        const category = (WorldLocations.categories && WorldLocations.categories[safeLoc.category]) || {
            name: 'Unknown',
            icon: 'fa-star',
            color: 'category-others'
        };
        
        const danger = (WorldLocations.dangerLevels && WorldLocations.dangerLevels[safeLoc.danger]) || {
            name: 'Low',
            color: '#2ecc71',
            order: 1
        };
        
        const magic = (WorldLocations.magicLevels && WorldLocations.magicLevels[safeLoc.magic]) || {
            name: 'Medium',
            color: '#9b59b6',
            order: 3
        };
        
        // Format date safely
        let formattedDate = 'Unknown';
        try {
            const discoveredDate = new Date(safeLoc.discovered);
            if (!isNaN(discoveredDate.getTime())) {
                formattedDate = discoveredDate.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                });
            }
        } catch (e) {
            console.warn('Invalid date format:', safeLoc.discovered);
        }
        
        // Determine activity and exploration classes
        const activityClass = safeLoc.activity > 70 ? 'high' : safeLoc.activity > 40 ? 'medium' : 'low';
        const explorationClass = safeLoc.exploration > 70 ? 'high' : safeLoc.exploration > 40 ? 'medium' : 'low';
        
        // Create card element
        const card = document.createElement('div');
        card.className = 'location-card';
        card.dataset.locationId = safeLoc.id;
        card.dataset.category = safeLoc.category;
        
        // Set inner HTML
        card.innerHTML = `
            <div class="card-header ${category.color || 'category-others'}">
                <div class="card-badge">
                    <span class="category-tag">
                        <i class="fas ${category.icon || 'fa-star'}"></i> ${category.name}
                    </span>
                    <span class="danger-badge">
                        <i class="fas fa-skull-crossbones"></i> ${danger.name} Danger
                    </span>
                </div>
                <h3 class="card-title">${safeLoc.name}</h3>
                <div class="card-subtitle">
                    <i class="fas fa-crown"></i> ${safeLoc.governingBody}
                </div>
            </div>
            
            <div class="card-body">
                <p class="card-description">${safeLoc.description}</p>
                
                <div class="card-features">
                    ${safeLoc.features.map(feature => `
                        <span class="feature-tag">
                            <i class="fas fa-star"></i> ${feature}
                        </span>
                    `).join('')}
                </div>
                
                <div class="card-stats">
                    <div class="stat-row">
                        <span class="stat-label">Activity</span>
                        <div class="stat-bar">
                            <div class="stat-fill ${activityClass}" style="width: ${safeLoc.activity}%"></div>
                        </div>
                        <span class="stat-value">${safeLoc.activity}%</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">Exploration</span>
                        <div class="stat-bar">
                            <div class="stat-fill ${explorationClass}" style="width: ${safeLoc.exploration}%"></div>
                        </div>
                        <span class="stat-value">${safeLoc.exploration}%</span>
                    </div>
                </div>
            </div>
            
            <div class="card-footer">
                <div class="member-count">
                    <i class="fas fa-user-friends"></i> ${safeLoc.members.toLocaleString()} active
                </div>
            </div>
        `;
        
        
        // Add hover effects for custom cursor
        card.addEventListener('mouseenter', () => {
            if (window.MainApp && window.MainApp.handleElementHover) {
                window.MainApp.handleElementHover.call(card);
            }
        });
        
        card.addEventListener('mouseleave', () => {
            if (window.MainApp && window.MainApp.handleElementLeave) {
                window.MainApp.handleElementLeave.call(card);
            }
        });
        
        return card;
    }
    
    // Create error card
    function createErrorCard(id, message) {
        const card = document.createElement('div');
        card.className = 'location-card error-card';
        card.innerHTML = `
            <div class="card-header category-others">
                <h3>⚠️ Error Loading Location</h3>
            </div>
            <div class="card-body">
                <p>ID: ${id}</p>
                <p>${message || 'Unknown error'}</p>
                <p>Please check the console for details.</p>
            </div>
        `;
        return card;
    }
    
    // Filter locations based on current state
    function filterLocations() {
        if (!currentLocations || !currentLocations.length) {
            return [];
        }
        
        let filtered = [...currentLocations];
        
        // Apply category filter
        if (currentFilter !== 'all') {
            filtered = filtered.filter(loc => loc.category === currentFilter);
        }
        
        // Apply search filter
        if (currentSearch.trim() !== '') {
            const searchTerm = currentSearch.toLowerCase();
            filtered = filtered.filter(loc => 
                (loc.name && loc.name.toLowerCase().includes(searchTerm)) ||
                (loc.description && loc.description.toLowerCase().includes(searchTerm)) ||
                (loc.governingBody && loc.governingBody.toLowerCase().includes(searchTerm)) ||
                (Array.isArray(loc.features) && loc.features.some(f => f.toLowerCase().includes(searchTerm)))
            );
        }
        
        return filtered;
    }
    
    // Sort locations
    function sortLocations(locations) {
        if (!locations || !locations.length) return [];
        
        const sorted = [...locations];
        
        switch(currentSort) {
            case 'name-asc':
                return sorted.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
            case 'name-desc':
                return sorted.sort((a, b) => (b.name || '').localeCompare(a.name || ''));
            case 'danger-desc':
                return sorted.sort((a, b) => {
                    const aOrder = WorldLocations.dangerLevels?.[a.danger]?.order || 1;
                    const bOrder = WorldLocations.dangerLevels?.[b.danger]?.order || 1;
                    return bOrder - aOrder;
                });
            case 'danger-asc':
                return sorted.sort((a, b) => {
                    const aOrder = WorldLocations.dangerLevels?.[a.danger]?.order || 1;
                    const bOrder = WorldLocations.dangerLevels?.[b.danger]?.order || 1;
                    return aOrder - bOrder;
                });
            case 'magic-desc':
                return sorted.sort((a, b) => {
                    const aOrder = WorldLocations.magicLevels?.[a.magic]?.order || 1;
                    const bOrder = WorldLocations.magicLevels?.[b.magic]?.order || 1;
                    return bOrder - aOrder;
                });
            case 'members-desc':
                return sorted.sort((a, b) => (b.members || 0) - (a.members || 0));
            default:
                return sorted;
        }
    }
    
    // Handle filter button clicks
    function setupEventListeners() {
        // Filter buttons
        if (elements.filterButtons) {
            elements.filterButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    elements.filterButtons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    currentFilter = btn.dataset.filter;
                    applyFilters();
                });
            });
        }
        
        // Search input
        if (elements.searchInput) {
            elements.searchInput.addEventListener('input', (e) => {
                currentSearch = e.target.value;
                applyFilters();
            });
        }
        
        // Sort select
        if (elements.sortSelect) {
            elements.sortSelect.addEventListener('change', (e) => {
                currentSort = e.target.value;
                applyFilters();
            });
        }
        
        // Reset button
        if (elements.resetButton) {
            elements.resetButton.addEventListener('click', resetFilters);
        }
    }
    
    // Apply all filters and re-render
    function applyFilters() {
        renderLocations();
        updateUI();
    }
    
    // Reset all filters
    function resetFilters() {
        // Reset filter buttons
        if (elements.filterButtons) {
            elements.filterButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.filter === 'all') {
                    btn.classList.add('active');
                }
            });
        }
        
        // Reset search
        if (elements.searchInput) {
            elements.searchInput.value = '';
        }
        
        // Reset sort
        if (elements.sortSelect) {
            elements.sortSelect.value = 'name-asc';
        }
        
        // Reset state
        currentFilter = 'all';
        currentSearch = '';
        currentSort = 'name-asc';
        
        // Re-render
        applyFilters();
    }
    
    // Handle visit location click
    function handleVisitLocation(locationId) {
        let location;
        try {
            location = WorldLocations.getLocationById?.(locationId);
        } catch (error) {
            console.error('Error getting location:', error);
            location = null;
        }
        
        if (location) {
            alert(`Entering ${location.name}...\n\nThis would typically redirect to the group chat for this location.`);
        } else {
            alert(`Location ID ${locationId} not found.\n\nThis would typically show an error or redirect to a default page.`);
        }
    }
    
    // Update UI elements
    function updateUI() {
        updateTotalCount();
    }
    
    // Update total count
    function updateTotalCount() {
        if (elements.totalCount && WorldLocations) {
            try {
                const allLocations = WorldLocations.getAllLocations();
                elements.totalCount.textContent = allLocations.length;
            } catch (error) {
                console.error('Error updating total count:', error);
                elements.totalCount.textContent = '0';
            }
        }
    }
    
    // Show loading state
    function showLoading() {
        if (elements.loadingState) {
            elements.loadingState.style.display = 'block';
        }
        if (elements.grid) {
            elements.grid.style.opacity = '0.5';
        }
    }
    
    // Hide loading state
    function hideLoading() {
        if (elements.loadingState) {
            elements.loadingState.style.display = 'none';
        }
        if (elements.grid) {
            elements.grid.style.opacity = '1';
        }
    }
    
    // Show empty state
    function showEmptyState() {
        if (elements.emptyState) {
            elements.emptyState.style.display = 'block';
        }
        if (elements.grid) {
            elements.grid.style.display = 'none';
        }
    }
    
    // Hide empty state
    function hideEmptyState() {
        if (elements.emptyState) {
            elements.emptyState.style.display = 'none';
        }
        if (elements.grid) {
            elements.grid.style.display = 'grid';
        }
    }
    
    // Show error message
    function showErrorMessage(message) {
        if (elements.grid) {
            elements.grid.innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h3>Data Loading Error</h3>
                    <p>${message}</p>
                    <button onclick="location.reload()" class="cta-button primary">
                        <i class="fas fa-redo"></i> Reload Page
                    </button>
                </div>
            `;
        }
    }
    
    // Public API
    return {
        init: init,
        getCurrentLocations: () => currentLocations,
        refreshLocations: loadLocations,
        createLocationCard: createLocationCard // Expose for debugging
    };
})();

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing apps...');
    
    // Remove loading class if exists
    document.body.classList.remove('loading');
    
    // Initialize MainApp
    if (window.MainApp) {
        MainApp.init();
        
        // Handle window resize
        window.addEventListener('resize', MainApp.handleWindowResize);
        
        // Initial resize check
        setTimeout(() => {
            MainApp.handleWindowResize();
        }, 100);
    }
    
    // Initialize WorldbuildingApp with safety delay
    setTimeout(() => {
        console.log('Checking WorldLocations for WorldbuildingApp...');
        
        if (!window.WorldLocations) {
            console.warn('WorldLocations not yet available, waiting...');
            // Try again in 500ms
            setTimeout(() => {
                if (window.WorldLocations && window.WorldbuildingApp) {
                    console.log('WorldLocations now available, initializing WorldbuildingApp');
                    WorldbuildingApp.init();
                } else {
                    console.error('WorldLocations still not available after delay');
                }
            }, 500);
        } else if (window.WorldbuildingApp) {
            console.log('WorldLocations available, initializing WorldbuildingApp');
            WorldbuildingApp.init();
        }
    }, 100);
});

// Scroll animations
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.portal-card, .welcome-content, .location-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

// Set initial styles for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.portal-card, .welcome-content, .location-card');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
});

// Debug helpers
window.debugCursor = {
    enable: () => {
        if (window.MainApp && typeof window.MainApp.initCustomCursor === 'function') {
            window.MainApp.initCustomCursor();
            console.log('Cursor manually enabled');
        }
    },
    disable: () => {
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        if (cursorDot) cursorDot.style.display = 'none';
        if (cursorOutline) cursorOutline.style.display = 'none';
        document.body.style.cursor = 'auto';
        console.log('Cursor manually disabled');
    }
};

window.debugWorldbuilding = {
    checkData: () => {
        console.log('=== WORLDBUILDING DEBUG ===');
        console.log('WorldLocations:', window.WorldLocations);
        console.log('Locations count:', window.WorldLocations?.locations?.length);
        console.log('First location:', window.WorldLocations?.locations?.[0]);
        console.log('WorldbuildingApp:', window.WorldbuildingApp);
        
        if (window.WorldLocations?.locations) {
            const badLocations = window.WorldLocations.locations.filter((loc, idx) => 
                !loc || typeof loc !== 'object' || !loc.name
            );
            if (badLocations.length > 0) {
                console.error('Bad locations found:', badLocations);
            }
        }
    },
    testCard: (index = 0) => {
        if (window.WorldbuildingApp && window.WorldLocations?.locations?.[index]) {
            const testCard = window.WorldbuildingApp.createLocationCard(
                window.WorldLocations.locations[index]
            );
            console.log('Test card created:', testCard);
            return testCard;
        }
    }
};

// Make apps available globally
window.MainApp = MainApp;
window.WorldbuildingApp = WorldbuildingApp;

console.log('world.js loaded successfully');