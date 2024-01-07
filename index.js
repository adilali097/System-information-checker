const os = require('os');

function getSystemInfo() {
  return {
    platform: os.platform(),
    type: os.type(),
    release: os.release(),
    totalMemory: formatBytes(os.totalmem()),
    freeMemory: formatBytes(os.freemem()),
    cpus: os.cpus(),
  };
}

function formatBytes(bytes) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let i = 0;
  while (bytes >= 1024 && i < units.length - 1) {
    bytes /= 1024;
    i++;
  }
  return `${bytes.toFixed(2)} ${units[i]}`;
}

const systemInfo = getSystemInfo();

console.log('System Information:');
console.log(`- Platform: ${systemInfo.platform}`);
console.log(`- OS Type: ${systemInfo.type}`);
console.log(`- OS Release: ${systemInfo.release}`);
console.log(`- Total Memory: ${systemInfo.totalMemory}`);
console.log(`- Free Memory: ${systemInfo.freeMemory}`);
console.log('- CPUs:');
systemInfo.cpus.forEach((cpu, index) => {
  console.log(`  ${index + 1}. Model: ${cpu.model}`);
  console.log(`     Speed: ${cpu.speed} MHz`);
  console.log(`     Cores: ${cpu.cores}`);
});
