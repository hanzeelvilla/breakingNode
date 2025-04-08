# ESLint

Lintar/Linting es el proceso de analizar código en busca de errores, inconsistencias o malas prácticas, siguiendo reglas predefinidas. El término "lintar" viene de **"lint"**, una herramienta antigua de análisis de código en C.

- Detectar errores antes de ejecutar el código.
- Mantener un estilo uniforme en el equipo.
- Evitar bugs y mejorar la legibilidad.
- Se usa en JavaScript, Python, CSS, etc.

> [!NOTE]
> ESLint es la herramienta para lintar en JavaScript.

# Requisitos

- Node.js (versión 14.x o superior)
- npm

# Instalación

1. Crear un `package.json`.
```bash
npm init -y
```

2. Instalar e incializar la configuración
```bash
npm init @eslint/config@latest
```

Contestar los prompts:
- To check syntasix and find problems.
- JavaScript modules
- Framework = none
- No TypeScript
- Run in Node
- Install all the packages
- Package manager `npm`

> [!NOTE]
> Dependiendo del tipo del proyecto puede variar.

# Uso básico
1. Crear un código de prueba `index.js`
```javascript
var nombre = "Hanzeel";
```

2. Analizar el código
```bash
npx eslint index.js
```

## Corregir el código
[Reglas](https://eslint.org/docs/latest/rules/)


ESLint tiene una opción para **arreglar errores automáticamente cuando es posible** con la opción `--fix`. Todas las reglas que tengan el símbolo 🔧 serán corregidas automáticamente por eslint si es posible.
```bash
npx eslint --fix
```

# Script
Es útil agregar scripts en tu `package.json` para facilitar el uso:
