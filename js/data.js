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
        },
        southern: {
            name: 'Southern Continent',
            icon: 'fa-snowflake',
            color: 'category-southern',
            description: 'Frozen lands of Arctis Noctis and forbidden southern regions'
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
            name: "Abyssal Forest",
            category: "forest",
            governingBody: "None",
            description: "Hutan gelap di ujung timur wilayah Aetherlyn, dipenuhi pepohonan kuno, kabut lembab, dan energi misterius. Di tengahnya mengalir sungai besar dengan arus yang tak terduga. Tempat monster berkeliaran dan bunga-bunga langka bersinar redup seperti lentera jiwa. 'Di dalam sunyi, dunia selalu bernafas tanpa didengar.'",
            features: ["Monster Training Ground", "Ancient Trees", "Mystical Glowing Flowers", "Large River", "Dark Energy", "Moonlight Canopy"],
            danger: "high",
            magic: "high",
            activity: 78,
            exploration: 85,
            members: 105,
            discovered: "2024-04-10"
        },
        {
            id: 2,
            name: "Aetherion City",
            category: "kingdom",
            governingBody: "Aetherlyn Kingdom",
            description: "Ibukota Kerajaan Aetherlyn dan kota petualang yang tak pernah tidur. Sebagai titik awal bagi setiap petualang, Aetherion dipenuhi dengan hiruk-pikuk kehidupan, obor petualang yang selalu menyala, dan suara perlengkapan logam dari para petualang yang siap menjelajah. 'Sebuah langkah pertama menuju legenda.'",
            features: ["Beginner's Inn (5 ATC/night)", "Blacksmith", "Magic Shop", "Roleplay Hub", "Backstory Archives", "Adventurer's Guild", "Training Grounds"],
            danger: "low",
            magic: "medium",
            activity: 95,
            exploration: 30,
            members: 82,
            discovered: "2024-01-01"
        },
        {
            id: 3,
            name: "Hutan Spiritual Barat Laut",
            category: "forest",
            governingBody: "None",
            description: "Hutan spiritual yang menjadi tempat dua pilar suci penyeimbang energi dunia. Di kedalamannya, dijaga oleh Qilin Primordial bercahaya surgawi dan Naga Primordial berkepala tiga dari neraka. Keduanya adalah makhluk mistis berusia jutaan tahun yang melindungi simpul aliran energi bumi. Hanya yang berhati murni dan berniat baik yang dapat dipercayai oleh penjaga kuno ini.",
            features: ["Sacred Energy Pillars", "Primordial Qilin Guardian", "Three-Headed Primordial Dragon", "Earth Energy Convergence", "Ancient Forest", "Spiritual Trials"],
            danger: "medium",
            magic: "ancient",
            activity: 70,
            exploration: 95,
            members: 76,
            discovered: "2024-07-15"
        },
        {
            id: 4,
            name: "Guardians of Night",
            category: "guild",
            governingBody: "Ace of Spade (Current Leader)",
            description: "Guild yang percaya pada kekuatan bulan daripada matahari, terdiri dari mereka yang tertindas dan mencari kebenaran sejati. Bukan pahlawan, tetapi korban yang bangkit menjaga keseimbangan. 'Membangun dunia yang lebih jujur, di mana kekuatan digunakan bukan untuk menyucikan nama, tapi untuk menjaga keseimbangan.' Fokus pada strategi politik, perlawanan sipil, dan aktivitas quest khusus.",
            features: ["Political Strategy", "Civil Resistance", "Elite Training", "Brutal Fighting", "Shadow Operations", "Member Quests", "Truth Seekers"],
            danger: "high",
            magic: "high",
            activity: 65,
            exploration: 40,
            members: 47,
            discovered: "2025-08-03"
        },
        {
            id: 5,
            name: "Serikat Petualang",
            category: "kingdom",
            governingBody: "Adventurer's Council",
            description: "Bangunan megah di tengah Kerajaan Aetherlyn yang menjadi jantung komunitas petualang. Dengan dinding batu granit tua berukir simbol pedang bersilang, atap kayu gelap menjulang tinggi, dan chandelier magis yang menerangi aula besar. Tempat para petualang membentuk party, mengambil/melaporkan quest, promosi barang/jasa, dan berkumpul dengan sesama pengelana. 'Tempat dimana mimpi ditempa menjadi kenyataan.'",
            features: ["Quest Board", "Party Formation", "Quest Reporting", "Trading & Promotion", "Grand Hall", "Magical Chandelier", "Adventurer's Lounge"],
            danger: "low",
            magic: "medium",
            activity: 95,
            exploration: 100,
            members: 239,
            discovered: "2024-10-09"
        },
        {
            id: 6,
            name: "Saint Catherine Village",
            category: "others",
            governingBody: "Village Council",
            description: "Desa tenang yang tersembunyi di lembah hijau, dipenuhi ladang gandum, kebun anggur, dan padang penggembalaan luas. Rumah-rumah batu berhiaskan bunga liar berjejer rapi di sepanjang jalan tanah. Di pusat desa terdapat sumur tua yang dipercaya membawa keberkahan, tempat penduduk berkumpul setiap senja. Di malam hari, lampion-lampu kecil menerangi desa dengan cahaya keemasan lembut.",
            features: ["Blessed Well", "Wheat Fields", "Vineyards", "Livestock Pastures", "Stone Houses", "Evening Lanterns", "Village Square"],
            danger: "low",
            magic: "low",
            activity: 65,
            exploration: 40,
            members: 55, 
            discovered: "2025-08-22"
        },
        {
            id: 7,
            name: "Danau Liraell",
            category: "water",
            governingBody: "None",
            description: "Permata alam tersembunyi di balik pepohonan hijau dan bunga-bunga indah. Airnya berkilau biru jernih di siang hari, namun saat malam berubah menjadi panggung keajaiban dengan cahaya bintang, pantulan rembulan menari, dan aurora tipis dari aliran mana purba. Tempat ketenangan jiwa dimana bisikan angin membawa nyanyian peri kuno yang menyembuhkan. Ekosistem alami yang kaya dengan ikan-ikan tidak beracun.",
            features: ["Healing Waters", "Ancient Fairy Songs", "Nighttime Aurora", "Lily & Lotus Gardens", "Crystal Clear Water", "Starlight Reflections", "Ancient Mana Flow"],
            danger: "low",
            magic: "high",
            activity: 70,
            exploration: 60,
            members: 76 ,
            discovered: "2025-10-13"
        },
        {
            id: 8,
            name: "Aether Hall",
            category: "kingdom",
            governingBody: "Aetherlyn Kingdom",
            description: "Gerbang besar pertama yang harus dilewati setiap petualang sebelum memasuki dunia penuh tantangan. Tempat bersejarah di antara pilar-pilar menjulang tinggi yang menjadi saksi perjalanan petualang menuju kekuatan sejati. 'Sebuah tempat bagi semua cerita bermula.' Juga berfungsi sebagai pusat informasi patch dan pembaruan dunia.",
            features: ["Grand Entrance Gate", "History Pillars", "Adventurer's Initiation", "Patch Information Hub", "Ceremonial Grounds", "Memory Walls"],
            danger: "low",
            magic: "medium",
            activity: 80,
            exploration: 20,
            members: 366,
            discovered: "2024-10-08"
        },
        {
            id: 9,
            name: "Arcane Atelier",
            category: "kingdom",
            governingBody: "Arcane Council",
            description: "Toko sihir megah di Kerajaan Aetherlyn yang menjual berbagai perlengkapan magis. Dindingnya dipenuhi rak-rak berisi ramuan magis, tongkat sihir, grimoire, batu sihir, dan skill book. Lentera magis menerangi ruangan dengan cahaya hangat, sementara gema mantra sesekali terdengar dari sudut-sudut toko. 'Ad Astra Per Aspera - Melalui kesulitan menuju bintang.'",
            features: ["Magic Equipment Shop", "Rune Inscription Service", "Skill Book Exchange", "Potion Brewery", "Grimoire Collection", "Magic Wand Crafting", "Enchantment Station"],
            danger: "low",
            magic: "high",
            activity: 75,
            exploration: 15,
            members: 46,
            discovered: "2023-11-06"
        },
        {
            id: 10,
            name: "Field of Dream",
            category: "others",
            governingBody: "None",
            description: "Padang bunga luas yang tercipta setelah kematian Hakun Wistalia, terletak di penghujung benua Aetherlyn. Surga tersembunyi dengan sungai kecil mengalir tenang, air terjun menyegarkan, dan jembatan kayu melengkung yang kokoh. Kupu-kupu berterbangan menghisap nektar di antara bunga-bunga indah. Terdapat mansion besar di ujung padang dan area peringatan di sudut barat laut untuk mengenang yang telah tiada.",
            features: ["Memorial Field", "Flower Meadow", "Wooden Arch Bridge", "Waterfall", "Butterfly Garden", "Mansion Estate", "River Stream"],
            danger: "low",
            magic: "medium",
            activity: 60,
            exploration: 50,
            members: 92,
            discovered: "2023-08-05"
        },
        {
            id: 11,
            name: "Elf Rivendell",
            category: "forest",
            governingBody: "Duke Telestoria",
            description: "Wilayah suci Ras Elf di dalam Kerajaan Aetherlyn. Rivendell dikenal sebagai 'Rumah Para Pencahayaan', sebuah lembah luas yang tenang dan penuh kehidupan. Rumput lembut membentang sejauh mata memandang, dihiasi oleh bunga-bunga berwarna-warni dan sungai jernih yang mengalir dengan suara menenangkan. Pepohonan tinggi berdaun hijau dan keemasan membentuk kanopi alami yang menerangi tanah dengan cahaya lembut. Di tengah wilayah berdiri Istana Elf megah, tempat tinggal Duke Yuuya Von Telestoria dan pusat kebudayaan bangsa Elf. Di malam hari, cahaya bulan dan bintang menciptakan bayangan dramatis yang menjadikan Rivendell tampak seperti negeri mimpi.",
            features: [
                "Elven Royal Palace",
                "Sacred Forest Canopy",
                "Tranquil Crystal River",
                "Flower Fields of Dawn",
                "Moonlit Pathways",
                "Elven Architecture",
                "Nature Barrier",
                "Spiritual Inner Garden"
            ],
            danger: "low",
            magic: "high",
            activity: 55,
            exploration: 65,
            members: 76,
            discovered: "2024-10-10"
        },
        {
            id: 12,
            name: "Mount Eryndor",
            category: "others",
            governingBody: "Aetherlyn Kingdom",
            description: "Gunung suci di wilayah utara Aetherlyn yang menjulang tinggi seolah menembus langit. Puncaknya diselimuti cahaya biru keperakan yang muncul bukan hanya dari rembulan, namun juga dari energi purba yang mengalir dari inti dunia. Dinding-dinding gunung berdetak dengan kehidupan alam, dipenuhi kristal magis dan mineral langka. Meski tampak damai, kekuatan alam di dalamnya sangat dahsyat. Di malam hari, salju dan kristal memantulkan cahaya kebiruan yang bergulung di udara, menciptakan pemandangan yang membuat jiwa terdiam. 'Saat seseorang berdiri di puncak, ia tak akan menemukan langit, melainkan dirinya sendiri.' Material dari Gunung Eryndor dapat ditempa menjadi senjata legendaris.",
            features: [
                "Blue Silver Summit",
                "Ancient Core Energy",
                "Magic Crystal Veins",
                "Rare Mineral Deposits",
                "Frozen Light Reflection",
                "Weapon-Grade Materials",
                "Echoing Stone Walls",
                "Sky-Piercing Peak"
            ],
            danger: "high",
            magic: "ancient",
            activity: 45,
            exploration: 88,
            members: 59,
            discovered: "2024-11-02"
        },
        {
            id: 13,
            name: "Arctis Noctis",
            category: "southern",
            governingBody: "none",
            description: "Daratan beku abadi di wilayah selatan, diselimuti badai tanpa akhir dan suhu ekstrem yang hanya mampu ditahan oleh makhluk terpilih. Di bawah pengawasan dua Predecessor dan kepemimpinan Erevan Frostmourne, wilayah ini menjadi tanah terlarang yang sakral. Setiap langkah diawasi oleh penjaga suci yang setia kepada Shelegiel, sang Fallen Angel of Abyssal Ice.",
            features: [
                "Eternal Blizzard",
                "Extreme Survival Zone",
                "Ancient Ice Territory",
                "Storm Barrier",
                "Shelegiel's Sacred Watch",
                "Forbidden Continent",
                "Frozen Lifeforms",
                "Primordial Cold Aura"
            ],
            danger: "extreme",
            magic: "ancient",
            activity: 20,
            exploration: 98,
            members: 9,
            discovered: "2025-01-14"
        },
        {
            id: 14,
            name: "The Frostpeak",
            category: "southern",
            governingBody: "None",
            description: "Titik pusat suci Arctis Noctis, sebuah puncak es raksasa tempat energi dingin primordial berkumpul. Dijaga langsung oleh Shelegiel dan para penjaga pilihannya. Setiap makhluk yang mendekat tanpa restu akan membeku dalam hitungan detik.",
            features: [
                "Abyssal Ice Thrones",
                "Primordial Core Point",
                "Sacred Guardian Circle",
                "Absolute Zero Field",
                "Angel's Watch",
                "Ice Barrier Shell",
                "Soul-Freezing Winds"
            ],
            danger: "extreme",
            magic: "ancient",
            activity: 8,
            exploration: 100,
            members: 1,
            discovered: "2025-01-14"
        },
        {
            id: 15,
            name: "Snowy Valley",
            category: "southern",
            governingBody: "None",
            description: "Sebuah lembah langka yang masih menyimpan kehidupan di tengah Arctis Noctis. Hewan pasif dan tanaman bertahan hidup di sini, menjadikannya satu-satunya tempat bernafas di wilayah beku. Udara hangat samar terasa seperti pelukan alam.",
            features: [
                "Safe Haven Zone",
                "Passive Creatures",
                "Frozen-Tolerant Flora",
                "Natural Heat Veins",
                "Quiet Rest Grounds",
                "Hidden Shelter Points"
            ],
            danger: "medium",
            magic: "high",
            activity: 50,
            exploration: 60,
            members: 48,
            discovered: "2025-02-01"
        },
        {
            id: 16,
            name: "Freezing Point",
            category: "southern",
            governingBody: "None",
            description: "Danau kristal membeku yang memantulkan cahaya aneh dari dalam es. Di bawah permukaan terdapat ikan bercahaya dan reruntuhan peradaban kuno yang terkunci dalam waktu.",
            features: [
                "Frozen Crystal Lake",
                "Ancient City Remains",
                "Glowing Ice Fishes",
                "Time-Locked Ruins",
                "Reflective Magic Surface",
                "Mana-Preserved Ice"
            ],
            danger: "high",
            magic: "high",
            activity: 35,
            exploration: 80,
            members: 6,
            discovered: "2025-02-03"
        },
        {
            id: 17,
            name: "The Great Blue Volcano",
            category: "southern",
            governingBody: "None",
            description: "Gunung berapi biru yang memuntahkan lahar dingin—lebih dingin dari es, lebih mematikan dari api. Puncaknya menjadi arena tarian naga es yang menguasai langit.",
            features: [
                "Blue Lava Flow",
                "Ice Dragon Nests",
                "Frozen Magma Chamber",
                "Sky-Scale Battlefield",
                "Volcanic Ice Core",
                "Dragon-Flight Arena"
            ],
            danger: "extreme",
            magic: "ancient",
            activity: 60,
            exploration: 90,
            members: 12,
            discovered: "2025-02-05"
        },
        {
            id: 18,
            name: "Spicebush Forest",
            category: "southern",
            governingBody: "None",
            description: "Satu-satunya wilayah tanpa salju. Suhu panas ekstrem dan aroma rempah emas menciptakan halusinasi berbahaya. Tempat ini sering menjebak pikiran sebelum tubuh.",
            features: [
                "Gold-Spiced Trees",
                "Hallucinogenic Air",
                "Extreme Heat Zone",
                "Mind Distortion Field",
                "Rare Alchemy Plants",
                "Burning Roots"
            ],
            danger: "high",
            magic: "high",
            activity: 40,
            exploration: 70,
            members: 0,
            discovered: "2025-02-06"
        },
        {
            id: 19,
            name: "The Tower of Babel",
            category: "southern",
            governingBody: "Ancient Order of Knowledge",
            description: "Menara peninggalan masa lampau yang menjulang ke langit beku. Kini menjadi markas penelitian, pelatihan petualang, dan pembelajaran rahasia dunia lama.",
            features: [
                "Ancient Knowledge Vault",
                "Magic Training Chambers",
                "Forbidden Language Archives",
                "Observer Platforms",
                "Timeworn Relics",
                "Arcane Laboratory"
            ],
            danger: "medium",
            magic: "ancient",
            activity: 65,
            exploration: 85,
            members: 73,
            discovered: "2025-02-08"
        },
        {
            id: 20,
            name: "Mountain of Saint Eira",
            category: "southern",
            governingBody: "Shelegiel",
            description: "Gunung suci tempat Shelegiel bersemayam di atas hamparan es biru abadi. Tempat ujian terakhir bagi mereka yang berani menantang kehendak langit.",
            features: [
                "Saint's Frozen Throne",
                "Abyssal Ice Fields",
                "Final Trial Grounds",
                "Spiritual Judgement Zone",
                "Frozen Sky Temple"
            ],
            danger: "extreme",
            magic: "ancient",
            activity: 5,
            exploration: 100,
            members: 1,
            discovered: "2025-02-10"
        },
        {
            id: 21,
            name: "Throvalis & Canyon of Pendragon",
            category: "southern",
            governingBody: "Unknown",
            description: "Kota terkutuk Throvalis yang tertelan kabut abadi dan jurang dalam Pendragon yang menyimpan dunia para naga. Tempat paling misterius di Arctis Noctis, terlupakan oleh waktu itu sendiri.",
            features: [
                "Dreaded Fog City",
                "Dragon's Hidden Realm",
                "Endless Canyon",
                "Time-Forbidden Zone",
                "Lost Civilization",
                "Dragon Echoes"
            ],
            danger: "extreme",
            magic: "ancient",
            activity: 12,
            exploration: 100,
            members: 0,
            discovered: "2025-02-12"
        },
        {
            id: 22,
            name: "Bar Isekai",
            category: "kingdom",
            governingBody: "Aetherlyn Kingdom",
            description: "Bangunan megah di pusat Kerajaan Aetherlyn dengan arsitektur kayu hitam dan batuan pualam kelabu. Lentera keemasan menggantung di setiap jendela, sementara sebuah chandelier elegan menerangi ruangan utama. Bar Isekai adalah tempat persinggahan legendaris bagi para petualang dan pengelana, tempat langkah berat berhenti sejenak dan dunia terasa lebih ringan. Aroma anggur berkualitas dan masakan terbaik dari penjuru Aetherlyn memenuhi udara. 'Bar Isekai, sebuah tempat di mana kisah-kisah tanpa nama akan selalu bertemu.' Bar ini juga menyediakan penginapan mewah seharga 30 ATC per malam.",
            features: [
                "Luxury Bar & Tavern",
                "Golden Lanterns",
                "Grand Chandelier",
                "Premium Wine Storage",
                "Elite Cuisine",
                "Private Booths",
                "Adventurer Gathering Spot",
                "Luxury Inn (30 ATC/night)"
            ],
            danger: "low",
            magic: "low",
            activity: 92,
            exploration: 25,
            members: 172,
            discovered: "2024-12-03"
        },
        {
            id: 23,
            name: "Royal Healing Chambers",
            category: "kingdom",
            governingBody: "Aetherlyn Kingdom",
            description: "Pusat penyembuhan utama Kerajaan Aetherlyn yang berdiri megah di dalam hutan dekat wilayah pedesaan. Dibangun dengan arsitektur gotik tinggi dan kaca patri bercahaya, koridor-koridor yang dipenuhi tanaman menghubungkan setiap ruangannya, menciptakan aura damai yang menenangkan jiwa. Didirikan pasca perang kelam, tempat ini menjadi simbol pemulihan dan harapan. Penyembuhan di sini tidak hanya bersifat konvensional, tetapi juga melibatkan sihir tingkat tinggi untuk mempercepat regenerasi tubuh dan jiwa. 'In this place, the sword is left behind. Wounds are not a disgrace, and healing is a right.'",
            features: [
                "Gothic Healing Architecture",
                "Stained Glass Sanctuaries",
                "High-Level Healing Magic",
                "Soul Restoration Rooms",
                "Herbal & Alchemy Gardens",
                "Silent Recovery Corridors",
                "Sanctuary of Peace",
                "Priestess & Healer Circle"
            ],
            danger: "low",
            magic: "high",
            activity: 75,
            exploration: 35,
            members: 68,
            discovered: "2024-05-29"
        },
        {
            id: 24,
            name: "Winter Dark Castle",
            category: "others",
            governingBody: "Demon Lord — Shadow",
            description: "Sebuah kastil iblis megah yang berdiri di atas tebing beku, dikelilingi hutan mati yang membusuk dalam kesenyapan dan sungai membeku berwarna kehitaman. Setelah kehancuran kastil lama dalam perang primordial, hanya segelintir Archdemon purba yang bertahan dan menyembunyikan eksistensi mereka dari dunia fana. Kini mereka membangun ulang singgasana kegelapan di tempat ini. Menara-menara menjulang menembus kabut abu-abu langit, dipenuhi simbol demon kuno dan dililit duri raksasa yang hidup seakan menjadi penjaga abadi. Di aula utamanya, bisikan kutukan, doa terbalik, dan jeritan roh terikat terus bergema—menciptakan atmosfer yang hanya mampu dihuni oleh makhluk yang telah bersumpah kepada kegelapan. Winter Dark Castle adalah pusat kekuasaan, ritual, dan pertemuan para Demon tingkat tinggi untuk merencanakan dominasi atas dunia manusia. 'Mereka yang berjalan di atas bayangan, akan senantiasa berada dalam rengkuhan kegelapan.'",
            features: [
                "Frozen Cliff Stronghold",
                "Dead Forest Perimeter",
                "Black-Frozen River",
                "Demonic Thorn Towers",
                "Cursed Grand Hall",
                "Soul-Binding Sigils",
                "Ritual Chamber",
                "Archdemon Council Chamber",
                "Shadow Throne Room"
            ],
            danger: "extreme",
            magic: "ancient",
            activity: 90,
            exploration: 95,
            members: 77,
            discovered: "2025-02-21"
        },
        {
            id: 25,
            name: "Imperius Harbor",
            category: "water",
            governingBody: "Aetherlyn Kingdom",
            description: "Pelabuhan megah di ujung pesisir Kerajaan Aetherlyn, di mana langit bertemu laut dan ombak menyanyikan lagu keberangkatan. Deru burung camar berpadu dengan suara para pelaut dan aroma asin lautan yang menari di udara. Dermaga batu yang kokoh menampung kapal-kapal besar dengan layar putih menjulang, dihiasi lambang kerajaan dan tanda-tanda penjelajah dari negeri jauh. Imperius Harbor menjadi gerbang utama menuju dunia luar — tempat para pedagang, petualang, dan pengembara menjalin awal kisah mereka. Di antara hiruk-pikuk aktivitas, seorang bard tua memainkan melodi nostalgia, seakan setiap nada adalah doa bagi mereka yang berlayar. 'Ombak tak menjanjikan arah, namun selalu mengantar mereka yang berani melangkah.'",
            features: [
                "Grand Stone Docks",
                "Royal Emblem Ships",
                "Long-Distance Trade Port",
                "Seafarer Departure Gate",
                "Cargo & Trade Cranes",
                "Salt Market",
                "Old Bard's Corner",
                "Shipwright Workshop",
                "Lighthouse of Aether"
            ],
            danger: "medium",
            magic: "low",
            activity: 88,
            exploration: 70,
            members: 77,
            discovered: "2024-06-12"
        },
        {
            id: 26,
            name: "Lautan Bebas",
            category: "water",
            governingBody: "None",
            description: "Samudra luas tak berbatas di luar wilayah Aetherlyn, tempat hukum daratan tak lagi berlaku. Di sini, hanya arus, angin, dan bintang yang menjadi penunjuk arah. Kabut tebal, badai, dan ombak raksasa muncul dari kehendak alam itu sendiri. Hampir tak ada peta yang benar-benar akurat untuk wilayah ini, sebab lautan ini masih menyimpan misteri yang belum terungkap. Hanya sedikit jiwa yang pernah menginjak batas terjauhnya — dan lebih sedikit lagi yang kembali. Tujuh wilayah lautan misterius tersembunyi di dalamnya, seolah menunggu seseorang yang cukup berani untuk membangunkan rahasia dunia.",
            features: [
                "Endless Horizon",
                "Uncharted Waters",
                "Storm & Fog Zones",
                "Magnetic Anomalies",
                "Hidden Ancient Currents",
                "Star-Guided Navigation",
                "Deep-Sea Entities",
                "Forbidden Sea Routes"
            ],
            danger: "extreme",
            magic: "high",
            activity: 35,
            exploration: 100,
            members: 0,
            discovered: "2024-03-17",
        },
        {
            id: 27,
            name: "Astralis Archive Library",
            category: "kingdom",
            governingBody: "Aetherlyn Kingdom — Council of Sages",
            description: "Sebuah perpustakaan monumental di jantung Kerajaan Aetherlyn yang menjulang layaknya istana pengetahuan. Pilar-pilar raksasa membelah langit-langit yang memancarkan cahaya keemasan, berpadu dengan sinar kristal mana yang melayang di udara. Rak-rak buku menjulang tanpa ujung, dijaga oleh energi sihir kuno. Di antara lorong-lorong sunyi, simbol rune berbentuk bintang berpendar lembut, bertindak sebagai segel dan penjaga atas pengetahuan terlarang. Setiap langkah disambut oleh roh penjaga berjubah kabut, menuntun para pencari ilmu kepada halaman yang memang telah 'memilih mereka'. Di tempat ini, kata-kata menyimpan gema masa lalu, bisikan para bijak, dan bayangan masa depan.",
            features: [
                "Astral Pillars",
                "Floating Mana Crystals",
                "Infinite Book Halls",
                "Star Rune Guardians",
                "Fog-Robed Spirit Guides",
                "Forbidden Knowledge Vault",
                "Chronicle of Lost Ages",
                "Sentient Tomes",
                "Time-Echo Reading Chambers"
            ],
            danger: "medium",
            magic: "ancient",
            activity: 68,
            exploration: 85,
            members: 89,
            discovered: "2024-02-14"
        },
        {
            id: 28,
            name: "Necropolis Graveyard",
            category: "others",
            governingBody: "Aetherlyn Kingdom",
            description: "Di wilayah terluar Aetherlyn, terbentang Makam Necropolis — sebuah pemakaman kuno yang selalu diselimuti kabut abadi di bawah cahaya rembulan pucat. Suasananya begitu hening hingga setiap hembusan angin terdengar seperti bisikan jiwa-jiwa yang telah tiada. Pepohonan tua menjulang mengelilingi tanah suci ini, akar-akarnya mencengkeram bumi yang menyimpan kisah-kisah terlupakan. Batu-batu nisan berdiri miring, menandai kehidupan yang telah berakhir namun tak pernah benar-benar hilang. Setiap langkah di atas tanah lembutnya terasa seolah menyentuh waktu itu sendiri. 'Jika langit adalah buku, maka tanah Necropolis adalah halaman yang ditulis cahaya bulan.'",
            features: [
                "Moonlit Graveyard",
                "Eternal Fog Veil",
                "Ancient Tombstones",
                "Whispering Wind",
                "Old Watcher Trees",
                "Spirit-Quiet Grounds",
                "Memory-Soaked Earth",
                "Forgotten Name Markers",
                "Silent Offering Altars"
            ],
            danger: "medium",
            magic: "high",
            activity: 15,
            exploration: 75,
            members: 78,
            discovered: "2024-10-31"
        },
        {
            id: 29,
            name: "Exodus Cathedral",
            category: "kingdom",
            governingBody: "Aetherlyn Kingdom — Divine Order",
            description: "Berdiri di jantung Kerajaan Aetherlyn dan menjulang di antara awan serta sinar matahari suci, Exodus Cathedral adalah mahakarya ilahi yang menjadi titik pertemuan antara takdir dan harapan. Bangunannya megah dengan langit-langit tinggi yang seolah tak berujung, dihiasi oleh kaca-kaca patri berwarna-warni yang memantulkan cahaya surgawi ke seluruh ruangan. Sebuah patung malaikat berdiri kokoh di ujung katedral, seakan mengawasi setiap jiwa yang datang dengan niat tulus. Suasana di dalamnya sunyi dan khidmat—setiap langkah yang terpantul menjadi doa tersendiri. Di pusat segalanya terletak Altar Suci Legendaris, sumber kekuatan ilahi yang mampu meningkatkan tingkat petualang yang telah layak, membangkitkan jiwa yang gugur, serta mengubah arah kekuatan mereka. 'Dan pada cahaya, takdir akan berlutut di hadapannya.'",
            features: [
                "Legendary Holy Altar",
                "Resurrection Chamber",
                "Divine Ascension Platform",
                "Stained Glass Cathedral Halls",
                "Angel Statue Sanctuary",
                "White Prayer Corridor",
                "Blessed Mana Veins",
                "Soul Guidance Platform",
                "Fate Alteration Circle"
            ],
            danger: "low",
            magic: "ancient",
            activity: 85,
            exploration: 60,
            members: 73,
            discovered: "2024-01-12",
            specialEffect: "Character revival point — Revive available after day change if fallen in quest"
        },
        {
            id: 30,
            name: "Whispering Market",
            category: "kingdom",
            governingBody: "Aetherlyn Kingdom",
            description: "Di bawah cahaya mentari yang menyinari menara-menara kerajaan, terbentang Whispering Market — lautan kehidupan yang berdenyut tanpa henti di jantung Aetherlyn. Suara tawa, teriakan pedagang, dan denting logam koin menyatu dalam simfoni yang tak pernah berhenti. Udara dipenuhi aroma roti panggang hangat, bunga kering dari barat daya, dan rempah-rempah eksotis dari penjuru benua. Tenda-tenda berjajar di sepanjang jalan berbatu, kainnya berkilau diterpa angin. Di sinilah kehidupan kerajaan berputar—bukan hanya sebagai pusat perdagangan, tetapi sebagai tempat kisah bermula, rahasia bersembunyi, dan takdir saling bersinggungan. Whispering Market hidup dalam hangatnya pagi maupun heningnya malam, sebab di sini setiap langkah adalah kisah dan setiap tatapan adalah janji. 'Mereka yang berjalan di antara keramaian, tengah menapaki jalan menuju legenda.'",
            features: [
                "Grand Trade Stalls",
                "Exotic Spice Vendors",
                "Rare Goods Market",
                "Hidden Black Traders",
                "Food & Bakery District",
                "Cloth & Relic Shops",
                "Information Brokers",
                "Night Bazaar",
                "Coin Exchange Circle"
            ],
            danger: "low",
            magic: "low",
            activity: 98,
            exploration: 100,
            members: 139,
            discovered: "2024-01-03"
        },
        {
            id: 31,
            name: "The Fools Masquerade",
            category: "others",
            governingBody: "Tróupe de Fools",
            description: "Sebuah arena hiburan penuh warna yang di siang hari tampak seperti panggung seni, musik, dan tarian topeng—tempat tawa, cahaya, dan ilusi menyambut setiap pengunjung. Namun ketika malam jatuh, tempat ini berubah menjadi kantor kontrak bayangan yang tak tercatat di buku mana pun. Di balik tirai beludru dan lantai panggung tersembunyi, para anggota Tróupe de Fools beroperasi sebagai mercenary anonim. Sistem rahasia bernama 'Wall of Whispers' menjadi pusat pengajuan kontrak—di mana siapapun dapat menawarkan quest berbasis ATC, bukan EXP. Identitas lenyap, hanya topeng dan bisikan yang berbicara. 'Topeng menari, kebenaran tersembunyi.'",
            features: [
                "Masquerade Performance Stage",
                "Hall of Illusions",
                "Hidden Underground Office",
                "Wall of Whispers",
                "Mercenary Contract System",
                "Secret Passage Network",
                "Masked Operative Chamber",
                "Silent Observation Balcony",
                "Encrypted Message Board"
            ],
            danger: "high",
            magic: "high",
            activity: 20,
            exploration:50,
            members: 53,
            discovered: "2025-02-28"
        },
        {
            id: 32,
            name: "Vel’tharion Arena",
            category: "kingdom",
            governingBody: "Aetherlyn Kingdom",
            description: "Sebuah arena megah yang berdiri di pusat Kerajaan Aetherlyn, tempat sejarah dan kehormatan saling beradu dalam dentuman sihir dan benturan logam. Pilar-pilar batu raksasa menjulang mengelilingi lingkaran pertempuran, terukir simbol-simbol kuno yang memancarkan cahaya jingga redup setiap pertarungan dimulai. Tanah arena dilingkari lingkaran sihir penjaga yang menstabilkan energi dan mencegah kehancuran fatal. Dari tribun melingkar, sorak penonton menggema laksana badai, menyaksikan duel, ujian, dan lahirnya legenda. Di sinilah para petualang membuktikan nilai sejati—bukan hanya melalui kekuatan, melainkan melalui tekad yang tak tergoyahkan. 'Di bawah sorot mata bintang dan bayang istana, hanya mereka yang berani jatuh yang pantas disebut pemenang.'",
            features: [
                "Runic Stone Pillars",
                "Magic Safety Barrier",
                "Central Battle Ring",
                "Training Grounds",
                "Rank Ascension Platform",
                "Viewing Tribunes",
                "Champion’s Gate",
                "Underground Preparation Chambers",
                "Honor Sigil Floor"
            ],
            danger: "medium",
            magic: "high",
            activity: 90,
            exploration: 55,
            members: 61,
            discovered: "2024-02-02",
            specialFunction: [
                "Official Battle Arena",
                "Adventurer Rank Test Center",
                "Duel Grounds",
                "Public & Guild Tournaments"
            ]
        },
        {
            id: 33,
            name: "Ravengard Continent",
            category: "other",
            governingBody: "None (Wild Territory)",
            description: "Sebuah benua yang terletak di bagian selatan benua utama Aetherlyn. Daratan ini hanya mengenal pertarungan dan dahaga akan kemenangan. Terbagi menjadi tiga wilayah ekstrem: Wilayah Es di utara yang dipenuhi hamparan gletser dekat Southern Frozen Continent, Wilayah Hutan di tengah yang lebat dengan hujan deras serta flora-fauna langka, dan Wilayah Gurun di selatan yang berupa padang pasir tandus bersuhu ekstrim. Ravengard tidak mengenal belas kasih, tidak memandang kasta ataupun rupa — semua sama di hadapan hukum alam dan tanah yang terus bergejolak oleh konflik. Monster tingkat tinggi kerap bermunculan, memicu quest kelas tinggi hingga darurat. Ini adalah tanah dimana hanya ada satu hukum: bertahan atau binasa.",
            subRegions: [
                "Frostreach (Ice Region)",
                "Verdantfall (Forest Region)",
                "Scorchveil (Desert Region)"
            ],
            features: [
                "Unstable Terrain",
                "Extreme Climate Zones",
                "High-Level Monsters",
                "Ancient Battlefields",
                "Unknown Ruins",
                "Forbidden Relics"
            ],
            danger: "extreme",
            magic: "unstable",
            activity: 96,
            exploration: 88,
            members: 0,
            discovered: "2024-02-06",
            specialFunction: [
                "High-Risk Quest Zone",
                "Emergency Suppression Missions",
                "Legendary Monster Hunts",
                "Survival Trials"
            ]
        },
        {
            id: 34,
            name: "Altair Beach",
            category: "water",
            governingBody: "Aetherlyn Kingdom",
            description: "Di ufuk senja berwarna keemasan, ombak lembut Pantai Altair menari di atas pasir putih yang berkilau seperti serbuk bintang. Angin berhembus pelan membawa aroma asin laut bercampur wangi bunga liar dari bukit karang. Cahaya matahari yang perlahan tenggelam memantulkan warna jingga, merah muda, dan ungu di permukaan air, menciptakan lukisan hidup antara laut dan langit. Di tepi pantai berdiri sebuah toko roti kecil yang selalu hangat, menyajikan roti segar dan kopi penenang bagi para petualang. Di atas bukit karang, sebuah paviliun indah dengan lentera hangat menjadi titik terbaik untuk menyaksikan matahari terbenam, menghadirkan ketenangan yang jarang ditemukan di tempat lain.",
            subRegions: [
                "Altair Shoreline",
                "Cliff Pavilion",
                "Sunset Ridge",
                "Coastal Bakery"
            ],
            features: [
                "White Star-like Sand",
                "Golden Sunset View",
                "Calm Waves",
                "Bakery & Coffee Spot",
                "Observation Pavilion"
            ],
            danger: "low",
            magic: "passive",
            activity: 68,
            exploration: 42,
            members: 65,
            discovered: "2025-12-08",
            specialFunction: [
                "Rest Point",
                "Safe Zone",
                "Meeting Area",
                "Romantic / Memory Spot",
                "Recovery Spot (Slow)"
            ]
        },
        {
            id: 35,
            name: "Lembah Orion",
            category: "others",
            governingBody: "Aetherlyn Kingdom",
            description: "Sebuah jantung ketenangan alam di barat laut Aetherlyn, tempat angin berbisik di antara rerumputan perak dan hamparan bunga liar bercahaya lembut. Di malam hari, langit di atas Orion terbuka lapang, memperlihatkan lautan bintang yang memancar terang seolah lebih dekat dari biasanya. Suasana yang hening, ringan, dan penuh kedamaian membuat banyak petualang datang bukan untuk bertarung, melainkan untuk meletakkan beban dunia dan mengingat kembali alasan mereka berjalan. Bagi penduduk sekitar, Orion adalah lambang dua hal: ketenangan yang memulihkan dan harapan yang abadi.",
            features: [
                "Clear Night Sky",
                "Glowing Wildflowers",
                "Soft Whispering Wind",
                "Healing Atmosphere",
                "Perfect Stargazing Spot"
            ],
            danger: "very low",
            magic: "celestial-passive",
            activity: 22,
            exploration: 55,
            members: 51,
            discovered: "2025-12-08",
        },
        {
            id: 36,
            name: "Guild The Veilborn",
            category: "guild",
            governingBody: "Kaelrion Dzarven (Current Leader)",
            description: "Mansion tersembunyi di tengah hutan tenggara Abyssal Forest yang menjadi markas The Veilborn - penjaga tabir yang melindungi batas antara dunia manusia dan kekuatan tak tersentuh. Bukan sekadar penyihir atau ksatria, mereka adalah penjaga keseimbangan yang tak terikat cahaya maupun kegelapan. 'Kami tidak menyembah terang. Kami tidak tunduk pada gelap. Kami menjaga batas yang memisahkan keduanya.'",
            features: ["Balance Keepers", "Secret Order", "Ancient Library", "Training Grounds", "Ritual Chambers", "Forest Sanctuary", "Boundary Protection"],
            danger: "medium",
            magic: "ancient",
            activity: 45,
            exploration: 85,
            members: 28,
            discovered: "2023-11-15"
        },
        {
            id: 37,
            name: "Clan Shadow Garden",
            category: "guild",
            governingBody: "Lucas Hanz Lux Cliodhna (Current Leader)",
            leader: "HL (Founder & Supreme Overseer)",
            location: "Abyssal Northvale, far beyond the Northern edges of Aetherlyn's known continents",
            description: `
        Jauh dari peradaban Aetherlyn, tersembunyi di sebuah lembah yang tampak mati bagi dunia luar, berdiri markas utama Shadow Garden. 
        Tempat ini adalah rahang dunia yang menganga ke arah langit beku utara—sebuah rekahan besar yang bukan terbentuk oleh alam, 
        tetapi oleh sesuatu yang jauh lebih tua dan lebih gelap. Badai salju menari tanpa suara, seolah menghalangi manusia untuk melihat 
        apa yang bersemayam di bawah kedalaman es.

        Abyssal Northvale bukan sekadar lembah. Ia adalah jantung denyut nadi Shadow Garden—tempat cahaya enggan tinggal dan rahasia tumbuh 
        seperti akar gelap yang merambat tanpa henti. Hanya mereka yang terpilih yang mampu menuruni kedalaman tanpa kehilangan diri mereka sendiri.
    `,
            status: "Ultra-Secret — Undiscovered by the world",
            danger: "high",
            magic: "ancient",
            activity: 95,
            exploration: 0,
            members: 25,
        },
        {
            id: 38,
            name: "Clan Azure Frostwings",
            category: "guild",
            governingBody: "Hinari Raikatsu (Current Leader)",
            baseRegion: "Lake Liraell",
            status: "Active",
            activity: 80,
            exploration: 70,
            members: 17,
            danger: "low",
            magic: "high",
            description: `
                Di dunia yang dipenuhi badai, api, dan kegelapan, Clan Azure Frostwings lahir dari keyakinan
                bahwa kebebasan adalah hak yang tidak bisa dirantai—bahkan oleh es abadi sekalipun.

                Mereka adalah para pengembara langit, penjelajah puncak bersalju, dan pejuang yang tidak
                membiarkan tanah mengikat langkah mereka. Seperti burung yang menari di bawah aurora,
                Frostwings hidup dalam kebersamaan, kehormatan, dan rasa bebas yang mutlak.

                Lambang sayap es biru mereka menjadi simbol keteguhan seperti gletser, kejernihan seperti
                kristal salju, dan kebebasan yang mengalir bagaikan angin utara.
            `,
            features: ["Aurora Roost", "Skybound Training Grounds", "Frostwing Lodges", "Hall of Feathers"]
        },
        {
            id: 39,
            name: "Black Market",
            category: "others",
            governingBody: "Unknown",
            dangerLevel: "High",
            magicLevel: "Ancient",
            activity: 10,
            exploration: 1,
            members: 54,

            description: `
                Setelah lenyapnya tiga Penguasa Black Market, kekuasaan lama runtuh tanpa suara.
                Tidak ada perang terbuka. Tidak ada deklarasi. Hanya satu fakta yang tersisa:
                Black Market kini hanya memiliki satu tubuh, satu kehendak.

                Pusat perdagangan gelap ini bergerak jauh di bawah reruntuhan Arc Ville,
                bersembunyi di balik lapisan tanah dan sejarah yang telah dilupakan.
                Jalur masuknya tidak pernah sama dua kali—berpindah mengikuti arus kekuasaan
                dan kehendak pengelolanya yang baru.

                Lorong-lorong sempit dipenuhi lampu minyak dengan cahaya redup,
                menjadi satu-satunya penerangan di kedalaman pasar.
                Suasananya sunyi, hampir sakral—hanya dipecah oleh
                bunyi koin yang berpindah tangan dan langkah berat para homunculus penjaga.

                Tidak ada teriakan pedagang. Tidak ada tawar-menawar keras.
                Semua transaksi terjadi dengan suara rendah, tatapan tajam,
                dan kesepakatan yang mengikat lebih kuat dari sumpah.
                `,


            features: ["Shadow Corridors", "Silent Exchange Halls", "Vault of No Return",],
        },
        {
            id: 40,
            name: "Animaux Virtice: Tundra Sanctuary",
            category: "others",
            governingBody: "None",
            description: "To be Announced",
            features: ["To be Announced"],
            danger: "low",
            magic: "medium",
            activity: 78,
            exploration: 100,
            members: 77,
            discovered: "2024-04-10"
        },
        {
            id: 41,
            name: "Alun-alun Kerajaan",
            category: "kingdom",
            governingBody: "Aetherlyn Kingdom",
            description: `Sebagai saksi keagungan Kerajaan Aetherlyn, Alun-Alun Kerajaan berdiri gagah
        dengan hamparan luas bebatuan yang tersusun rapi, seolah setiap pijakannya
        diukir khusus untuk langkah para pahlawan.

        Di pusat alun-alun, sebuah air mancur raksasa memancarkan air jernih
        yang memantulkan cahaya bak serpihan bintang, menjadi simbol kemurnian
        dan persatuan kerajaan.`,
            features: ["Water Fountain", "Lantern Ring", "Flowers"],
            danger: "low",
            magic: "medium",
            activity: 80,
            exploration: 100,
            members: 160,
            discovered: "2024-04-10"
        },
        {
            id: 42,
            name: "Anomalus Termination Unit",
            category: "others",
            governingBody: "Null",
            description: `Anomalus Termination Unit adalah unit khusus kerajaan yang dibuat untuk menangani kasus dengan level kelas atas.
            Memiliki markas pusat di sebuah pulau yang sangat jauh dari dataran Aetherlyn, yaitu pulau Twilight. Merupakan daratan gerhana yang tak bisa dijamah oleh siapapun.`,
            features: ["Ten Systems of Ecplipse", "Anomali Extermination"],
            danger: "extreme",
            magic: "ancient",
            activity: 1,
            exploration: 100,
            members: 0,
            discovered: "2025-06-15"
        },
        {
            id: 43,
            name: "Irondale Fortress",
            category: "kingdom",
            governingBody: "Aetherlyn Kingdom",
            description: "Benteng pertahanan megah yang menjulang di perbatasan, menjadi jantung pertahanan dan simbol kekuasaan Kerajaan Aetherlyn. Dibangun dari batu abu kelam yang berkilau, dengan pintu gerbang baja mithril raksasa dan patung ksatria penjaga. Dentingan pedang dan langkah pasukan menggema di halaman luasnya, sementara bendera kerajaan berkibar gagah di setiap menara. 'Sang Aegis Aetherlyn, penjaga dalam simbol kekuatan.'",
            features: ["Mithril Gates", "Royal Garrison", "Training Grounds", "Defensive Walls", "Knight Statues", "War Council Hall", "Armory"],
            danger: "medium",
            magic: "medium",
            activity: 80,
            exploration: 40,
            members: 83,
            discovered: "2025-02-15"
        },
        {
            id: 44,
            name: "Ravengard Continent",
            category: "others",
            governingBody: "None",
            description: "Benua selatan Aetherlyn yang terbagi menjadi 3 wilayah ekstrim: Wilayah Es (gletser beku), Wilayah Hutan (hujan lebat dengan flora/fauna langka), dan Wilayah Gurun (padang pasir bersuhu tinggi). Tanah pertarungan tanpa belas kasih dimana hukum alam berlaku sepenuhnya. Sering muncul monster tingkat tinggi berpotensi bencana, memicu quest darurat. 'Sebuah tanah pertarungan dimana hanya ada kemenangan atau kebinasaan.'",
            features: ["Ice Region", "Forest Region", "Desert Region", "High-Level Monsters", "Emergency Quests", "Survival Challenges", "Extreme Climates"],
            danger: "high",
            magic: "high",
            activity: 80,
            exploration: 95,
            members: 119,
            discovered: "2024-09-10"
        },
        {
            id: 45,
            name: "Blazing Ice Bar & Hotel",
            category: "kingdom",
            governingBody: "Aetherlyn Kingdom",
            description: "Sebuah bar di area barat ibukota aetherlyn yang merupakan bar pertama dan tertua dalam sejarah kerajaan. Ia dibangun langsung oleh raja pertama panji bersama pengikutnya yang setia. Kini raja pertama sudah tiada, namun warisannya tetap bertahan. Dengan simbol balok es yang terbakar, bar blazing ice bagaikan simbol harapan ditengah dingin dan kejamnya dunia. Dimana semua kisah heroik akan bermula dan terus berkembang, ia akan menyambut setiap petualang yang datang",
            features: ["Historical Tavern", "First King's Legacy", "Flaming Ice Symbol", "Adventurer's Hub", "Story Archives", "Royal Brews"],
            danger: "high",
            magic: "medium",
            activity: 80,
            exploration: 90,
            members: "105",
            discovered: "2024-09-10"
        }
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


