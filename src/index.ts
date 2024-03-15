export enum PlatformNames {
    ANDROID = 'android',
    IOS = 'ios',
    WINDOWS = 'windows',
    OSX = 'osx',
    LINUX = 'linux',
    CROS = 'cros'
}

export enum BrowserNames {
    CHROME = 'chrome',
    SAFARI = 'safari',
    FIREFOX = 'firefox',
    OTHER = 'other'
}

class PlatformInfo {
    static ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';

    static platformName = /android/i.test(PlatformInfo.ua)
        ? PlatformNames.ANDROID
        : /ip([ao]d|hone)/i.test(PlatformInfo.ua)
        ? PlatformNames.IOS
        : /windows/i.test(PlatformInfo.ua)
        ? PlatformNames.WINDOWS
        : /mac os/i.test(PlatformInfo.ua)
        ? PlatformNames.OSX
        : /linux/i.test(PlatformInfo.ua)
        ? PlatformNames.LINUX
        : /cros/i.test(PlatformInfo.ua)
        ? PlatformNames.CROS
        : 'n/a';

    static environment =
        typeof window !== 'undefined'
            ? 'browser'
            : typeof global !== 'undefined'
            ? 'node'
            : 'worker';

    static global =
        (typeof globalThis !== 'undefined' && globalThis) ??
        (PlatformInfo.environment === 'browser' && window) ??
        (PlatformInfo.environment === 'node' && global) ??
        (PlatformInfo.environment === 'worker' && self);

    static browser = PlatformInfo.environment === 'browser';

    static desktop = ['windows', 'osx', 'linux', 'cros'].includes(
        PlatformInfo.platformName
    );

    static mobile = ['android', 'ios'].includes(PlatformInfo.platformName);

    static ios = PlatformInfo.platformName === 'ios';

    static android = PlatformInfo.platformName === 'android';

    static touch =
        PlatformInfo.environment === 'browser' &&
        ('ontouchstart' in window ||
            ('maxTouchPoints' in navigator && navigator.maxTouchPoints > 0));

    static workers = typeof Worker !== 'undefined';

    static browserName =
        PlatformInfo.environment !== 'browser'
            ? null
            : /(Chrome\/|Chromium\/|Edg.*\/)/.test(PlatformInfo.ua)
            ? BrowserNames.CHROME
            : /Safari\//.test(PlatformInfo.ua)
            ? BrowserNames.SAFARI
            : /Firefox\//.test(PlatformInfo.ua)
            ? BrowserNames.FIREFOX
            : BrowserNames.OTHER;

    static safari = PlatformInfo.browserName === BrowserNames.SAFARI;
    static chrome = PlatformInfo.browserName === BrowserNames.CHROME;
    static firefox = PlatformInfo.browserName === BrowserNames.FIREFOX;
}

export { PlatformInfo };
