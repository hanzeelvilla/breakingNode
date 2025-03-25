const os = require("node:os");

const hostname = os.hostname();
const type = os.type();
const release = os.release();
const uptime = os.uptime() / 60; // por default en segundos
const infoCPU = os.cpus();

const totalMem = os.totalmem() / 1024 / 1024 / 1024; // por default en bytes
const freeMem = os.freemem() / 1024 / 1024 / 1024; // por default en bytes
const memoryUsed = totalMem - freeMem;
const memoryUsedPercentage = (memoryUsed * 100) / totalMem;

const osData = {
    hostname: hostname,
    type: type,
    release: release,
    uptime: uptime,
    totalMem: totalMem,
    memoryUsed: memoryUsed,
    memoryUsedPercentage: memoryUsedPercentage,
    infoCPU: infoCPU
}

module.exports = osData;

/*
console.log(`Hostname: ${hostname}`);
console.log(`Kernel: ${type} ${release}`);
console.log(`Uptime: ${uptime.toFixed(2)} mins`);
console.log(`Memory: ${memoryUsed.toFixed(2)} / ${totalMem.toFixed(2)} GB (${memoryUsedPercentage.toFixed()}%)`);
console.log(`CPU: ${infoCPU[0].model} (${infoCPU.length} cores)`);
*/