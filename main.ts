// news-image-20261120: the entry image is the front page bundled beside this
// file (entry.png). The program copies it to the grader's output directory.
// Standard library only, no network, no randomness: both runs write the
// same bytes. Local run: MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const here = dirname(fileURLToPath(import.meta.url));
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
