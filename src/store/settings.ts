import { atom } from 'jotai';

// sounds
export const localPlaybackDeviceSetting = atom<string[]>([]);
export const remotePlaybackDeviceSetting = atom<string[]>([]);

export const allowSoundOverlappingSetting = atom(false);
export const muteDuringPlaybackSetting = atom(false);
export const volumeNormalizationSetting = atom(false);

// other
export const deleteToTrashSetting = atom(false);
export const minimizeToTraySetting = atom(false);
export const hotkeysOnlyCurrentTabSetting = atom(false);
export const disableAnalyticsSetting = atom(false);
export const topmostSetting = atom(false);
export const autostartSetting = atom(false);
export const advancedModeSetting = atom(false);

export type SupportedLanguage = 'auto' | 'en' | 'de';
export const languageSetting = atom<SupportedLanguage>('auto');
