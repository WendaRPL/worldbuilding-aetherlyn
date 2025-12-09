// Main Website JavaScript
const MainApp = (function() {
    // Elements
    let hamburger = null;
    let navLinks = null;
    let cursorDot = null;
    let cursorOutline = null;
    let isCursorInitialized = false;
    let body = null;

    // Initialize
    function init() {
        console.log('MainApp initialized');
        body = document.body;
        cacheElements();
        initMobileMenu();
        initDropdowns();
        initCustomCursor();
        initScrollAnimations();
    }

    // Cache DOM elements
    function cacheElements() {
        hamburger = document.querySelector('.hamburger');
        navLinks = document.querySelector('.nav-links');
        console.log('Cached elements:', { 
            hamburger: !!hamburger, 
            navLinks: !!navLinks 
        });
    }

    // === MOBILE MENU — FINAL CONVERTED VERSION ===
function initMobileMenu() {
    console.log('Initializing mobile menu');

    if (!hamburger || !navLinks) {
        console.error('Hamburger/navLinks missing');
        return;
    }

    // === HAMBURGER CLICK — FIXED ===
    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        toggleMobileMenu();
    });

    // === OUTSIDE CLICK (CAPTURE MODE) — FIX 100% ===
    document.addEventListener('mousedown', function(event) {
        if (!navLinks.classList.contains('active')) return;

        const clickedHamburger = event.target.closest('.hamburger');
        const clickedSidebar  = event.target.closest('.nav-links');

        if (!clickedHamburger && !clickedSidebar) {
            closeMobileMenu();
        }
    }, true);

    // ESC closes sidebar
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Auto-close when changing viewport
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 768) {
                closeMobileMenu();
            }
        }, 200);
    });

    // Close when clicking normal nav links (mobile)
    document.querySelectorAll('.nav-links > li > a:not(.dropdown-toggle)').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });
}

function toggleMobileMenu() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');

    const isMenuOpen = navLinks.classList.contains('active');

    // Lock scroll using HTML (world.js standard)
    body.classList.toggle('menu-open', isMenuOpen);
    document.documentElement.style.overflow = isMenuOpen ? 'hidden' : '';

    console.log('Mobile menu:', isMenuOpen ? 'OPEN' : 'CLOSED');

    // === AUTO-OPEN MOBILE DROPDOWN (from landing main.js) ===
    const mobileDropdown = document.querySelector('.mobile-dropdown');

    if (window.innerWidth <= 768) {
        if (isMenuOpen) {
            // Open dropdown automatically
            setTimeout(() => {
                if (mobileDropdown) {
                    mobileDropdown.classList.add('active');
                    console.log('Auto-open mobile dropdown');
                }
            }, 100);
        } else {
            // Close dropdown when menu closes
            if (mobileDropdown) {
                mobileDropdown.classList.remove('active');
            }
        }
    }
}


function closeMobileMenu() {
    if (!navLinks || !hamburger) return;

    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    body.classList.remove('menu-open');

    document.documentElement.style.overflow = '';

    // Close dropdowns
    document.querySelectorAll('.dropdown').forEach(drop => drop.classList.remove('active'));

    console.log('Mobile menu closed');
}


    // === DROPDOWNS ===
    function initDropdowns() {
        console.log('Initializing dropdowns');

        const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
        const dropdowns = document.querySelectorAll('.dropdown');

        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                // Mobile behavior
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();

                    const dropdown = this.closest('.dropdown');
                    const wasActive = dropdown.classList.contains('active');

                    // Close other dropdowns
                    dropdowns.forEach(d => {
                        if (d !== dropdown) d.classList.remove('active');
                    });

                    // Toggle current
                    dropdown.classList.toggle('active');

                    console.log('Dropdown:', wasActive ? 'CLOSED' : 'OPENED');

                    // Scroll into view if opening
                    if (!wasActive) {
                        setTimeout(() => {
                            dropdown.scrollIntoView({ 
                                behavior: 'smooth', 
                                block: 'nearest' 
                            });
                        }, 100);
                    }
                }
            });
        });

        // Close dropdowns on outside click (desktop)
        document.addEventListener('click', function(e) {
            if (window.innerWidth > 768) {
                if (!e.target.closest('.dropdown')) {
                    dropdowns.forEach(dropdown => {
                        dropdown.classList.remove('active');
                    });
                }
            }
        });

        // ESC to close dropdowns
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        });

        // Desktop hover
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

        // Close menu when clicking dropdown items (mobile)
        document.querySelectorAll('.dropdown-menu a').forEach(item => {
            item.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    closeMobileMenu();
                }
            });
        });

        // Close menu when clicking regular nav links (mobile)
        document.querySelectorAll('.nav-links > li > a:not(.dropdown-toggle)').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    closeMobileMenu();
                }
            });
        });
    }

    // Mobile dropdown manual toggle
function initMobileDropdown() {
    const mobileDropdown = document.querySelector('.mobile-dropdown');
    
    if (!mobileDropdown) return;

    const dropdownToggle = mobileDropdown.querySelector('.dropdown-toggle');

    if (dropdownToggle && window.innerWidth <= 768) {
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            mobileDropdown.classList.toggle('active');

            if (mobileDropdown.classList.contains('active')) {
                setTimeout(() => {
                    mobileDropdown.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest'
                    });
                }, 100);
            }
        });
    }
}


    // === CUSTOM CURSOR ===
    function initCustomCursor() {
        if (isCursorInitialized || window.innerWidth <= 768) {
            console.log('Cursor init skipped (mobile or already init)');
            return;
        }

        cursorDot = document.querySelector('.cursor-dot');
        cursorOutline = document.querySelector('.cursor-outline');

        if (!cursorDot || !cursorOutline) {
            console.warn('Cursor elements not found, retrying...');
            setTimeout(initCustomCursor, 500);
            return;
        }

        setupCursor();
    }

    function setupCursor() {
        console.log('Setting up custom cursor');
        
        cursorDot.style.opacity = '1';
        cursorOutline.style.opacity = '0.5';
        document.body.style.cursor = 'none';

        let rafId = null;
        
        function handleMouseMove(e) {
            if (rafId) return;
            
            rafId = requestAnimationFrame(() => {
                if (!cursorDot || !cursorOutline) return;
                
                const posX = e.clientX;
                const posY = e.clientY;

                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;
                
                cursorOutline.style.left = `${posX}px`;
                cursorOutline.style.top = `${posY}px`;
                
                rafId = null;
            });
        }

        document.addEventListener('mousemove', handleMouseMove, { passive: true });

        const interactiveElements = 
            'a, button, .cta-button, .portal-card, .nav-links a, .dropdown-toggle, .dropdown-menu a, input, textarea, .location-card, .filter-btn';

        document.querySelectorAll(interactiveElements).forEach(el => {
            el.addEventListener('mouseenter', handleElementHover);
            el.addEventListener('mouseleave', handleElementLeave);
        });

        isCursorInitialized = true;
        console.log('Cursor setup complete');
    }

    function handleElementHover() {
        if (!cursorOutline) return;
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorOutline.style.backgroundColor = 'rgba(76, 201, 240, 0.15)';
        cursorOutline.style.borderColor = 'var(--accent-primary)';
        cursorOutline.style.opacity = '0.8';
    }

    function handleElementLeave() {
        if (!cursorOutline) return;
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.backgroundColor = '';
        cursorOutline.style.borderColor = 'var(--accent-primary)';
        cursorOutline.style.opacity = '0.5';
    }

    // === WINDOW RESIZE ===
    function handleWindowResize() {
        if (window.innerWidth <= 768) {
            // Mobile
            if (cursorDot) cursorDot.style.display = 'none';
            if (cursorOutline) cursorOutline.style.display = 'none';
            document.body.style.cursor = 'auto';
        } else {
            // Desktop
            if (cursorDot && cursorOutline && isCursorInitialized) {
                cursorDot.style.display = 'block';
                cursorOutline.style.display = 'block';
                document.body.style.cursor = 'none';
            }
        }
    }

    // === SCROLL ANIMATIONS ===
    function initScrollAnimations() {
        const elements = document.querySelectorAll('.portal-card, .welcome-content, .location-card');

        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        });

        checkScrollAnimations();
        
        let scrollTimer;
        window.addEventListener('scroll', function() {
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(checkScrollAnimations, 100);
        }, { passive: true });
    }

    function checkScrollAnimations() {
        const elements = document.querySelectorAll('.portal-card, .welcome-content, .location-card');

        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    function initContentFadeIn() {
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            setTimeout(() => {
                mainContent.classList.add('visible');
            }, 1000);
        }
    }

    // Public API
    return {
        init: init,
        initCustomCursor: initCustomCursor,
        toggleMobileMenu: toggleMobileMenu,
        closeMobileMenu: closeMobileMenu,
        handleWindowResize: handleWindowResize,
        initScrollAnimations: initScrollAnimations,
        initContentFadeIn: initContentFadeIn,
        handleElementHover: handleElementHover,
        handleElementLeave: handleElementLeave
    };
})();

// ===== WORLDBUILDING APP =====
const WorldbuildingApp = (function() {
    let currentLocations = [];
    let currentFilter = 'all';
    let currentSort = 'name-asc';
    let currentSearch = '';

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

    function init() {
        console.log('WorldbuildingApp initializing...');
        cacheElements();
        setupEventListeners();
        loadLocations();
        updateUI();
    }

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

    function loadLocations() {
        showLoading();
        
        setTimeout(() => {
            if (!window.WorldLocations) {
                console.error('WorldLocations not defined');
                showErrorMessage('WorldLocations data not loaded');
                hideLoading();
                return;
            }

            try {
                const allLocations = WorldLocations.getAllLocations();
                
                currentLocations = allLocations.filter(loc => {
                    if (!loc || typeof loc !== 'object') return false;
                    if (!loc.name) loc.name = `Location ${loc.id || 'Unknown'}`;
                    return true;
                });

                console.log(`Loaded ${currentLocations.length} locations`);
                updateTotalCount();
                renderLocations();
                hideLoading();
            } catch (error) {
                console.error('Error loading locations:', error);
                showErrorMessage('Error: ' + error.message);
                hideLoading();
            }
        }, 500);
    }

    function renderLocations() {
        if (!elements.grid) return;

        let filtered = filterLocations();
        filtered = sortLocations(filtered);

        if (elements.showingCount) {
            elements.showingCount.textContent = filtered.length;
        }

        elements.grid.innerHTML = '';

        if (filtered.length === 0) {
            showEmptyState();
            return;
        }

        hideEmptyState();

        filtered.forEach(location => {
            try {
                const card = createLocationCard(location);
                if (card) elements.grid.appendChild(card);
            } catch (error) {
                console.error('Error creating card:', error);
                const errorCard = createErrorCard(location?.id || 'Unknown', error.message);
                elements.grid.appendChild(errorCard);
            }
        });
    }

    function createLocationCard(location) {
        if (!location || typeof location !== 'object') {
            return createErrorCard('Invalid', 'Location data invalid');
        }

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

        const category = (WorldLocations.categories && WorldLocations.categories[safeLoc.category]) || 
            { name: 'Unknown', icon: 'fa-star', color: 'category-others' };
        
        const danger = (WorldLocations.dangerLevels && WorldLocations.dangerLevels[safeLoc.danger]) || 
            { name: 'Low', color: '#2ecc71', order: 1 };
        
        const magic = (WorldLocations.magicLevels && WorldLocations.magicLevels[safeLoc.magic]) || 
            { name: 'Medium', color: '#9b59b6', order: 3 };

        let formattedDate = 'Unknown';
        try {
            const discoveredDate = new Date(safeLoc.discovered);
            if (!isNaN(discoveredDate.getTime())) {
                formattedDate = discoveredDate.toLocaleDateString('en-US', {
                    year: 'numeric', month: 'short', day: 'numeric'
                });
            }
        } catch (e) {
            console.warn('Invalid date:', safeLoc.discovered);
        }

        const activityClass = safeLoc.activity > 70 ? 'high' : safeLoc.activity > 40 ? 'medium' : 'low';
        const explorationClass = safeLoc.exploration > 70 ? 'high' : safeLoc.exploration > 40 ? 'medium' : 'low';

        const card = document.createElement('div');
        card.className = 'location-card';
        card.dataset.locationId = safeLoc.id;
        card.dataset.category = safeLoc.category;

        card.innerHTML = `
            <div class="location-card-header">
                <div class="location-category ${category.color}">
                    <i class="fas ${category.icon}"></i> ${category.name}
                </div>
                <div class="location-danger" style="background: ${danger.color}20; color: ${danger.color};">
                    <i class="fas fa-exclamation-triangle"></i> ${danger.name} Danger
                </div>
            </div>
            <h3 class="location-name">${safeLoc.name}</h3>
            <div class="location-governing">
                <i class="fas fa-crown"></i> ${safeLoc.governingBody}
            </div>
            <p class="location-description">${safeLoc.description}</p>
            <div class="location-features">
                <i class="fas fa-tags"></i>
                ${safeLoc.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
            </div>
            <div class="location-stats">
                <div class="stat-item">
                    <div class="stat-label">Activity</div>
                    <div class="stat-bar">
                        <div class="stat-bar-fill ${activityClass}" style="width: ${safeLoc.activity}%"></div>
                    </div>
                    <div class="stat-value">${safeLoc.activity}%</div>
                </div>
                <div class="stat-item">
                    <div class="stat-label">Exploration</div>
                    <div class="stat-bar">
                        <div class="stat-bar-fill ${explorationClass}" style="width: ${safeLoc.exploration}%"></div>
                    </div>
                    <div class="stat-value">${safeLoc.exploration}%</div>
                </div>
            </div>
            <div class="location-footer">
                <div class="location-members">
                    <i class="fas fa-users"></i> ${safeLoc.members.toLocaleString()} active
                </div>
                <button class="visit-btn" onclick="WorldbuildingApp.handleVisitLocation(${safeLoc.id})">
                    <i class="fas fa-door-open"></i> Visit
                </button>
            </div>
        `;

        return card;
    }

    function createErrorCard(id, message) {
        const card = document.createElement('div');
        card.className = 'location-card error-card';
        card.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">⚠️</div>
                <h3>Error Loading Location</h3>
                <p>ID: ${id}</p>
                <p style="color: var(--text-muted); font-size: 0.9rem;">${message}</p>
            </div>
        `;
        return card;
    }

    function filterLocations() {
        if (!currentLocations || !currentLocations.length) return [];

        let filtered = [...currentLocations];

        if (currentFilter !== 'all') {
            filtered = filtered.filter(loc => loc.category === currentFilter);
        }

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

    function setupEventListeners() {
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

        if (elements.searchInput) {
            elements.searchInput.addEventListener('input', (e) => {
                currentSearch = e.target.value;
                applyFilters();
            });
        }

        if (elements.sortSelect) {
            elements.sortSelect.addEventListener('change', (e) => {
                currentSort = e.target.value;
                applyFilters();
            });
        }

        if (elements.resetButton) {
            elements.resetButton.addEventListener('click', resetFilters);
        }
    }

    function applyFilters() {
        renderLocations();
        updateUI();
    }

    function resetFilters() {
        if (elements.filterButtons) {
            elements.filterButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.filter === 'all') btn.classList.add('active');
            });
        }

        if (elements.searchInput) elements.searchInput.value = '';
        if (elements.sortSelect) elements.sortSelect.value = 'name-asc';

        currentFilter = 'all';
        currentSearch = '';
        currentSort = 'name-asc';

        applyFilters();
    }

    function handleVisitLocation(locationId) {
        let location;
        try {
            location = WorldLocations.getLocationById?.(locationId);
        } catch (error) {
            location = null;
        }

        if (location) {
            alert(`Entering ${location.name}...\n\nThis would redirect to the group chat.`);
        } else {
            alert(`Location ID ${locationId} not found.`);
        }
    }

    function updateUI() {
        updateTotalCount();
    }

    function updateTotalCount() {
        if (elements.totalCount && WorldLocations) {
            try {
                const allLocations = WorldLocations.getAllLocations();
                elements.totalCount.textContent = allLocations.length;
            } catch (error) {
                elements.totalCount.textContent = '0';
            }
        }
    }

    function showLoading() {
        if (elements.loadingState) elements.loadingState.style.display = 'block';
        if (elements.grid) elements.grid.style.opacity = '0.5';
    }

    function hideLoading() {
        if (elements.loadingState) elements.loadingState.style.display = 'none';
        if (elements.grid) elements.grid.style.opacity = '1';
    }

    function showEmptyState() {
        if (elements.emptyState) elements.emptyState.style.display = 'block';
        if (elements.grid) elements.grid.style.display = 'none';
    }

    function hideEmptyState() {
        if (elements.emptyState) elements.emptyState.style.display = 'none';
        if (elements.grid) elements.grid.style.display = 'grid';
    }

    function showErrorMessage(message) {
        if (elements.grid) {
            elements.grid.innerHTML = `
                <div style="text-align: center; padding: 3rem; grid-column: 1/-1;">
                    <h2 style="color: var(--accent-fire); margin-bottom: 1rem;">⚠️ Data Loading Error</h2>
                    <p style="color: var(--text-muted); margin-bottom: 2rem;">${message}</p>
                    <button onclick="location.reload()" class="visit-btn">
                        <i class="fas fa-redo"></i> Reload Page
                    </button>
                </div>
            `;
        }
    }

    return {
        init: init,
        handleVisitLocation: handleVisitLocation,
        getCurrentLocations: () => currentLocations,
        refreshLocations: loadLocations,
        createLocationCard: createLocationCard
    };
})();

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('=== INITIALIZING APPS ===');
    
    document.body.classList.remove('loading');

    // Initialize MainApp
    if (window.MainApp) {
        console.log('Initializing MainApp...');
        MainApp.init();
        
        // Debounced resize handler
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                MainApp.handleWindowResize();
            }, 250);
        });
        
        setTimeout(MainApp.handleWindowResize, 100);
    }

    // Initialize WorldbuildingApp
    setTimeout(() => {
        if (!window.WorldLocations) {
            console.warn('WorldLocations not available, waiting...');
            setTimeout(() => {
                if (window.WorldLocations && window.WorldbuildingApp) {
                    console.log('Initializing WorldbuildingApp (delayed)');
                    WorldbuildingApp.init();
                }
            }, 500);
        } else {
            console.log('Initializing WorldbuildingApp');
            WorldbuildingApp.init();
        }
    }, 100);

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });

                if (window.innerWidth <= 768) {
                    MainApp.closeMobileMenu();
                }
            }
        });
    });

    console.log('=== INITIALIZATION COMPLETE ===');
});

// Global exposure
window.MainApp = MainApp;
window.WorldbuildingApp = WorldbuildingApp;

// Debug helpers
window.debugCursor = {
    enable: () => {
        if (window.MainApp) {
            MainApp.initCustomCursor();
            console.log('Cursor enabled');
        }
    },
    disable: () => {
        const dot = document.querySelector('.cursor-dot');
        const outline = document.querySelector('.cursor-outline');
        if (dot) dot.style.display = 'none';
        if (outline) outline.style.display = 'none';
        document.body.style.cursor = 'auto';
        console.log('Cursor disabled');
    }
};

window.debugMenu = {
    open: () => MainApp.toggleMobileMenu(),
    close: () => MainApp.closeMobileMenu(),
    check: () => {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        console.log({
            hamburger: !!hamburger,
            navLinks: !!navLinks,
            isActive: navLinks?.classList.contains('active')
        });
    }
};

console.log('world.js loaded successfully');