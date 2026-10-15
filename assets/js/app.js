// --- Default Categories Template ---
const DEFAULT_CATEGORIES = [
    {
        id: 'erp-tech',
        name: 'ERP Deployment & Tech Prep (Software & Data)',
        shortName: 'ERP & Software',
        icon: 'ph-database',
        accent: 'indigo',
        description: 'Production builds, database schemas, offline runtimes & UAT templates'
    },
    {
        id: 'hardware-gear',
        name: 'Hardware & Field Gear',
        shortName: 'Hardware',
        icon: 'ph-laptop',
        accent: 'cyan',
        description: 'On-site server room essentials, networking tools & backup storage'
    },
    {
        id: 'work-client',
        name: 'Work & Client Essentials',
        shortName: 'Client Docs',
        icon: 'ph-identification-badge',
        accent: 'amber',
        description: 'Identification, physical sign-off documents & travel funds'
    },
    {
        id: 'clothing',
        name: 'Clothing & Apparel',
        shortName: 'Clothing',
        icon: 'ph-t-shirt',
        accent: 'emerald',
        description: 'Site formal wear, comfortable footwear, loungewear & weather layer'
    },
    {
        id: 'toiletries-travel',
        name: 'Toiletries, Health & Travel',
        shortName: 'Health & Travel',
        icon: 'ph-first-aid-kit',
        accent: 'rose',
        description: 'Personal care, basic medications & highway transit comfort'
    }
];

// --- Default ERP Implementation Items (27 Items) ---
const DEFAULT_ERP_ITEMS = [
    { id: 'erp-1', categoryId: 'erp-tech', title: 'Latest ERP codebase & production build backup (offline copy on USB + cloud)', priority: 'critical', note: 'Verify Git release tag & offline zip integrity before leaving', completed: false },
    { id: 'erp-2', categoryId: 'erp-tech', title: 'Database schema scripts, initial seed data & migration SQL scripts', priority: 'critical', note: 'Include rollback scripts & clean production baseline dump', completed: false },
    { id: 'erp-3', categoryId: 'erp-tech', title: 'Local server installers / runtime stack (XAMPP/WAMP, PHP, DB engine, Node/Docker)', priority: 'critical', note: 'Crucial in case client site internet in Sahiwal is slow or restricted', completed: false },
    { id: 'erp-4', categoryId: 'erp-tech', title: 'Client master data templates (Chart of Accounts, Inventory items, Opening balances)', priority: 'critical', note: 'Pre-validated CSV/Excel import sheets for Finance & Store teams', completed: false },
    { id: 'erp-5', categoryId: 'erp-tech', title: 'SSL certificates, license keys, & environment configuration files (.env / config)', priority: 'critical', note: 'Store securely in encrypted vault + offline backup drive', completed: false },
    { id: 'erp-6', categoryId: 'erp-tech', title: 'Implementation & UAT sign-off checklists / user training guides', priority: 'essential', note: 'Role-wise SOPs for Admin, Accounts, Inventory & Sales operators', completed: false },

    { id: 'hw-1', categoryId: 'hardware-gear', title: 'Primary development laptop + original power charger', priority: 'critical', note: 'Check battery health & disable forced OS auto-reboots', completed: false },
    { id: 'hw-2', categoryId: 'hardware-gear', title: 'High-speed USB flash drives (at least 2) & external backup SSD/HDD', priority: 'critical', note: 'Format one drive as FAT32/exFAT for universal server compatibility', completed: false },
    { id: 'hw-3', categoryId: 'hardware-gear', title: 'Ethernet cable (Cat6) & USB-to-Ethernet adapter', priority: 'critical', note: 'Essential for direct local server rack / switch / LAN configuration', completed: false },
    { id: 'hw-4', categoryId: 'hardware-gear', title: 'Portable Wi-Fi device (Evo/MiFi) or mobile hotspot backup data package', priority: 'essential', note: 'Activate heavy weekly data bundle for emergency remote patches', completed: false },
    { id: 'hw-5', categoryId: 'hardware-gear', title: 'Multi-plug extension cord / surge protector', priority: 'essential', note: 'Crucial for on-site server rooms & training rooms with limited sockets', completed: false },
    { id: 'hw-6', categoryId: 'hardware-gear', title: 'Power bank (10,000mAh+) & phone charging cables', priority: 'essential', note: 'Keep fully charged before departure', completed: false },
    { id: 'hw-7', categoryId: 'hardware-gear', title: 'Notebook, pens, & whiteboard markers for workflow mapping', priority: 'standard', note: 'Helpful during on-site process training with department heads', completed: false },

    { id: 'wc-1', categoryId: 'work-client', title: 'CNIC (Original + 2 photocopies) & company ID card', priority: 'critical', note: 'Required for hotel check-in & factory/office gate entry', completed: false },
    { id: 'wc-2', categoryId: 'work-client', title: 'Printed deployment schedule, UAT sign-off sheets, & stakeholder contact list', priority: 'essential', note: 'Keep hard copies in folder for formal milestone sign-offs', completed: false },
    { id: 'wc-3', categoryId: 'work-client', title: 'Cash (for local transport/incidentals) + ATM/debit cards', priority: 'essential', note: 'Keep smaller denominations handy for local commute & meals', completed: false },

    { id: 'cl-1', categoryId: 'clothing', title: '5-6 Business casual / formal shirts or crisp kurtas for client site days', priority: 'essential', note: 'Breathable cotton fabrics recommended for daytime warmth', completed: false },
    { id: 'cl-2', categoryId: 'clothing', title: '3-4 Trousers / chinos / formal jeans', priority: 'essential', note: 'Comfortable fit for full-day implementation & training sessions', completed: false },
    { id: 'cl-3', categoryId: 'clothing', title: '1 Light jacket or sweater', priority: 'standard', note: 'For late evening travel or high AC inside on-site server rooms', completed: false },
    { id: 'cl-4', categoryId: 'clothing', title: 'Casual nightwear / loungewear (3-4 sets)', priority: 'standard', note: 'For hotel stay after work hours', completed: false },
    { id: 'cl-5', categoryId: 'clothing', title: 'Undergarments & socks (7-8 pairs)', priority: 'essential', note: '1 pair per day + 1 extra backup', completed: false },
    { id: 'cl-6', categoryId: 'clothing', title: 'Comfortable formal shoes (for long hours on-site) + casual slippers/sandals', priority: 'essential', note: 'Ensure formal shoes are broken-in for walking across client facility', completed: false },

    { id: 'th-1', categoryId: 'toiletries-travel', title: 'Toothbrush, toothpaste, deodorant, comb, face wash & grooming kit', priority: 'essential', note: 'Pack in a leak-proof pouch', completed: false },
    { id: 'th-2', categoryId: 'toiletries-travel', title: 'Basic first-aid & meds (Panadol, antacids/digestion meds, band-aids, throat lozenges)', priority: 'essential', note: 'Helpful during long speaking/training sessions & out-of-town dining', completed: false },
    { id: 'th-3', categoryId: 'toiletries-travel', title: 'Hand sanitizer & pocket wet wipes', priority: 'standard', note: 'Useful after handling dusty server racks & cabling', completed: false },
    { id: 'th-4', categoryId: 'toiletries-travel', title: 'Water bottle & travel snacks for the road', priority: 'standard', note: 'Stay hydrated during highway travel', completed: false },
    { id: 'th-5', categoryId: 'toiletries-travel', title: 'Sunglasses & small travel microfiber towel', priority: 'standard', note: 'For daytime travel glare', completed: false }
];

// --- Short Business Trip Preset Items ---
const SHORT_BUSINESS_ITEMS = [
    { id: 'sb-1', categoryId: 'hardware-gear', title: 'Primary Laptop + Charger + Portable Power Bank', priority: 'critical', note: 'Fully charge before departure', completed: false },
    { id: 'sb-2', categoryId: 'erp-tech', title: 'Presentation Deck, Demo Environment & Offline Backup on USB', priority: 'critical', note: 'Test offline mode in case meeting room Wi-Fi is slow', completed: false },
    { id: 'sb-3', categoryId: 'work-client', title: 'Original CNIC, Visiting Cards & Printed Meeting Agenda', priority: 'critical', note: 'Keep in quick-access laptop sleeve', completed: false },
    { id: 'sb-4', categoryId: 'clothing', title: 'Formal Business Attire + Comfortable Dress Shoes', priority: 'essential', note: '1 outfit per day + 1 spare shirt', completed: false },
    { id: 'sb-5', categoryId: 'toiletries-travel', title: 'Travel Grooming Kit, Panadol & Bottled Water', priority: 'standard', note: 'Compact carry-on pouch', completed: false }
];

// --- Default 7-Day Sahiwal Meetings ---
const DEFAULT_SAHIWAL_MEETINGS = [
    { id: 'mtg-1', dayNumber: 1, title: 'Morning Departure: Lahore to Sahiwal (N-5 Highway)', startTime: '08:30', durationMins: 210, location: 'N-5 National Highway Transit', attendees: 'Implementation Lead', type: 'logistics', notes: 'Confirm USB backups, laptop charge & hotspot data before departure.', completed: false },
    { id: 'mtg-2', dayNumber: 1, title: 'Client Kickoff Meeting & On-Premise Server Room Audit', startTime: '14:30', durationMins: 120, location: 'Sahiwal Client HQ — Conference & Server Room', attendees: 'Plant Manager, IT Admin, Project Sponsor', type: 'milestone', notes: 'Inspect LAN switch ports, static IP allocation, UPS backup & server specs.', completed: false },
    { id: 'mtg-3', dayNumber: 2, title: 'Local Server Stack & Production Database Deployment', startTime: '09:30', durationMins: 180, location: 'On-Site Server Room', attendees: 'ERP Lead, Client Network Admin', type: 'technical', notes: 'Install Apache/PHP/MySQL stack, import baseline schema & configure daily dump script.', completed: false },
    { id: 'mtg-4', dayNumber: 2, title: 'Client Workstation LAN Access & Firewall Testing', startTime: '14:00', durationMins: 120, location: 'Accounts & Store Floors', attendees: 'IT Support & Department Leads', type: 'technical', notes: 'Test browser access from all client terminals and configure printer drivers.', completed: false },
    { id: 'mtg-5', dayNumber: 3, title: 'Chart of Accounts & Opening Trial Balance Import', startTime: '09:30', durationMins: 150, location: 'Finance Department Room', attendees: 'Chief Accountant, Finance Team', type: 'milestone', notes: 'Import validated COA CSV templates and reconcile opening GL balances.', completed: false },
    { id: 'mtg-6', dayNumber: 3, title: 'Inventory Master Items & Opening Stock Valuation Upload', startTime: '13:30', durationMins: 180, location: 'Main Warehouse / Store Office', attendees: 'Store In-Charge, Inventory Auditor', type: 'technical', notes: 'Verify item units, categories, and initial weighted average unit costs.', completed: false },
    { id: 'mtg-7', dayNumber: 4, title: 'Purchase Return Subledger & Unit Cost Valuation Audit', startTime: '10:00', durationMins: 150, location: 'Finance & Procurement Office', attendees: 'Senior Accountant, Procurement Head', type: 'technical', notes: 'Test Purchase Return postings, glItemUnitCost() accuracy, and GL impact.', completed: false },
    { id: 'mtg-8', dayNumber: 4, title: 'Role Permissions & Approval Workflow Configuration', startTime: '14:30', durationMins: 90, location: 'Admin Boardroom', attendees: 'Operations Director, HR/Admin Lead', type: 'client', notes: 'Lock user roles, voucher approval limits, and audit log tracking.', completed: false },
    { id: 'mtg-9', dayNumber: 5, title: 'Store & Procurement Team Hands-On Training', startTime: '09:30', durationMins: 150, location: 'Client Training Room', attendees: 'Storekeepers, Purchase Officers, Gate Staff', type: 'training', notes: 'Train on GRN creation, Purchase Orders, Purchase Returns, and Stock Issuance.', completed: false },
    { id: 'mtg-10', dayNumber: 5, title: 'Finance & Accounts Team ERP Workshop', startTime: '14:00', durationMins: 150, location: 'Finance Conference Room', attendees: 'Accountants, Billing Clerks, Internal Auditor', type: 'training', notes: 'Train on Journal Vouchers, Bank Reconciliation, Ledger Reports & Trial Balance.', completed: false },
    { id: 'mtg-11', dayNumber: 6, title: 'Live Parallel Run & Real-Time Transaction Monitoring', startTime: '09:00', durationMins: 240, location: 'All Operational Floors', attendees: 'All Department Operators', type: 'milestone', notes: 'Shadow users entering live daily vouchers; resolve any UI or report edge-cases.', completed: false },
    { id: 'mtg-12', dayNumber: 6, title: 'End-of-Day GL & Inventory Reconciliation Review', startTime: '15:00', durationMins: 120, location: 'CFO Office', attendees: 'CFO, Chief Accountant, Store Head', type: 'client', notes: 'Cross-check Day 1 parallel run reports against physical vouchers.', completed: false },
    { id: 'mtg-13', dayNumber: 7, title: 'Final UAT Acceptance & Go-Live Sign-Off Meeting', startTime: '10:00', durationMins: 120, location: 'Executive Boardroom', attendees: 'CEO / Director, CFO, IT Head', type: 'milestone', notes: 'Collect signed UAT completion certificates, hand over admin credentials & backup SOPs.', completed: false },
    { id: 'mtg-14', dayNumber: 7, title: 'Checkout & Return Journey: Sahiwal to Lahore', startTime: '15:30', durationMins: 210, location: 'Sahiwal → Lahore', attendees: 'Implementation Lead', type: 'logistics', notes: 'Take final offline SQL snapshot on encrypted USB before leaving client site.', completed: false }
];

// --- Storage Keys & Global State ---
const MULTI_TRIP_STORAGE_KEY = 'erp_multi_trips_v2';
const ACTIVE_TRIP_ID_KEY = 'erp_active_trip_id_v2';
const THEME_KEY = 'sahiwal_erp_theme_v1';

let trips = [];
let activeTripId = '';
let currentFilter = 'all';
let searchQuery = '';
let currentWorkspaceMode = 'checklist';
let selectedPlannerDay = 'all';
let weatherCache = {};

// --- Helper: Get Current Active Trip Object ---
function getActiveTrip() {
    return trips.find(t => t.id === activeTripId) || trips[0];
}

function createDefaultSahiwalTrip() {
    return {
        id: 'trip-sahiwal-default',
        name: 'Sahiwal ERP Deployment & Packing Checklist',
        origin: 'Lahore',
        destination: 'Sahiwal',
        startDate: '2026-10-17',
        departureTime: '08:30',
        durationDays: 7,
        scope: 'ERP Setup & UAT',
        categories: JSON.parse(JSON.stringify(DEFAULT_CATEGORIES)),
        items: JSON.parse(JSON.stringify(DEFAULT_ERP_ITEMS)),
        meetings: JSON.parse(JSON.stringify(DEFAULT_SAHIWAL_MEETINGS))
    };
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadAllTrips();
    renderAll();
    fetchLiveWeather();

    document.addEventListener('click', (e) => {
        const dropdown = document.getElementById('moreActionsDropdown');
        const menu = document.getElementById('dropdownMenu');
        if (dropdown && !dropdown.contains(e.target)) {
            menu.classList.add('hidden');
        }
    });
});

function loadAllTrips() {
    try {
        const raw = localStorage.getItem(MULTI_TRIP_STORAGE_KEY);
        const savedActive = localStorage.getItem(ACTIVE_TRIP_ID_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed) && parsed.length > 0) {
                trips = parsed;
                activeTripId = (savedActive && trips.some(t => t.id === savedActive))
                    ? savedActive
                    : trips[0].id;
                return;
            }
        }
    } catch (e) {
        console.error('Error loading trips from localStorage:', e);
    }
    trips = [createDefaultSahiwalTrip()];
    activeTripId = trips[0].id;
    saveAllTrips();
}

function saveAllTrips() {
    try {
        localStorage.setItem(MULTI_TRIP_STORAGE_KEY, JSON.stringify(trips));
        localStorage.setItem(ACTIVE_TRIP_ID_KEY, activeTripId);
    } catch (e) {
        console.error('Error saving trips:', e);
    }
}

// --- REAL AUTO-UPDATING WEATHER (Open-Meteo Free Geocoding + Forecast API) ---
async function fetchLiveWeather(forceRefresh = false) {
    const trip = getActiveTrip();
    if (!trip || !trip.destination) return;

    const city = trip.destination.trim();
    const cacheKey = city.toLowerCase();
    const weatherTextEl = document.getElementById('weatherText');
    const weatherIconEl = document.getElementById('weatherIcon');
    const refreshIcon = document.getElementById('weatherRefreshIcon');

    if (!forceRefresh && weatherCache[cacheKey]) {
        weatherTextEl.textContent = weatherCache[cacheKey];
        return;
    }

    weatherTextEl.textContent = `Loading ${city} weather...`;
    if (refreshIcon) refreshIcon.classList.add('animate-spin');

    try {
        // Step 1: Geocode the destination city name to Latitude & Longitude
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;
        const geoRes = await fetch(geoUrl);
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
            weatherTextEl.textContent = `${city}: ~30°C / 19°C (Est)`;
            if (refreshIcon) refreshIcon.classList.remove('animate-spin');
            return;
        }

        const { latitude, longitude, name } = geoData.results[0];

        // Step 2: Fetch real-time temperature + daily high/low from Open-Meteo
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=auto`;
        const weatherRes = await fetch(weatherUrl);
        const weatherData = await weatherRes.json();

        const currentTemp = Math.round(weatherData.current?.temperature_2m ?? 28);
        const maxTemp = Math.round(weatherData.daily?.temperature_2m_max?.[0] ?? 31);
        const minTemp = Math.round(weatherData.daily?.temperature_2m_min?.[0] ?? 19);
        const code = weatherData.current?.weather_code ?? 0;

        // Pick icon based on WMO weather code
        if (code === 0 || code === 1) {
            weatherIconEl.className = 'ph-fill ph-sun text-amber-400 text-base';
        } else if (code >= 2 && code <= 3) {
            weatherIconEl.className = 'ph-fill ph-cloud-sun text-amber-300 text-base';
        } else if (code >= 51 && code <= 82) {
            weatherIconEl.className = 'ph-fill ph-cloud-rain text-cyan-400 text-base';
        } else {
            weatherIconEl.className = 'ph-fill ph-cloud text-slate-300 text-base';
        }

        const formatted = `${name} Live: ${currentTemp}°C (H:${maxTemp}° / L:${minTemp}°)`;
        weatherCache[cacheKey] = formatted;
        weatherTextEl.textContent = formatted;
        if (forceRefresh) showToast(`Updated live weather for ${name}`);
    } catch (err) {
        // Graceful offline fallback
        weatherTextEl.textContent = `${city}: ~31°C Day / 19°C Night (Offline)`;
    } finally {
        if (refreshIcon) refreshIcon.classList.remove('animate-spin');
    }
}

// --- Theme Handling ---
function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const htmlEl = document.documentElement;
    if (savedTheme === 'light') {
        htmlEl.classList.remove('dark');
    } else {
        htmlEl.classList.add('dark');
    }
    updateThemeButton();

    document.getElementById('themeToggle').addEventListener('click', () => {
        htmlEl.classList.toggle('dark');
        const isDark = htmlEl.classList.contains('dark');
        localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
        updateThemeButton();
    });
}

function updateThemeButton() {
    const isDark = document.documentElement.classList.contains('dark');
    const icon = document.getElementById('themeIcon');
    const text = document.getElementById('themeText');
    if (isDark) {
        icon.className = 'ph-fill ph-sun text-amber-400 text-sm';
        text.textContent = 'Light';
    } else {
        icon.className = 'ph-fill ph-moon text-indigo-600 text-sm';
        text.textContent = 'Dark';
    }
}

// --- Multi-Trip Switcher & Custom Trip Modal ---
function switchTrip(tripId) {
    activeTripId = tripId;
    selectedPlannerDay = 'all';
    saveAllTrips();
    renderAll();
    fetchLiveWeather();
    const trip = getActiveTrip();
    showToast(`Switched to: ${trip.name}`);
}

function openTripModal(mode = 'create') {
    const modal = document.getElementById('tripModal');
    const modeInput = document.getElementById('tripFormMode');
    const templateBlock = document.getElementById('tripTemplateBlock');
    const titleEl = document.getElementById('tripModalTitle');

    modeInput.value = mode;

    if (mode === 'edit') {
        const trip = getActiveTrip();
        titleEl.innerHTML = `<i class="ph-fill ph-sliders-horizontal text-indigo-500"></i><span>Edit Trip Details & Duration</span>`;
        document.getElementById('tripNameInput').value = trip.name;
        document.getElementById('tripOriginInput').value = trip.origin || 'Lahore';
        document.getElementById('tripDestInput').value = trip.destination || '';
        document.getElementById('tripDateInput').value = trip.startDate || '2026-10-17';
        document.getElementById('tripTimeInput').value = trip.departureTime || '08:30';
        document.getElementById('tripDurationInput').value = trip.durationDays || 7;
        document.getElementById('tripScopeInput').value = trip.scope || '';
        templateBlock.classList.add('hidden');
    } else {
        titleEl.innerHTML = `<i class="ph-fill ph-airplane-takeoff text-indigo-500"></i><span>Create New Custom Trip & Planner</span>`;
        document.getElementById('tripNameInput').value = '';
        document.getElementById('tripOriginInput').value = 'Lahore';
        document.getElementById('tripDestInput').value = '';
        document.getElementById('tripDateInput').value = new Date().toISOString().split('T')[0];
        document.getElementById('tripTimeInput').value = '09:00';
        document.getElementById('tripDurationInput').value = 5;
        document.getElementById('tripScopeInput').value = 'On-Site Visit & Implementation';
        document.getElementById('tripTemplateInput').value = 'erp';
        templateBlock.classList.remove('hidden');
    }

    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeTripModal() {
    const modal = document.getElementById('tripModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function saveTripForm(e) {
    e.preventDefault();
    const mode = document.getElementById('tripFormMode').value;
    const name = document.getElementById('tripNameInput').value.trim();
    const origin = document.getElementById('tripOriginInput').value.trim() || 'Lahore';
    const destination = document.getElementById('tripDestInput').value.trim();
    const startDate = document.getElementById('tripDateInput').value;
    const departureTime = document.getElementById('tripTimeInput').value || '08:30';
    const durationDays = Math.max(1, Math.min(30, parseInt(document.getElementById('tripDurationInput').value, 10) || 5));
    const scope = document.getElementById('tripScopeInput').value.trim() || 'Business Trip';

    if (!name || !destination) return;

    if (mode === 'edit') {
        const trip = getActiveTrip();
        trip.name = name;
        trip.origin = origin;
        trip.destination = destination;
        trip.startDate = startDate;
        trip.departureTime = departureTime;
        trip.durationDays = durationDays;
        trip.scope = scope;
        saveAllTrips();
        closeTripModal();
        renderAll();
        fetchLiveWeather(true);
        showToast('Trip details updated');
    } else {
        const preset = document.getElementById('tripTemplateInput').value;
        let initialItems = [];
        let initialMeetings = [];

        if (preset === 'erp') {
            initialItems = JSON.parse(JSON.stringify(DEFAULT_ERP_ITEMS));
            initialMeetings = [
                { id: 'mtg-' + Date.now() + '-1', dayNumber: 1, title: `Departure: ${origin} to ${destination}`, startTime: departureTime, durationMins: 180, location: `${origin} → ${destination}`, attendees: 'Trip Lead', type: 'logistics', notes: 'Verify all Critical Go-Live items before leaving.', completed: false },
                { id: 'mtg-' + Date.now() + '-2', dayNumber: 1, title: `${destination} Client Kickoff & Server Audit`, startTime: '14:00', durationMins: 120, location: `${destination} Client Site`, attendees: 'Stakeholders & IT Team', type: 'milestone', notes: 'Initial deployment & environment check.', completed: false }
            ];
        } else if (preset === 'business') {
            initialItems = JSON.parse(JSON.stringify(SHORT_BUSINESS_ITEMS));
            initialMeetings = [
                { id: 'mtg-' + Date.now() + '-1', dayNumber: 1, title: `Travel: ${origin} to ${destination}`, startTime: departureTime, durationMins: 150, location: 'Transit', attendees: 'Self', type: 'logistics', notes: 'Carry laptop & documents in cabin/hand bag.', completed: false }
            ];
        }

        const newTrip = {
            id: 'trip-' + Date.now(),
            name,
            origin,
            destination,
            startDate,
            departureTime,
            durationDays,
            scope,
            categories: JSON.parse(JSON.stringify(DEFAULT_CATEGORIES)),
            items: initialItems,
            meetings: initialMeetings
        };

        trips.push(newTrip);
        activeTripId = newTrip.id;
        selectedPlannerDay = 'all';
        saveAllTrips();
        closeTripModal();
        renderAll();
        fetchLiveWeather(true);
        showToast(`Created new trip: ${name}`);
    }
}

function deleteCurrentTrip() {
    document.getElementById('dropdownMenu').classList.add('hidden');
    if (trips.length <= 1) {
        showToast('Cannot delete the only trip. Create another trip first or use Reset.');
        return;
    }
    const current = getActiveTrip();
    trips = trips.filter(t => t.id !== current.id);
    activeTripId = trips[0].id;
    saveAllTrips();
    renderAll();
    fetchLiveWeather();
    showToast(`Deleted trip: ${current.name}`);
}

// --- Custom Category Creation ---
function openCategoryModal() {
    document.getElementById('catNameInput').value = '';
    document.getElementById('catShortInput').value = '';
    document.getElementById('catDescInput').value = '';
    const modal = document.getElementById('categoryModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeCategoryModal() {
    const modal = document.getElementById('categoryModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function saveCustomCategory(e) {
    e.preventDefault();
    const name = document.getElementById('catNameInput').value.trim();
    const shortName = document.getElementById('catShortInput').value.trim();
    const accent = document.getElementById('catAccentInput').value;
    const description = document.getElementById('catDescInput').value.trim() || 'Custom trip requirements & items';

    if (!name || !shortName) return;

    const trip = getActiveTrip();
    const newCatId = 'cat-' + Date.now();
    trip.categories.push({
        id: newCatId,
        name,
        shortName,
        icon: 'ph-stack',
        accent,
        description
    });

    saveAllTrips();
    closeCategoryModal();
    renderAll();
    showToast(`Category "${shortName}" added`);
}

// --- Dynamic Planner Days Generator (Based on Trip Start Date + Duration) ---
function getTripPlannerDays(trip) {
    const days = [];
    const accents = ['indigo', 'cyan', 'emerald', 'amber', 'rose'];
    const baseDate = trip.startDate ? new Date(trip.startDate + 'T00:00:00') : new Date();

    for (let d = 1; d <= (trip.durationDays || 7); d++) {
        const dt = new Date(baseDate);
        dt.setDate(baseDate.getDate() + (d - 1));
        const dateStr = dt.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

        let defaultTitle = d === 1
            ? `Arrival & Kickoff in ${trip.destination}`
            : d === trip.durationDays
                ? `Final Sign-Off & Return to ${trip.origin}`
                : `On-Site Operations & Meetings — Day ${d}`;

        days.push({
            dayNumber: d,
            id: `day-${d}`,
            label: `Day ${d} • ${dateStr}`,
            title: defaultTitle,
            subtitle: `${trip.destination} (${trip.scope || 'Field Schedule'})`,
            accent: accents[(d - 1) % accents.length]
        });
    }
    return days;
}

// --- Workspace Mode Switcher ---
function setWorkspaceMode(mode) {
    currentWorkspaceMode = mode;
    const grid = document.getElementById('workspaceGrid');
    const checklistCol = document.getElementById('checklistColumn');
    const plannerCol = document.getElementById('plannerColumn');

    ['checklist', 'planner', 'split'].forEach(m => {
        const btn = document.getElementById(`mode-${m}`);
        if (m === mode) {
            btn.className = 'workspace-tab flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap bg-indigo-600 text-white shadow-sm cursor-pointer';
        } else {
            btn.className = 'workspace-tab flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#131c30] cursor-pointer';
        }
    });

    if (mode === 'checklist') {
        grid.className = 'grid grid-cols-1 gap-6';
        checklistCol.classList.remove('hidden');
        plannerCol.classList.add('hidden');
    } else if (mode === 'planner') {
        grid.className = 'grid grid-cols-1 gap-6';
        checklistCol.classList.add('hidden');
        plannerCol.classList.remove('hidden');
    } else if (mode === 'split') {
        grid.className = 'grid grid-cols-1 xl:grid-cols-2 gap-6 items-start';
        checklistCol.classList.remove('hidden');
        plannerCol.classList.remove('hidden');
    }
    renderAll();
}

// --- Priority Badge Helper ---
function getPriorityBadge(priority) {
    switch (priority) {
        case 'critical':
            return `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-rose-500/15 text-rose-500 dark:text-rose-400 border border-rose-500/30">
                        <i class="ph-fill ph-flame"></i> Critical for Go-Live
                    </span>`;
        case 'essential':
            return `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-amber-500/15 text-amber-600 dark:text-amber-300 border border-amber-500/30">
                        <i class="ph-fill ph-star"></i> Essential
                    </span>`;
        default:
            return `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        Standard
                    </span>`;
    }
}

function getCategoryColorClasses(accent) {
    const map = {
        indigo: {
            iconBg: 'bg-indigo-500/15 text-indigo-500 dark:text-indigo-400 border-indigo-500/30',
            bar: 'bg-indigo-500',
            badge: 'bg-indigo-500/15 text-indigo-500 dark:text-indigo-400 border border-indigo-500/30'
        },
        cyan: {
            iconBg: 'bg-cyan-500/15 text-cyan-500 dark:text-cyan-400 border-cyan-500/30',
            bar: 'bg-cyan-500',
            badge: 'bg-cyan-500/15 text-cyan-500 dark:text-cyan-400 border border-cyan-500/30'
        },
        amber: {
            iconBg: 'bg-amber-500/15 text-amber-500 dark:text-amber-400 border-amber-500/30',
            bar: 'bg-amber-500',
            badge: 'bg-amber-500/15 text-amber-500 dark:text-amber-400 border border-amber-500/30'
        },
        emerald: {
            iconBg: 'bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 border-emerald-500/30',
            bar: 'bg-emerald-500',
            badge: 'bg-emerald-500/15 text-emerald-500 dark:text-emerald-400 border border-emerald-500/30'
        },
        rose: {
            iconBg: 'bg-rose-500/15 text-rose-500 dark:text-rose-400 border-rose-500/30',
            bar: 'bg-rose-500',
            badge: 'bg-rose-500/15 text-rose-500 dark:text-rose-400 border border-rose-500/30'
        }
    };
    return map[accent] || map.indigo;
}

// --- Master Render Function ---
function renderAll() {
    renderTripHeader();
    populateCategorySelect();
    populatePlannerDaySelect();
    updateProgressStats();
    renderCategories();
    renderPlanner();
}

function renderTripHeader() {
    const trip = getActiveTrip();
    const selector = document.getElementById('tripSelector');
    selector.innerHTML = trips.map(t => `<option value="${t.id}" ${t.id === trip.id ? 'selected' : ''} class="bg-white dark:bg-[#0f1626] text-slate-900 dark:text-white">${escapeHtml(t.name)} (${escapeHtml(t.destination)})</option>`).join('');

    document.getElementById('tripMainTitle').textContent = trip.name;
    document.getElementById('tripRouteBadge').innerHTML = `<i class="ph-bold ph-navigation-arrow"></i> ${escapeHtml(trip.origin)} → ${escapeHtml(trip.destination)}`;

    const dtFormatted = trip.startDate
        ? new Date(trip.startDate + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
        : 'Date TBD';
    document.getElementById('tripDateBadge').innerHTML = `<i class="ph-bold ph-calendar-blank"></i> ${dtFormatted} • ${formatTime12h(trip.departureTime)} (${trip.durationDays} Days)`;
    document.getElementById('tripScopeBadge').innerHTML = `<i class="ph-fill ph-database text-indigo-400"></i> ${escapeHtml(trip.scope || 'Business Trip')}`;
    document.getElementById('plannerTabTitle').textContent = `Business & Meeting Planner (${trip.durationDays} Days)`;
    document.getElementById('plannerHeaderTitle').innerHTML = `<i class="ph-fill ph-calendar-star text-emerald-400 text-xl"></i><span>${escapeHtml(trip.destination)} ${trip.durationDays}-Day Business & Meeting Planner</span>`;

    // Calculate live countdown days
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dep = trip.startDate ? new Date(trip.startDate + 'T00:00:00') : today;
    const diffDays = Math.round((dep - today) / (1000 * 60 * 60 * 24));
    const cdEl = document.getElementById('countdownBadge');
    if (diffDays > 0) {
        cdEl.innerHTML = `<i class="ph-fill ph-clock-countdown mr-1"></i> Departure in ${diffDays} ${diffDays === 1 ? 'Day' : 'Days'}`;
    } else if (diffDays === 0) {
        cdEl.innerHTML = `<i class="ph-fill ph-airplane-takeoff mr-1"></i> Departing Today!`;
    } else {
        cdEl.innerHTML = `<i class="ph-fill ph-check-circle mr-1"></i> Active / Ongoing Trip`;
    }
}

// --- Time & Duration Helpers ---
function formatTime12h(time24) {
    if (!time24 || !time24.includes(':')) return '09:00 AM';
    const [hStr, mStr] = time24.split(':');
    let h = parseInt(hStr, 10);
    const m = parseInt(mStr, 10);
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return `${h}:${String(m).padStart(2, '0')} ${ampm}`;
}

function calculateEndTime24(startTime24, durationMins) {
    if (!startTime24 || !startTime24.includes(':')) return '10:30';
    const [hStr, mStr] = startTime24.split(':');
    const totalStartMins = parseInt(hStr, 10) * 60 + parseInt(mStr, 10);
    const totalEndMins = (totalStartMins + parseInt(durationMins || 60, 10)) % (24 * 60);
    const endH = Math.floor(totalEndMins / 60);
    const endM = totalEndMins % 60;
    return `${String(endH).padStart(2, '0')}:${String(endM).padStart(2, '0')}`;
}

function formatDurationLabel(mins) {
    const m = parseInt(mins || 0, 10);
    const hrs = Math.floor(m / 60);
    const rem = m % 60;
    if (hrs > 0 && rem > 0) return `${hrs}h ${rem}m`;
    if (hrs > 0) return `${hrs}h`;
    return `${rem}m`;
}

function getMeetingTypeBadge(type) {
    switch (type) {
        case 'milestone':
            return `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-rose-500/15 text-rose-500 dark:text-rose-400 border border-rose-500/30"><i class="ph-fill ph-flag-banner"></i> Go-Live Milestone</span>`;
        case 'technical':
            return `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-indigo-500/15 text-indigo-500 dark:text-indigo-400 border border-indigo-500/30"><i class="ph-fill ph-terminal-window"></i> Tech & DB</span>`;
        case 'training':
            return `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-amber-500/15 text-amber-600 dark:text-amber-300 border border-amber-500/30"><i class="ph-fill ph-users-three"></i> User Training</span>`;
        case 'client':
            return `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30"><i class="ph-fill ph-handshake"></i> Client Meeting</span>`;
        default:
            return `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700"><i class="ph-fill ph-car"></i> Logistics</span>`;
    }
}

// --- Render Dynamic Multi-Day Business & Meeting Planner ---
function renderPlanner() {
    const trip = getActiveTrip();
    const meetings = trip.meetings || [];
    const plannerDays = getTripPlannerDays(trip);

    const totalMeetings = meetings.length;
    const completedMeetings = meetings.filter(m => m.completed).length;
    const totalMins = meetings.reduce((acc, m) => acc + (parseInt(m.durationMins, 10) || 0), 0);
    document.getElementById('meetingStatsText').textContent = `${completedMeetings}/${totalMeetings} Sessions`;
    document.getElementById('totalPlannedHoursText').textContent = `${formatDurationLabel(totalMins)} Planned`;

    // Render Day Filter Pills
    const dayFilterEl = document.getElementById('dayFilterContainer');
    const allBtnClass = selectedPlannerDay === 'all'
        ? 'bg-emerald-600 text-white shadow-xs'
        : 'bg-slate-100 dark:bg-[#131c30] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800';

    dayFilterEl.innerHTML = `
        <button onclick="setPlannerDay('all')" class="px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer ${allBtnClass}">
            All ${trip.durationDays} Days (${totalMeetings})
        </button>
        ${plannerDays.map(d => {
            const count = meetings.filter(m => Number(m.dayNumber) === d.dayNumber).length;
            const active = selectedPlannerDay === String(d.dayNumber);
            const cls = active
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-[#131c30] text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800';
            return `
                <button onclick="setPlannerDay('${d.dayNumber}')" class="px-3 py-1.5 rounded-xl text-xs font-semibold transition whitespace-nowrap cursor-pointer ${cls}">
                    Day ${d.dayNumber} (${count})
                </button>
            `;
        }).join('')}
    `;

    // Render Day Cards in Col-6 / Col-6 Grid
    const daysContainer = document.getElementById('plannerDaysContainer');
    const visibleDays = selectedPlannerDay === 'all'
        ? plannerDays
        : plannerDays.filter(d => String(d.dayNumber) === String(selectedPlannerDay));

    daysContainer.innerHTML = visibleDays.map((day, idx) => {
        const dayMeetings = meetings
            .filter(m => Number(m.dayNumber) === day.dayNumber)
            .sort((a, b) => (a.startTime || '').localeCompare(b.startTime || ''));

        const doneCount = dayMeetings.filter(m => m.completed).length;
        const dayMins = dayMeetings.reduce((acc, m) => acc + (parseInt(m.durationMins, 10) || 0), 0);
        const colors = getCategoryColorClasses(day.accent);
        const spanFull = (selectedPlannerDay !== 'all' || (idx === 0 && currentWorkspaceMode !== 'split')) ? 'lg:col-span-2' : '';

        const sessionsHtml = dayMeetings.length === 0 ? `
            <div class="inner-box-card p-6 text-center rounded-xl border border-dashed border-slate-200 dark:border-slate-800 text-slate-400 text-xs">
                No sessions scheduled for Day ${day.dayNumber}. Click <strong>+</strong> above to add a meeting or task.
            </div>
        ` : dayMeetings.map(m => {
            const endTime24 = calculateEndTime24(m.startTime, m.durationMins);
            const timeRange = `${formatTime12h(m.startTime)} – ${formatTime12h(endTime24)}`;
            const durBadge = formatDurationLabel(m.durationMins);

            return `
                <div class="inner-box-card group p-4 rounded-xl border transition-all ${
                    m.completed
                        ? 'bg-slate-50/70 dark:bg-[#131c30]/50 border-slate-200/50 dark:border-slate-800/60 opacity-70'
                        : 'bg-slate-50/50 dark:bg-[#131c30] border-slate-200/90 dark:border-slate-800'
                }">
                    <div class="flex items-start justify-between gap-3">
                        <label class="checkbox-wrapper flex items-start gap-3 cursor-pointer flex-1 select-none">
                            <input type="checkbox" class="sr-only" ${m.completed ? 'checked' : ''} onchange="toggleMeeting('${m.id}')">
                            <div class="w-5 h-5 mt-0.5 rounded-md border-2 border-slate-400 dark:border-slate-600 flex items-center justify-center transition-colors shrink-0">
                                <svg class="w-3.5 h-3.5 text-white transform scale-0 opacity-0 transition-all duration-150 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div class="flex-1 min-w-0">
                                <div class="flex flex-wrap items-center gap-2 mb-1.5">
                                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-mono font-bold bg-indigo-500/15 text-indigo-500 dark:text-indigo-400 border border-indigo-500/30">
                                        <i class="ph-bold ph-clock"></i> ${timeRange}
                                    </span>
                                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-mono font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                                        <i class="ph-bold ph-hourglass-medium"></i> ${durBadge}
                                    </span>
                                    ${getMeetingTypeBadge(m.type)}
                                </div>

                                <h4 class="text-sm font-bold leading-snug ${m.completed ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-900 dark:text-white'}">
                                    ${escapeHtml(m.title)}
                                </h4>

                                <div class="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-xs text-slate-500 dark:text-slate-400">
                                    ${m.location ? `<span class="flex items-center gap-1"><i class="ph-fill ph-map-pin text-rose-400"></i> ${escapeHtml(m.location)}</span>` : ''}
                                    ${m.attendees ? `<span class="flex items-center gap-1"><i class="ph-fill ph-users text-amber-400"></i> ${escapeHtml(m.attendees)}</span>` : ''}
                                </div>

                                ${m.notes ? `
                                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-1.5 flex items-center gap-1">
                                        <i class="ph ph-info text-slate-400 shrink-0"></i>
                                        <span>${escapeHtml(m.notes)}</span>
                                    </p>
                                ` : ''}
                            </div>
                        </label>

                        <div class="flex flex-col items-end gap-1.5 no-print shrink-0">
                            <div class="flex items-center gap-1 bg-slate-200/70 dark:bg-[#0f1626] p-1 rounded-lg border border-slate-300 dark:border-slate-700">
                                <button onclick="adjustMeetingDuration('${m.id}', -15)" class="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 transition cursor-pointer" title="Shorten by 15 mins">
                                    -15m
                                </button>
                                <button onclick="adjustMeetingDuration('${m.id}', 15)" class="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 hover:bg-white dark:hover:bg-slate-800 transition cursor-pointer" title="Extend by 15 mins">
                                    +15m
                                </button>
                            </div>
                            <div class="flex items-center gap-1">
                                <button onclick="openMeetingModal('${m.id}')" class="p-1.5 rounded-lg text-slate-400 hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer" title="Edit Session">
                                    <i class="ph ph-pencil-simple text-sm"></i>
                                </button>
                                <button onclick="deleteMeeting('${m.id}')" class="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition cursor-pointer" title="Delete Session">
                                    <i class="ph ph-trash text-sm"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        return `
            <div class="category-card panel-card ${spanFull} bg-white dark:bg-[#0f1626] rounded-2xl p-5 sm:p-6 shadow-md border border-slate-200 dark:border-slate-800/90 flex flex-col justify-between">
                <div>
                    <div class="flex items-start justify-between gap-4 mb-4">
                        <div class="flex items-center gap-3">
                            <div class="w-11 h-11 rounded-xl border ${colors.iconBg} flex items-center justify-center shrink-0">
                                <i class="ph-fill ph-calendar-blank text-xl"></i>
                            </div>
                            <div>
                                <div class="flex items-center gap-2">
                                    <span class="text-xs font-mono font-bold uppercase tracking-wider text-indigo-500 dark:text-indigo-400">${escapeHtml(day.label)}</span>
                                    <span class="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-[#131c30] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80">
                                        ${formatDurationLabel(dayMins)}
                                    </span>
                                </div>
                                <h3 class="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-tight mt-0.5">
                                    ${escapeHtml(day.title)}
                                </h3>
                                <p class="text-xs text-slate-500 dark:text-slate-400">
                                    ${escapeHtml(day.subtitle)}
                                </p>
                            </div>
                        </div>

                        <div class="flex items-center gap-2 shrink-0">
                            <span class="text-xs font-bold px-2.5 py-1 rounded-lg ${colors.badge}">
                                ${doneCount}/${dayMeetings.length} Done
                            </span>
                            <button onclick="openMeetingModal(null, ${day.dayNumber})" class="no-print w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-[#131c30] dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center justify-center transition cursor-pointer" title="Add session to Day ${day.dayNumber}">
                                <i class="ph-bold ph-plus text-sm"></i>
                            </button>
                        </div>
                    </div>

                    <div class="space-y-3">
                        ${sessionsHtml}
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function setPlannerDay(dayNum) {
    selectedPlannerDay = String(dayNum);
    renderPlanner();
}

function toggleMeeting(id) {
    const trip = getActiveTrip();
    const mtg = trip.meetings.find(m => m.id === id);
    if (mtg) {
        mtg.completed = !mtg.completed;
        saveAllTrips();
        renderPlanner();
    }
}

function adjustMeetingDuration(id, deltaMins) {
    const trip = getActiveTrip();
    const mtg = trip.meetings.find(m => m.id === id);
    if (mtg) {
        const next = Math.max(15, (parseInt(mtg.durationMins, 10) || 60) + deltaMins);
        mtg.durationMins = next;
        saveAllTrips();
        renderPlanner();
        showToast(`Duration updated to ${formatDurationLabel(next)}`);
    }
}

function deleteMeeting(id) {
    const trip = getActiveTrip();
    trip.meetings = trip.meetings.filter(m => m.id !== id);
    saveAllTrips();
    renderPlanner();
    showToast('Session removed from planner');
}

function populatePlannerDaySelect() {
    const select = document.getElementById('meetingDayInput');
    if (!select) return;
    const trip = getActiveTrip();
    const plannerDays = getTripPlannerDays(trip);
    select.innerHTML = plannerDays.map(d => `<option value="${d.dayNumber}">${escapeHtml(d.label)} — ${escapeHtml(d.title)}</option>`).join('');
}

function updateEndTimePreview() {
    const start = document.getElementById('meetingStartInput').value || '09:30';
    const dur = parseInt(document.getElementById('meetingDurationInput').value, 10) || 60;
    const end24 = calculateEndTime24(start, dur);
    const previewEl = document.getElementById('calculatedEndPreview');
    if (previewEl) {
        previewEl.textContent = `${formatTime12h(end24)} (${formatDurationLabel(dur)})`;
    }
}

function openMeetingModal(editId = null, defaultDayNum = 1) {
    const trip = getActiveTrip();
    populatePlannerDaySelect();
    const modal = document.getElementById('meetingModal');

    if (editId) {
        const mtg = trip.meetings.find(m => m.id === editId);
        if (!mtg) return;
        document.getElementById('editMeetingId').value = mtg.id;
        document.getElementById('meetingTitleInput').value = mtg.title;
        document.getElementById('meetingDayInput').value = mtg.dayNumber || 1;
        document.getElementById('meetingTypeInput').value = mtg.type || 'client';
        document.getElementById('meetingStartInput').value = mtg.startTime || '09:30';
        document.getElementById('meetingDurationInput').value = mtg.durationMins || 90;
        document.getElementById('meetingLocationInput').value = mtg.location || '';
        document.getElementById('meetingAttendeesInput').value = mtg.attendees || '';
        document.getElementById('meetingNotesInput').value = mtg.notes || '';
        document.getElementById('meetingModalTitle').innerHTML = `<i class="ph-fill ph-pencil-simple text-emerald-500"></i><span>Edit Session & Time Duration</span>`;
    } else {
        document.getElementById('editMeetingId').value = '';
        document.getElementById('meetingTitleInput').value = '';
        document.getElementById('meetingDayInput').value = defaultDayNum;
        document.getElementById('meetingTypeInput').value = 'milestone';
        document.getElementById('meetingStartInput').value = '10:00';
        document.getElementById('meetingDurationInput').value = 90;
        document.getElementById('meetingLocationInput').value = `${trip.destination} Client Site`;
        document.getElementById('meetingAttendeesInput').value = '';
        document.getElementById('meetingNotesInput').value = '';
        document.getElementById('meetingModalTitle').innerHTML = `<i class="ph-fill ph-calendar-plus text-emerald-500"></i><span>Schedule Meeting / Implementation Task</span>`;
    }
    updateEndTimePreview();
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeMeetingModal() {
    const modal = document.getElementById('meetingModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function saveMeeting(e) {
    e.preventDefault();
    const trip = getActiveTrip();
    const editId = document.getElementById('editMeetingId').value;
    const title = document.getElementById('meetingTitleInput').value.trim();
    const dayNumber = parseInt(document.getElementById('meetingDayInput').value, 10) || 1;
    const type = document.getElementById('meetingTypeInput').value;
    const startTime = document.getElementById('meetingStartInput').value;
    const durationMins = parseInt(document.getElementById('meetingDurationInput').value, 10) || 60;
    const location = document.getElementById('meetingLocationInput').value.trim();
    const attendees = document.getElementById('meetingAttendeesInput').value.trim();
    const notes = document.getElementById('meetingNotesInput').value.trim();

    if (!title) return;

    if (editId) {
        const existing = trip.meetings.find(m => m.id === editId);
        if (existing) {
            existing.title = title;
            existing.dayNumber = dayNumber;
            existing.type = type;
            existing.startTime = startTime;
            existing.durationMins = durationMins;
            existing.location = location;
            existing.attendees = attendees;
            existing.notes = notes;
            showToast('Meeting schedule updated');
        }
    } else {
        trip.meetings.push({
            id: 'mtg-' + Date.now(),
            dayNumber,
            title,
            type,
            startTime,
            durationMins,
            location,
            attendees,
            notes,
            completed: false
        });
        showToast(`Added session to Day ${dayNumber}`);
    }

    saveAllTrips();
    closeMeetingModal();
    renderPlanner();
}

// --- Update Overall & Mini Progress Indicators ---
function updateProgressStats() {
    const trip = getActiveTrip();
    const items = trip.items || [];
    const categories = trip.categories || [];

    const total = items.length;
    const completed = items.filter(i => i.completed).length;
    const pct = total === 0 ? 0 : Math.round((completed / total) * 100);
    const criticalPending = items.filter(i => i.priority === 'critical' && !i.completed).length;

    const badge = document.getElementById('ReadinessBadge');
    badge.textContent = `${pct}%`;
    if (pct === 100 && total > 0) {
        badge.className = 'w-14 h-14 rounded-2xl bg-emerald-500 text-white font-extrabold text-xl flex items-center justify-center shadow-lg shadow-emerald-500/25 shrink-0 animate-complete';
    } else {
        badge.className = 'w-14 h-14 rounded-2xl bg-indigo-600 text-white font-extrabold text-xl flex items-center justify-center shadow-lg shadow-indigo-600/30 shrink-0';
    }

    document.getElementById('completedCount').textContent = completed;
    document.getElementById('totalCount').textContent = total;
    document.getElementById('mainProgressBar').style.width = `${pct}%`;

    const critEl = document.getElementById('criticalRemainingText');
    if (criticalPending === 0 && total > 0) {
        critEl.innerHTML = `<i class="ph-fill ph-check-circle mr-0.5"></i>All Critical Go-Live items ready!`;
        critEl.className = 'text-emerald-500 dark:text-emerald-400 font-semibold';
    } else {
        critEl.textContent = `${criticalPending} Critical Go-Live ${criticalPending === 1 ? 'item' : 'items'} pending`;
        critEl.className = 'text-rose-500 dark:text-rose-400 font-medium';
    }

    const statusPill = document.getElementById('statusPill');
    if (pct === 0) {
        statusPill.textContent = 'Not Started';
        statusPill.className = 'text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-[#131c30] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80';
    } else if (pct < 50) {
        statusPill.textContent = 'In Progress';
        statusPill.className = 'text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-300 border border-amber-500/30';
    } else if (pct < 100) {
        statusPill.textContent = 'Almost Ready';
        statusPill.className = 'text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/15 text-indigo-500 dark:text-indigo-300 border border-indigo-500/30';
    } else {
        statusPill.textContent = `Ready for ${trip.destination}!`;
        statusPill.className = 'text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-500 dark:text-emerald-300 border border-emerald-500/30';
    }

    // Render Mini Category Pills
    const miniContainer = document.getElementById('miniCategoryStats');
    miniContainer.innerHTML = categories.map(cat => {
        const catItems = items.filter(i => i.categoryId === cat.id);
        const catDone = catItems.filter(i => i.completed).length;
        const catTotal = catItems.length;
        const isAllDone = catTotal > 0 && catDone === catTotal;

        return `
            <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border ${
                isAllDone 
                    ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-600 dark:text-emerald-300' 
                    : 'bg-slate-100 dark:bg-[#131c30] border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-slate-300'
            }">
                <i class="ph-fill ${isAllDone ? 'ph-check-circle text-emerald-400' : cat.icon}"></i>
                <span>${escapeHtml(cat.shortName)}:</span>
                <span class="font-bold text-slate-900 dark:text-white">${catDone}/${catTotal}</span>
            </div>
        `;
    }).join('');
}

// --- Render Categories & Filtered Items ---
function renderCategories() {
    const trip = getActiveTrip();
    const items = trip.items || [];
    const categories = trip.categories || [];

    const container = document.getElementById('categoriesContainer');
    const emptyState = document.getElementById('emptyState');

    const query = searchQuery.trim().toLowerCase();
    let totalVisibleItems = 0;

    const html = categories.map((cat, index) => {
        const allCatItems = items.filter(i => i.categoryId === cat.id);
        const completedCatCount = allCatItems.filter(i => i.completed).length;
        const totalCatCount = allCatItems.length;
        const catPct = totalCatCount === 0 ? 0 : Math.round((completedCatCount / totalCatCount) * 100);

        const filteredItems = allCatItems.filter(item => {
            if (currentFilter === 'pending' && item.completed) return false;
            if (currentFilter === 'completed' && !item.completed) return false;
            if (currentFilter === 'critical' && item.priority !== 'critical') return false;

            if (query) {
                const matchTitle = item.title.toLowerCase().includes(query);
                const matchNote = (item.note || '').toLowerCase().includes(query);
                if (!matchTitle && !matchNote) return false;
            }
            return true;
        });

        totalVisibleItems += filteredItems.length;

        if (filteredItems.length === 0 && (currentFilter !== 'all' || query !== '')) {
            return '';
        }

        const colors = getCategoryColorClasses(cat.accent);
        const spanFullClass = (index === 0 && currentWorkspaceMode !== 'split') ? 'lg:col-span-2' : '';
        const innerGridClass = (index === 0 && currentWorkspaceMode !== 'split')
            ? 'grid grid-cols-1 md:grid-cols-2 gap-3'
            : 'space-y-3';

        const itemsHtml = filteredItems.length === 0 ? `
            <div class="inner-box-card col-span-full p-5 text-center rounded-xl border border-dashed border-slate-200 dark:border-slate-800 text-xs text-slate-400">
                No items in this category yet. Click <strong>+</strong> to add your needs.
            </div>
        ` : filteredItems.map(item => `
            <div class="inner-box-card group flex items-start justify-between gap-3 p-4 rounded-xl border transition-all ${
                item.completed 
                    ? 'bg-slate-50/70 dark:bg-[#131c30]/50 border-slate-200/50 dark:border-slate-800/60 opacity-65' 
                    : 'bg-slate-50/40 dark:bg-[#131c30] border-slate-200/90 dark:border-slate-800'
            }">
                <label class="checkbox-wrapper flex items-start gap-3.5 cursor-pointer flex-1 select-none">
                    <input 
                        type="checkbox" 
                        class="sr-only" 
                        ${item.completed ? 'checked' : ''} 
                        onchange="toggleItem('${item.id}')"
                    >
                    <div class="w-5 h-5 mt-0.5 rounded-md border-2 border-slate-400 dark:border-slate-600 flex items-center justify-center transition-colors shrink-0">
                        <svg class="w-3.5 h-3.5 text-white transform scale-0 opacity-0 transition-all duration-150 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="text-sm font-bold leading-snug transition-all ${
                            item.completed 
                                ? 'line-through text-slate-400 dark:text-slate-500' 
                                : 'text-slate-900 dark:text-slate-100'
                        }">
                            ${escapeHtml(item.title)}
                        </div>
                        <div class="mt-2">
                            ${getPriorityBadge(item.priority)}
                        </div>
                        ${item.note ? `
                            <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 flex items-center gap-1.5">
                                <i class="ph ph-info text-slate-400 shrink-0"></i>
                                <span>${escapeHtml(item.note)}</span>
                            </p>
                        ` : ''}
                    </div>
                </label>

                <!-- Item Edit/Delete Actions -->
                <div class="flex items-center gap-1 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity no-print shrink-0">
                    <button onclick="openEditModal('${item.id}')" class="p-1.5 rounded-lg text-slate-400 hover:text-indigo-400 hover:bg-slate-200/50 dark:hover:bg-slate-800 transition cursor-pointer" title="Edit Item">
                        <i class="ph ph-pencil-simple text-sm"></i>
                    </button>
                    <button onclick="deleteItem('${item.id}')" class="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition cursor-pointer" title="Delete Item">
                        <i class="ph ph-trash text-sm"></i>
                    </button>
                </div>
            </div>
        `).join('');

        return `
            <div class="category-card panel-card ${spanFullClass} bg-white dark:bg-[#0f1626] rounded-2xl p-5 sm:p-6 shadow-md border border-slate-200 dark:border-slate-800/90 flex flex-col justify-between">
                <div>
                    <!-- Category Header -->
                    <div class="flex items-start justify-between gap-4 mb-3">
                        <div class="flex items-center gap-3.5">
                            <div class="w-11 h-11 rounded-xl border ${colors.iconBg} flex items-center justify-center shrink-0">
                                <i class="ph-fill ${cat.icon} text-xl"></i>
                            </div>
                            <div>
                                <h3 class="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-tight">
                                    ${escapeHtml(cat.name)}
                                </h3>
                                <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                    ${escapeHtml(cat.description)}
                                </p>
                            </div>
                        </div>

                        <div class="flex items-center gap-2 shrink-0">
                            <span class="text-xs font-mono font-bold px-2.5 py-1 rounded-lg ${colors.badge}">
                                ${completedCatCount}/${totalCatCount} (${catPct}%)
                            </span>
                            <button onclick="openAddModal('${cat.id}')" class="no-print w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-[#131c30] dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center justify-center transition cursor-pointer" title="Add item to this category">
                                <i class="ph-bold ph-plus text-sm"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Category Mini Progress Bar -->
                    <div class="w-full h-1 bg-slate-100 dark:bg-[#131c30] rounded-full overflow-hidden mb-5">
                        <div class="h-full ${colors.bar} transition-all duration-300" style="width: ${catPct}%"></div>
                    </div>

                    <!-- Inner Boxed Items Grid -->
                    <div class="${innerGridClass}">
                        ${itemsHtml}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = html;

    if (totalVisibleItems === 0 && (currentFilter !== 'all' || query !== '')) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
    }
}

// --- Item Interactions ---
function toggleItem(id) {
    const trip = getActiveTrip();
    const item = trip.items.find(i => i.id === id);
    if (item) {
        item.completed = !item.completed;
        saveAllTrips();
        renderAll();
    }
}

function deleteItem(id) {
    const trip = getActiveTrip();
    trip.items = trip.items.filter(i => i.id !== id);
    saveAllTrips();
    renderAll();
    showToast('Item removed from checklist');
}

// --- Filter & Search ---
function setFilter(filterType) {
    currentFilter = filterType;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const isMatch = btn.getAttribute('data-filter') === filterType;
        if (isMatch) {
            btn.className = 'filter-btn px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition whitespace-nowrap bg-indigo-600 text-white shadow-sm flex items-center gap-1.5 cursor-pointer';
        } else {
            const isCrit = btn.getAttribute('data-filter') === 'critical';
            btn.className = isCrit
                ? 'filter-btn px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition whitespace-nowrap text-rose-500 hover:bg-rose-500/10 flex items-center gap-1.5 cursor-pointer'
                : 'filter-btn px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition whitespace-nowrap text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-[#131c30] cursor-pointer';
        }
    });
    renderCategories();
}

function handleSearch(val) {
    searchQuery = val;
    const clearBtn = document.getElementById('clearSearchBtn');
    if (val.trim().length > 0) {
        clearBtn.classList.remove('hidden');
    } else {
        clearBtn.classList.add('hidden');
    }
    renderCategories();
}

function clearSearch() {
    const input = document.getElementById('searchInput');
    input.value = '';
    handleSearch('');
}

function resetFilters() {
    clearSearch();
    setFilter('all');
}

// --- Modal Management (Add / Edit Item) ---
function populateCategorySelect() {
    const trip = getActiveTrip();
    const select = document.getElementById('itemCategoryInput');
    if (!select) return;
    select.innerHTML = (trip.categories || []).map(c => `<option value="${c.id}">${escapeHtml(c.name)}</option>`).join('');
}

function openAddModal(defaultCategoryId = null) {
    const trip = getActiveTrip();
    populateCategorySelect();
    const fallbackCat = defaultCategoryId || (trip.categories[0]?.id || 'erp-tech');

    document.getElementById('editItemId').value = '';
    document.getElementById('itemTitleInput').value = '';
    document.getElementById('itemCategoryInput').value = fallbackCat;
    document.getElementById('itemPriorityInput').value = 'critical';
    document.getElementById('itemNoteInput').value = '';
    document.getElementById('modalTitle').innerHTML = `<i class="ph-fill ph-plus-circle text-indigo-500"></i><span>Add Packing / Deployment Need</span>`;

    const modal = document.getElementById('itemModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => document.getElementById('itemTitleInput').focus(), 50);
}

function openEditModal(id) {
    const trip = getActiveTrip();
    populateCategorySelect();
    const item = trip.items.find(i => i.id === id);
    if (!item) return;

    document.getElementById('editItemId').value = item.id;
    document.getElementById('itemTitleInput').value = item.title;
    document.getElementById('itemCategoryInput').value = item.categoryId;
    document.getElementById('itemPriorityInput').value = item.priority;
    document.getElementById('itemNoteInput').value = item.note || '';
    document.getElementById('modalTitle').innerHTML = `<i class="ph-fill ph-pencil-simple text-indigo-500"></i><span>Edit Checklist Item</span>`;

    const modal = document.getElementById('itemModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => document.getElementById('itemTitleInput').focus(), 50);
}

function closeItemModal() {
    const modal = document.getElementById('itemModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function saveItem(e) {
    e.preventDefault();
    const trip = getActiveTrip();
    const editId = document.getElementById('editItemId').value;
    const title = document.getElementById('itemTitleInput').value.trim();
    const categoryId = document.getElementById('itemCategoryInput').value;
    const priority = document.getElementById('itemPriorityInput').value;
    const note = document.getElementById('itemNoteInput').value.trim();

    if (!title) return;

    if (editId) {
        const existing = trip.items.find(i => i.id === editId);
        if (existing) {
            existing.title = title;
            existing.categoryId = categoryId;
            existing.priority = priority;
            existing.note = note;
            showToast('Checklist item updated');
        }
    } else {
        trip.items.push({
            id: 'custom-' + Date.now(),
            categoryId,
            title,
            priority,
            note,
            completed: false
        });
        showToast('New item added to checklist');
    }

    saveAllTrips();
    closeItemModal();
    renderAll();
}

// --- Bulk & Dropdown Actions ---
function toggleDropdown() {
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('hidden');
}

function uncheckAllItems() {
    const trip = getActiveTrip();
    trip.items.forEach(i => i.completed = false);
    saveAllTrips();
    renderAll();
    document.getElementById('dropdownMenu').classList.add('hidden');
    showToast('All items marked as pending');
}

function checkAllCritical() {
    setFilter('critical');
    document.getElementById('dropdownMenu').classList.add('hidden');
    showToast('Showing Critical Go-Live items');
}

function openResetConfirmModal() {
    document.getElementById('dropdownMenu').classList.add('hidden');
    const modal = document.getElementById('resetModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeResetConfirmModal() {
    const modal = document.getElementById('resetModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function confirmResetToDefault() {
    trips = [createDefaultSahiwalTrip()];
    activeTripId = trips[0].id;
    selectedPlannerDay = 'all';
    saveAllTrips();
    closeResetConfirmModal();
    resetFilters();
    renderAll();
    fetchLiveWeather(true);
    showToast('Factory reset complete: Sahiwal ERP template restored');
}

// --- Utility Functions ---
function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = message;
    toast.classList.remove('hidden');
    toast.classList.add('flex');
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => {
        toast.classList.add('hidden');
        toast.classList.remove('flex');
    }, 2600);
}

function escapeHtml(str) {
    return String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}