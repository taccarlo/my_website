import { formatDuration, formatMB, parseUserAgent } from './browserdashboard';

// ── formatDuration ────────────────────────────────────────────────────────────

describe('formatDuration', () => {
  test('seconds only', () => {
    expect(formatDuration(45000)).toBe('45s');
  });

  test('minutes and seconds', () => {
    expect(formatDuration(125000)).toBe('2m 05s');
  });

  test('hours, minutes and seconds', () => {
    expect(formatDuration(3661000)).toBe('1h 01m 01s');
  });

  test('zero', () => {
    expect(formatDuration(0)).toBe('0s');
  });

  test('exactly one hour', () => {
    expect(formatDuration(3600000)).toBe('1h 00m 00s');
  });
});

// ── formatMB ──────────────────────────────────────────────────────────────────

describe('formatMB', () => {
  test('1 MB', () => {
    expect(formatMB(1024 * 1024)).toBe('1.0 MB');
  });

  test('decimal MB', () => {
    expect(formatMB(1.5 * 1024 * 1024)).toBe('1.5 MB');
  });

  test('0 bytes', () => {
    expect(formatMB(0)).toBe('0.0 MB');
  });
});

// ── parseUserAgent ────────────────────────────────────────────────────────────

describe('parseUserAgent – browser detection', () => {
  test('Chrome', () => {
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';
    expect(parseUserAgent(ua).browser).toBe('Chrome 124');
  });

  test('Edge', () => {
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 Edg/124.0.0.0';
    expect(parseUserAgent(ua).browser).toBe('Edge 124');
  });

  test('Opera', () => {
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36 OPR/110.0.0.0';
    expect(parseUserAgent(ua).browser).toBe('Opera 110');
  });

  test('Firefox', () => {
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:125.0) Gecko/20100101 Firefox/125.0';
    expect(parseUserAgent(ua).browser).toBe('Firefox 125');
  });

  test('Safari', () => {
    const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15';
    expect(parseUserAgent(ua).browser).toBe('Safari');
  });

  test('Samsung Tizen TV', () => {
    const ua = 'Mozilla/5.0 (SMART-TV; LINUX; Tizen 7.0) AppleWebKit/537.36 (KHTML, like Gecko) 94.0.4606.31/7.0 TV Safari/537.36';
    expect(parseUserAgent(ua).browser).toBe('Samsung Tizen TV');
  });

  test('Unknown browser', () => {
    expect(parseUserAgent('SomeObscureBrowserUA/1.0').browser).toBe('Unknown');
  });
});

describe('parseUserAgent – OS detection', () => {
  test('Windows 10/11', () => {
    const ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36';
    expect(parseUserAgent(ua).os).toBe('Windows 10 / 11');
  });

  test('Windows 7', () => {
    const ua = 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36';
    expect(parseUserAgent(ua).os).toBe('Windows 7');
  });

  test('Windows generic', () => {
    const ua = 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36';
    expect(parseUserAgent(ua).os).toBe('Windows');
  });

  test('Android with version', () => {
    const ua = 'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36';
    expect(parseUserAgent(ua).os).toBe('Android 13');
  });

  test('iOS (iPhone)', () => {
    const ua = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15';
    expect(parseUserAgent(ua).os).toBe('iOS');
  });

  test('iOS (iPad)', () => {
    const ua = 'Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X) AppleWebKit/605.1.15';
    expect(parseUserAgent(ua).os).toBe('iOS');
  });

  test('macOS', () => {
    const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_4) AppleWebKit/605.1.15';
    expect(parseUserAgent(ua).os).toBe('macOS');
  });

  test('Tizen TV – returns Tizen version, not Linux', () => {
    const ua = 'Mozilla/5.0 (SMART-TV; LINUX; Tizen 7.0) AppleWebKit/537.36 (KHTML, like Gecko) 94.0.4606.31/7.0 TV Safari/537.36';
    expect(parseUserAgent(ua).os).toBe('Tizen 7.0');
  });

  test('Linux generic', () => {
    const ua = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36';
    expect(parseUserAgent(ua).os).toBe('Linux');
  });

  test('Unknown OS', () => {
    expect(parseUserAgent('SomeObscureUA/1.0').os).toBe('Unknown OS');
  });
});
