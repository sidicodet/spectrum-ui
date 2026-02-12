import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const replacements = [
  // URL replacements
  ['https://ui.spectrumhq.in', 'https://ui.imoogleai.xyz'],
  ['https://spectrumhq.in', 'https://imoogleai.xyz'],
  // Brand name replacements
  ['Spectrum UI', 'Imoogle UI'],
  ['spectrum-ui', 'imoogle-ui'],
  // Author replacements
  ['Arihant Jain', 'Imoogle Technology'],
  ['arihantcodes', 'imoogletechnology'],
  ['@arihantcodes', '@imoogletechnology'],
  ['jainari1208@gmail.com', 'info@imoogleai.xyz'],
  ['arihantjain7000@gmail.com', 'info@imoogleai.xyz'],
  ['https://www.linkedin.com/in/arihantcodes', 'https://www.linkedin.com/company/imoogletechnology'],
  ['https://www.instagram.com/arihantjainn18', 'https://imoogleai.xyz'],
  ['https://github.com/arihantcodes/spectrum-ui', 'https://imoogleai.xyz'],
  ['https://github.com/arihantcodes', 'https://imoogleai.xyz'],
  ['https://x.com/arihantcodes', 'https://x.com/imoogletechnology'],
  ['/arihanticon.jpg', '/logo.svg'],
  ['/arihant.jpeg', '/logo.svg'],
];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '.git' || entry.name === 'scripts') continue;
    if (entry.isDirectory()) {
      files.push(...await walk(full));
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      files.push(full);
    }
  }
  return files;
}

async function main() {
  const root = process.cwd();
  const files = await walk(root);
  let totalChanges = 0;
  
  for (const file of files) {
    let content = await readFile(file, 'utf-8');
    let original = content;
    
    for (const [search, replace] of replacements) {
      content = content.replaceAll(search, replace);
    }
    
    if (content !== original) {
      await writeFile(file, content, 'utf-8');
      totalChanges++;
      console.log(`Updated: ${file.replace(root + '/', '')}`);
    }
  }
  
  console.log(`\nTotal files updated: ${totalChanges}`);
}

main().catch(console.error);
