// ===== WORLDBUILDING DATA =====
const WorldLocations = {
    categories: {
        forest: {
            name: 'Forest',
            icon: 'fa-tree',
            color: 'category-forest',
            description: 'Ancient woods and mystical groves'
        },
        guild: {
            name: 'Guild',
            icon: 'fa-users',
            color: 'category-guild',
            description: 'Organizations and faction headquarters'
        },
        kingdom: {
            name: 'Kingdom',
            icon: 'fa-crown',
            color: 'category-kingdom',
            description: 'Royal domains and sovereign territories'
        },
        dungeon: {
            name: 'Dungeon',
            icon: 'fa-skull-crossbones',
            color: 'category-dungeon',
            description: 'Dangerous ruins and forbidden places'
        },
        water: {
            name: 'Water',
            icon: 'fa-water',
            color: 'category-water',
            description: 'Rivers, lakes, and coastal regions'
        },
        others: {
            name: 'Others',
            icon: 'fa-star',
            color: 'category-others',
            description: 'Unique and miscellaneous locations'
        }
    },

    dangerLevels: {
        low: { name: 'Low', color: '#2ecc71', order: 1 },
        medium: { name: 'Medium', color: '#f1c40f', order: 2 },
        high: { name: 'High', color: '#e67e22', order: 3 },
        extreme: { name: 'Extreme', color: '#e74c3c', order: 4 }
    },

    magicLevels: {
        none: { name: 'None', color: '#95a5a6', order: 1 },
        low: { name: 'Low', color: '#3498db', order: 2 },
        medium: { name: 'Medium', color: '#9b59b6', order: 3 },
        high: { name: 'High', color: '#8e44ad', order: 4 },
        ancient: { name: 'Ancient', color: '#f1c40f', order: 5 }
    },

    // ===== LOCATIONS DATA =====
    // Isi dengan 50 location objects
    locations: [
        {
            id: 1,
            name: "Abyss Forest",
            category: "forest",
            governingBody: "None",
            description: "Ancient forest with menacing abyssal energy.",
            features: ["Ancient Trees", "Abyss Creature", "Demon King Armies"],
            danger: "high",
            magic: "high",
            activity: 85,
            exploration: 70,
            members: 247,
            discovered: "2023-03-15"
        },
        {
            id: 2,
            name: "Aetherion City",
            category: "kingdom",
            governingBody: "Kerajaan",
            description: "Kota Petualang.",
            features: ["Penginapan", "Blacksmith", "Magic Shop"],
            danger: "low",
            magic: "high",
            activity: 92,
            exploration: 45,
            members: 189,
            discovered: "2023-05-22"
        },
        {
            id: 3,
            name: "Hutan Spiritual Barat Laut",
            category: "forest",
            governingBody: "None",
            description: "Hutan yang dipenuhi Spirit dan Ancient Creature.",
            features: ["Puzzle", "Magic Creature", "Ancient Trees"],
            danger: "low",
            magic: "high",
            activity: 92,
            exploration: 45,
            members: 189,
            discovered: "2023-05-22"
        },
        {
            id: 4,
            name: "Guardians of Night",
            category: "guild",
            governingBody: "Guardians of Night",
            description: "Guild yang terlahir dari revolusi Troupe de Fools. Berdiri untuk kebenaran sejati, tanpa memandang cahaya atau kesucian.",
            features: ["Tempat tinggal", "Blacksmith", "Brewing Area", "Training Area"],
            danger: "low",
            magic: "extreme",
            activity: 50,
            exploration: 100,
            members: 33,
            discovered: "2023-05-22"
        },
    ],

    // ===== HELPER METHODS =====
    getAllLocations: function() {
        return this.locations || [];
    },

    getLocationById: function(id) {
        return (this.locations || []).find(loc => loc.id === id);
    },

    searchLocations: function(query) {
        if (!query || !this.locations) return [];
        
        const searchTerm = query.toLowerCase();
        return this.locations.filter(loc => 
            (loc.name && loc.name.toLowerCase().includes(searchTerm)) ||
            (loc.description && loc.description.toLowerCase().includes(searchTerm)) ||
            (loc.governingBody && loc.governingBody.toLowerCase().includes(searchTerm)) ||
            (Array.isArray(loc.features) && loc.features.some(f => f.toLowerCase().includes(searchTerm)))
        );
    },

    sortLocations: function(locations, sortBy) {
        if (!locations || !locations.length) return [];
        
        const sorted = [...locations];
        
        switch(sortBy) {
            case 'name-asc':
                return sorted.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
            case 'name-desc':
                return sorted.sort((a, b) => (b.name || '').localeCompare(a.name || ''));
            case 'danger-desc':
                return sorted.sort((a, b) => {
                    const aOrder = this.dangerLevels[a.danger]?.order || 1;
                    const bOrder = this.dangerLevels[b.danger]?.order || 1;
                    return bOrder - aOrder;
                });
            case 'danger-asc':
                return sorted.sort((a, b) => {
                    const aOrder = this.dangerLevels[a.danger]?.order || 1;
                    const bOrder = this.dangerLevels[b.danger]?.order || 1;
                    return aOrder - bOrder;
                });
            case 'magic-desc':
                return sorted.sort((a, b) => {
                    const aOrder = this.magicLevels[a.magic]?.order || 1;
                    const bOrder = this.magicLevels[b.magic]?.order || 1;
                    return bOrder - aOrder;
                });
            case 'members-desc':
                return sorted.sort((a, b) => (b.members || 0) - (a.members || 0));
            default:
                return sorted;
        }
    }
};

// Make it available globally
window.WorldLocations = WorldLocations;

console.log('data.js loaded with', WorldLocations.locations?.length || 0, 'locations');