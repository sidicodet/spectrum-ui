import { readdir, readFile, writeFile, stat } from 'fs/promises';
import { join, resolve } from 'path';

const replacements = [
  ['https://ui.spectrumhq.in', 'https://ui.imoogleai.xyz'],
  ['https://spectrumhq.in', 'https://imoogleai.xyz'],
  ['spectrumhq.in', 'imoogleai.xyz'],
  ['Spectrum UI', 'Imoogle UI'],
  ['spectrum-ui', 'imoogle-ui'],
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

async function walk(dir, depth) {
  if (depth > 10) return [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch (e) {
    console.log('[v0] Error reading dir:', dir, e.message);
    return [];
  }
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '.git' || entry.name === 'scripts') continue;
    if (entry.isDirectory()) {
      files.push(...await walk(full, depth + 1));
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      files.push(full);
    }
  }
  return files;
}

async function main() {
  const cwd = process.cwd();
  console.log('[v0] CWD:', cwd);
  
  // Check if the project root has our files
  const rootEntries = await readdir(cwd);
  console.log('[v0] Root entries:', rootEntries.slice(0, 20).join(', '));
  
  // Also try the absolute path
  const projectRoot = '/vercel/share/v0-project';
  let root = cwd;
  
  try {
    const pStat = await stat(join(projectRoot, 'app'));
    if (pStat.isDirectory()) {
      root = projectRoot;
      console.log('[v0] Using absolute path:', root);
    }
  } catch (e) {
    console.log('[v0] Absolute path check failed, using cwd');
  }
  
  const files = await walk(root, 0);
  console.log('[v0] Found', files.length, 'ts/tsx files');
  if (files.length > 0) {
    console.log('[v0] First 5 files:', files.slice(0, 5).join('\n'));
  }
  
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
      console.log('Updated:', file.replace(root + '/', ''));
    }
  }
  
  console.log('');
  console.log('Total files updated:', totalChanges);
}

main().catch(e => console.error('[v0] Fatal error:', e));
