// 所有擴充大類；新增一個檔案後在這裡登記
import type { Group } from './types.ts';
import { code } from './code.ts';
import { security } from './security.ts';
import { mystic } from './mystic.ts';
import { learn } from './learn.ts';
import { culture } from './culture.ts';
import { ai } from './ai.ts';
import { media } from './media.ts';
import { docsLang } from './docs-lang.ts';
import { designAssets } from './design-assets.ts';
import { financeIndie } from './finance-indie.ts';
import { systemDaily } from './system-daily.ts';
import { japanToolbox } from './japan-toolbox.ts';

export const GROUPS: Group[] = [media, docsLang, designAssets, financeIndie, systemDaily, japanToolbox, ai, learn, code, security, mystic, culture];
