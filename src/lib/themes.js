export const THEME_STORAGE_KEY = "portfolio-theme";
export const DEFAULT_THEME_ID = "amber";

export const themeOptions = [
  { id: "amber", label: "Amber", accent: "#d8c6a4", accentStrong: "#efe1c8", accentRgb: "216, 198, 164" },
  { id: "violet", label: "Violet", accent: "#b892ff", accentStrong: "#d9c3ff", accentRgb: "184, 146, 255" },
  { id: "cyan", label: "Cyan", accent: "#74d5ff", accentStrong: "#b9ecff", accentRgb: "116, 213, 255" },
  { id: "emerald", label: "Emerald", accent: "#59d7a4", accentStrong: "#a4f1d0", accentRgb: "89, 215, 164" },
  { id: "rose", label: "Rose", accent: "#ff89b0", accentStrong: "#ffc3d8", accentRgb: "255, 137, 176" },
  { id: "orange", label: "Orange", accent: "#ffaf73", accentStrong: "#ffd4ae", accentRgb: "255, 175, 115" },
  { id: "indigo", label: "Indigo", accent: "#8aa5ff", accentStrong: "#c5d2ff", accentRgb: "138, 165, 255" },
  { id: "lime", label: "Lime", accent: "#b9db63", accentStrong: "#e0f2ac", accentRgb: "185, 219, 99" }
];

export function resolveTheme(themeId) {
  return themeOptions.find((theme) => theme.id === themeId) || themeOptions.find((theme) => theme.id === DEFAULT_THEME_ID);
}
