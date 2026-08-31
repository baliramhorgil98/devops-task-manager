const fs = require("fs");

console.log("Starting application build validation...");

if (!fs.existsSync("public/index.html")) {
    console.error("Build Failed: public/index.html not found");
    process.exit(1);
}

if (!fs.existsSync("app.js")) {
    console.error("Build Failed: app.js not found");
    process.exit(1);
}

console.log("Application files validated successfully.");
console.log("Build completed successfully.");