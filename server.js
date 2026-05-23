const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

// HELPER: Database Operations
const getDB = () => {
    if (!fs.existsSync('db.json')) {
        // Initialize with both states and users arrays
        fs.writeFileSync('db.json', JSON.stringify({ states: [], users: [] }, null, 2));
    }
    const data = JSON.parse(fs.readFileSync('db.json', 'utf8'));
    
    // Safety check: Ensure users array exists even if file was already there
    if (!data.users) data.users = [];
    if (!data.states) data.states = [];
    
    return data;
};

const saveDB = (data) => fs.writeFileSync('db.json', JSON.stringify(data, null, 2));

// --- PAGE ROUTES ---
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/admin', (req, res) => res.sendFile(path.join(__dirname, 'admin.html')));

// --- AUTHENTICATION API ---

// API: Register New Admin
app.post('/api/register', (req, res) => {
    let db = getDB();
    const { user, pass, email } = req.body;
    
    // Check if username already exists
    if (db.users.find(u => u.username === user)) {
        return res.status(400).json({ success: false, message: "Username already taken" });
    }
    
    db.users.push({ username: user, password: pass, email: email });
    saveDB(db);
    res.json({ success: true });
});

// API: Login Admin
app.post('/api/login', (req, res) => {
    const db = getDB();
    const { user, pass } = req.body;
    
    const validUser = db.users.find(u => u.username === user && u.password === pass);
    
    if (validUser) {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, message: "Invalid credentials" });
    }
});

// --- DATA API ---

// API: Fetch All States
app.get('/api/states', (req, res) => res.json(getDB().states));

// API: Add State
app.post('/api/states', (req, res) => {
    let db = getDB();
    const newState = { 
        id: Date.now(), 
        districts: [], 
        isFavorite: false, // Default value for new states
        ...req.body 
    };
    db.states.push(newState);
    saveDB(db);
    res.json({ success: true });
});

// API: Toggle Favorite (Used for the heart button)
app.patch('/api/states/:id/favorite', (req, res) => {
    let db = getDB();
    const id = parseInt(req.params.id);
    const { isFavorite } = req.body;
    
    const index = db.states.findIndex(s => s.id == id);
    if (index !== -1) {
        db.states[index].isFavorite = isFavorite;
        saveDB(db);
        res.json({ success: true });
    } else {
        res.status(404).json({ error: "State not found" });
    }
});

// API: Add District (Nested Auto-Save)
app.post('/api/districts', (req, res) => {
    let db = getDB();
    const { stateId, districtName, info, places } = req.body;
    const sIndex = db.states.findIndex(s => s.id == stateId);
    if (sIndex !== -1) {
        db.states[sIndex].districts.push({ districtName, info, places });
        saveDB(db);
        res.json({ success: true });
    } else {
        res.status(404).json({ error: "State not found" });
    }
});

// API: Delete State
app.delete('/api/states/:id', (req, res) => {
    let db = getDB();
    db.states = db.states.filter(s => s.id != req.params.id);
    saveDB(db);
    res.json({ success: true });
});

app.listen(PORT, () => console.log(`✅ Server running at: http://localhost:${PORT}`));