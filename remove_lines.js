const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'pages', 'index.astro');
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// Remove lines 485 to 1182 (0-indexed: 484 to 1181)
// lines array is 0-indexed. Line 1 is index 0.
// Line 485 is index 484.
// Line 1182 is index 1181.
// We want to remove from index 484 to 1181 inclusive.
// Number of lines to remove = 1181 - 484 + 1 = 698.

const startLine = 485;
const endLine = 1182;

// Verify content before deleting to be super safe
const startContent = lines[startLine - 1];
const endContent = lines[endLine - 1];

console.log('Start line content:', startContent);
console.log('End line content:', endContent);

if (startContent.includes('const translations_unused = {') && endContent.includes('};')) {
    lines.splice(startLine - 1, endLine - startLine + 1);
    const newContent = lines.join('\n');
    fs.writeFileSync(filePath, newContent);
    console.log('Successfully removed lines.');
} else {
    console.error('Line content verification failed. Aborting.');
    process.exit(1);
}

