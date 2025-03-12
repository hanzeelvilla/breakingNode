# 📌 Guía Rápida de Git y GitHub

## 📖 Introducción
Git es un sistema de control de versiones distribuido que permite gestionar proyectos de manera eficiente. GitHub es una plataforma basada en Git que facilita la colaboración y almacenamiento de repositorios remotos.

---

## ⚡ Instalación y Configuración Básica

### 🔹 Instalar Git
- **Windows**: Descargar desde [git-scm.com](https://git-scm.com/)
- **Linux (Debian/Ubuntu)**:
  ```bash
  sudo apt install git
  ```
- **Mac**:
  ```bash
  brew install git
  ```

### 🔹 Configurar Git
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@example.com"
```

Verificar configuración:
```bash
git config --list
```

---

## 🔹 Comandos Básicos

### 🔹 Inicializar un Repositorio
```bash
git init
```

### 🔹 Clonar un Repositorio
```bash
git clone URL_DEL_REPO
```

### 🔹 Agregar Cambios
```bash
git add archivo.txt  # Agregar un archivo específico
git add .            # Agregar todos los archivos
```

### 🔹 Confirmar Cambios (Commit)
```bash
git commit -m "Mensaje del commit"
```

### 🔹 Ver el Historial de Commits
```bash
git log --oneline --graph --all
```

### 🔹 Ver el Estado del Repositorio
```bash
git status
```

### 🔹 Cambiar de Rama
```bash
git switch nombre-de-la-rama
```

Si usas una versión antigua de Git:
```bash
git checkout nombre-de-la-rama
```

### 🔹 Crear una Nueva Rama
```bash
git branch nombre-de-la-rama
```

### 🔹 Fusionar Ramas (Merge)
```bash
git merge nombre-de-la-rama
```

### 🔹 Eliminar una Rama
```bash
git branch -d nombre-de-la-rama  # Si ya fue fusionada
git branch -D nombre-de-la-rama  # Forzar eliminación
```

---

## 🚀 Trabajo con GitHub

### 🔹 Conectar un Repositorio Local con GitHub
```bash
git remote add origin https://github.com/usuario/repositorio.git
```

### 🔹 Subir Cambios a GitHub (Push)
```bash
git push -u origin main  # Primera vez
git push                 # Siguientes veces
```

### 🔹 Descargar Cambios del Repositorio Remoto (Pull)
```bash
git pull origin main
```

### 🔹 Clonar un Repositorio Existente
```bash
git clone https://github.com/usuario/repositorio.git
```

### 🔹 Crear un Pull Request (PR)
1. Subir los cambios con `git push`.
2. Ir a GitHub y abrir un **Pull Request** desde la interfaz.
3. Esperar revisión y aprobación.

---

## ⚠️ Deshacer Cambios

### 🔹 Deshacer `git add`
```bash
git reset archivo.txt  # Remueve el archivo del staging area
git reset .            # Remueve todos los archivos del staging area
```

### 🔹 Deshacer el último Commit
- **Manteniendo los cambios:**
  ```bash
  git reset --soft HEAD~1
  ```
- **Eliminando los cambios:**
  ```bash
  git reset --hard HEAD~1
  ```

### 🔹 Revertir un Commit Específico
```bash
git revert ID_DEL_COMMIT
```

## 📝 README Files y Markdown

### 🔹 ¿Qué es un README?
Un **README.md** es un archivo de documentación que se encuentra en la raíz de un repositorio y proporciona información clave sobre el proyecto.

### 🔹 ¿Cómo escribir un README efectivo?
1. **Título y Descripción**: Explica de qué trata el proyecto.
2. **Instalación**: Instrucciones para configurar el proyecto.
3. **Uso**: Ejemplos de cómo ejecutar el código.
4. **Contribución**: Reglas para contribuir al proyecto.
5. **Licencia**: Tipo de licencia aplicada.

### 🔹 Sintaxis Básica de Markdown
```markdown
# Encabezado 1
## Encabezado 2
**Negrita**
*Itálica*
- Lista desordenada
1. Lista ordenada
```
Para más detalles, revisa la [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/).

---

## 📚 Recursos

- [Git y GitHub Cheat Sheet](https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf)
- [GitHub Student Developer Pack](https://education.github.com/pack)
- [GitHub Foundations](https://learn.microsoft.com/en-us/training/paths/github-foundations/)
- [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
- [Readme GitHub Profile (Video)](https://www.youtube.com/watch?v=btlEy8nGOrY)

---