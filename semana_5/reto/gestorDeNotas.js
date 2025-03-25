// Script para crear, listar y eliminar notas en el archivo notas.json

const fs = require('fs');
const path = require('path');
const process = require('process');

const args = process.argv.slice(2);

if (args.length < 1) {
    console.error('Usage: node index.js <operation> [note]');
    process.exit(1);
}

const operation = args[0];
const note = args[1];
const filePath = path.join(__dirname, 'notas.json');

// Asegurarse de que el archivo notas.json exista
if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify({}));
}

// Leer las notas actuales
const readNotes = () => {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};

// Guardar las notas en el archivo
const saveNotes = (notes) => {
    fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));
};

if (operation === 'listar') {
    const notes = readNotes();
    const keys = Object.keys(notes);
    if (keys.length === 0) {
        console.log('No hay notas disponibles.');
    } else {
        console.log('Notas:');
        keys.forEach((key, index) => console.log(`${index + 1}. ${notes[key]}`));
    }
} else if (operation === 'agregar') {
    if (!note) {
        console.error('Por favor, proporciona una nota para agregar.');
        process.exit(1);
    }
    const notes = readNotes();
    const id = `nota_${Date.now()}`; // Generar un ID único basado en la marca de tiempo
    notes[id] = note;
    saveNotes(notes);
    console.log('Nota agregada exitosamente.');
} else if (operation === 'eliminar') {
    if (!note) {
        console.error('Por favor, proporciona el índice de la nota a eliminar.');
        process.exit(1);
    }
    const notes = readNotes();
    const keys = Object.keys(notes);
    const index = parseInt(note, 10) - 1;
    if (isNaN(index) || index < 0 || index >= keys.length) {
        console.error('Índice inválido.');
        process.exit(1);
    }
    const keyToDelete = keys[index];
    delete notes[keyToDelete];
    saveNotes(notes);
    console.log('Nota eliminada exitosamente.');
} else {
    console.error('Operación no reconocida. Usa "listar", "agregar" o "eliminar".');
    process.exit(1);
}
