import { cpSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

const srcDir = join(rootDir, 'src/content/posts');
const destDir = join(rootDir, 'public/downloads');

// 创建目标目录
if (!existsSync(destDir)) {
  mkdirSync(destDir, { recursive: true });
}

// 复制所有 markdown 文件
cpSync(srcDir, destDir, {
  recursive: true,
  filter: (src) => {
    // 只复制 .md 和 .mdx 文件，以及目录
    return src.endsWith('.md') || src.endsWith('.mdx') || !src.includes('.');
  }
});

console.log('✓ Markdown files copied to public/downloads/');
