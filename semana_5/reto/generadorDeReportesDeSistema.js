const fs = require("node:fs");
const osData = require("./osData");

const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const hour = date.getHours();
const minutes = date.getMinutes();

const file_name = `${day}_${month}_${year}_${hour}_${minutes}.json`;
 
const reporte = {
    date: `${day}/${month}/${year}`,
    time: `${hour}:${minutes}`,
    hostname: osData.hostname,
    kernel: `${osData.type} ${osData.release}`,
    uptime: `${osData.uptime.toFixed(2)} mins`,
    memory: `${osData.memoryUsed.toFixed(2)} / ${osData.totalMem.toFixed(2)} GB (${osData.memoryUsedPercentage.toFixed()}%)`,
    cpu: `${osData.infoCPU[0].model} (${osData.infoCPU.length} cores)`
    // ... osData
    // Informacion cruda
};

jsonData = JSON.stringify(reporte);

fs.writeFile(file_name, jsonData, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Reporte generado con exito");
        console.log(`Nombre del archivo: ${file_name}`);
        console.table(reporte);
    }
});