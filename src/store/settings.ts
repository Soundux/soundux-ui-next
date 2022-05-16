import { atom } from 'jotai';

export const deleteToTrashSetting = atom(false);
export const minimizeToTraySetting = atom(false);
export const hotkeysOnlyCurrentTabSetting = atom(false);
export const disableAnalyticsSetting = atom(false);
export const topmostSetting = atom(false);
export const autostartSetting = atom(false);
export const advancedModeSetting = atom(false);

export type SupportedLanguage = 'auto' | 'en' | 'de';
export const languageSetting = atom<SupportedLanguage>('auto');
