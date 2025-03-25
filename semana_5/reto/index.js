const osData = require("./osData");

console.log(`Hostname: ${osData.hostname}`);
console.log(`Kernel: ${osData.type} ${osData.release}`);
console.log(`Uptime: ${osData.uptime.toFixed(2)} mins`);
console.log(`Memory: ${osData.memoryUsed.toFixed(2)} / ${osData.totalMem.toFixed(2)} GB (${osData.memoryUsedPercentage.toFixed()}%)`);
console.log(`CPU: ${osData.infoCPU[0].model} (${osData.infoCPU.length} cores)`);