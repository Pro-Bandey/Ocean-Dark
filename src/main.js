import plugin from './plugin.json';

const themes = acode.require('themes');
const ThemeBuilder = acode.require('themeBuilder');

class OceanDarkTheme {
  #themeName = 'Ocean Dark';

  async init() {
    const oceanDark = new ThemeBuilder(this.#themeName, 'dark', 'free');

    // Primary & Container Backgrounds
    oceanDark.primaryColor = '#0b132b';          // Deep abyssal navy (main background)
    oceanDark.darkenedPrimaryColor = '#070d1e';  // Darker shade for contrast panels
    oceanDark.secondaryColor = '#1c2541';        // Continental shelf slate (sidebars/bars)
    oceanDark.popupBackgroundColor = '#111e38';  // Sub-surface navy for dialogs & popups

    // Text & Typography
    oceanDark.primaryTextColor = '#f0f8ff';      // Ice-foam white for primary text
    oceanDark.secondaryTextColor = '#8fa3bf';    // Muted sea-mist gray for subtext/meta
    oceanDark.linkTextColor = '#38bdf8';         // Sky/ocean blue for links
    oceanDark.errorTextColor = '#ff6b6b';        // Coral red for errors/warnings

    // Accents & Icons
    oceanDark.activeColor = '#00d2ff';           // Electric bioluminescent cyan
    oceanDark.activeIconColor = '#00d2ff';

    // Borders, Dividers & Shadows
    oceanDark.borderColor = '#1e3a5f';           // Subdued deep ocean shelf borders
    oceanDark.popupBorderColor = '#233554';
    oceanDark.borderRadius = '6px';
    oceanDark.popupBorderRadius = '8px';
    oceanDark.scrollbarColor = '#1e3a5f';
    oceanDark.boxShadowColor = '#00000066';

    // Modals, Context Menus & Popups
    oceanDark.popupIconColor = '#00d2ff';
    oceanDark.popupTextColor = '#f0f8ff';
    oceanDark.popupActiveColor = '#00e5ff';

    // Buttons & Interactive Controls
    oceanDark.buttonBackgroundColor = '#0284c7'; // Deep aquatic cyan-blue
    oceanDark.buttonActiveColor = '#0369a1';
    oceanDark.buttonTextColor = '#ffffff';

    // Register and apply the theme
    if (themes) {
      themes.add(oceanDark);
      themes.apply(this.#themeName);
    }
  }

  async destroy() {
    if (themes) {
      if (themes.current?.name === this.#themeName) {
        themes.apply('default');
      }
      if (typeof themes.remove === 'function') {
        themes.remove(this.#themeName);
      }
    }
  }
}

if (window.acode) {
  const instance = new OceanDarkTheme();

  acode.setPluginInit(plugin.id, () => instance.init());
  acode.setPluginUnmount(plugin.id, () => instance.destroy());
}