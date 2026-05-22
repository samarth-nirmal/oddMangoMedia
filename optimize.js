const fs = require('fs');

const appTsxPath = './src/App.tsx';
let appTsx = fs.readFileSync(appTsxPath, 'utf8');

// Replace standard motion.div setups
appTsx = appTsx.replace(/initial=\{\{ opacity: 0, y: ([0-9.-]+) \}\} /g, `initial={{ opacity: 0, y: $1 }} style={{ willChange: 'transform, opacity' }} `);
appTsx = appTsx.replace(/initial=\{\{ opacity: 0, x: ([0-9.-]+) \}\} /g, `initial={{ opacity: 0, x: $1 }} style={{ willChange: 'transform, opacity' }} `);
appTsx = appTsx.replace(/style=\{\{ y: textY \}\} /g, `style={{ y: textY, willChange: 'transform' }} `);
appTsx = appTsx.replace(/initial=\{\{ opacity: 0, y: 30 \}\}\n\s+animate/g, "initial={{ opacity: 0, y: 30 }}\n              style={{ willChange: 'transform, opacity' }}\n              animate");
appTsx = appTsx.replace(/initial=\{\{ opacity: 0, y: 40 \}\}\n\s+animate/g, "initial={{ opacity: 0, y: 40 }}\n              style={{ willChange: 'transform, opacity' }}\n              animate");
appTsx = appTsx.replace(/initial=\{\{ opacity: 0, scale: 0.8 \}\}\n\s+animate/g, "initial={{ opacity: 0, scale: 0.8 }}\n              style={{ willChange: 'transform, opacity' }}\n              animate");

// Hero background blobs
appTsx = appTsx.replace(/style=\{\{ opacity: blobsOpacity \}\}/g, `style={{ opacity: blobsOpacity, willChange: 'opacity' }}`);
appTsx = appTsx.replace(/style=\{\{ opacity: logoOpacity \}\}/g, `style={{ opacity: logoOpacity, willChange: 'opacity' }}`);
appTsx = appTsx.replace(/style=\{\{ opacity: effectOpacity \}\}/g, `style={{ opacity: effectOpacity, willChange: 'opacity' }}`);

fs.writeFileSync(appTsxPath, appTsx);

const heroTsxPath = './src/components/ui/scroll-expansion-hero.tsx';
let heroTsx = fs.readFileSync(heroTsxPath, 'utf8');

heroTsx = heroTsx.replace(/style=\{\{ x: textXLeft, opacity: textOpacity, textShadow/g, `style={{ x: textXLeft, opacity: textOpacity, textShadow: '0 2px 10px rgba(0,0,0,0.5)', willChange: 'transform, opacity' }} // textShadow`);
heroTsx = heroTsx.replace(/style=\{\{ x: textXRight, opacity: textOpacity, textShadow/g, `style={{ x: textXRight, opacity: textOpacity, textShadow: '0 2px 10px rgba(0,0,0,0.5)', willChange: 'transform, opacity' }} // textShadow`);
heroTsx = heroTsx.replace(/style=\{\{ opacity: bgOpacity \}\}/g, `style={{ opacity: bgOpacity, willChange: 'opacity' }}`);
heroTsx = heroTsx.replace(/style=\{\{ opacity: textOpacity \}\}/g, `style={{ opacity: textOpacity, willChange: 'opacity' }}`);
heroTsx = heroTsx.replace(/style=\{\{\n\s+width,\n\s+height,\n\s+borderRadius,\n\s+maxWidth/g, `style={{ width, height, borderRadius, maxWidth: '100vw', maxHeight: '100vh', willChange: 'width, height, border-radius' }}`);

fs.writeFileSync(heroTsxPath, heroTsx);

console.log("Updated files!");
