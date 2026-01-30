const { test, expect } = require('@playwright/test');

/**
 * Helper wait: keep your sample style, but avoid flaky timeouts.
 * This waits until the expected text appears in the page body (max 10s).
 */
async function waitForExpectedText(page, expected) {
  await expect
    .poll(async () => await page.textContent('body'), { timeout: 10000 })
    .toContain(expected);
}

/* ---------------- POS_Fun_0001 ---------------- */
test('Pos_Fun_0001 – Convert greeting with name (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('aayuboovan nimal!');

  await waitForExpectedText(page, 'ආයුබෝවන් නිමල්!');
});

/* ---------------- POS_Fun_0002 ---------------- */
test('Pos_Fun_0002 – Convert simple need statement (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('mata vathura oonee.');

  await waitForExpectedText(page, 'මට වතුර ඕනේ.');
});

/* ---------------- POS_Fun_0003 ---------------- */
test('Pos_Fun_0003 – Convert present tense work statement (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('mama dhaen vaeda karanavaa.');

  await waitForExpectedText(page, 'මම දැන් වැඩ කරනවා.');
});

/* ---------------- POS_Fun_0004 ---------------- */
test('Pos_Fun_0004 – Convert question about time (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('dhavasata kohomadha?');

  await waitForExpectedText(page, 'දවසට කොහොමද?');
});

/* ---------------- POS_Fun_0005 ---------------- */
test('Pos_Fun_0005 – Convert polite request (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('karuNaakara mata podi udhavvak dhenna.');

  await waitForExpectedText(page, 'කරුණාකර මට පොඩි උදව්වක් දෙන්න.');
});

/* ---------------- POS_Fun_0006 ---------------- */
test('Pos_Fun_0006 – Convert compound sentence with contrast (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('mama kaemathi namuth mama bisi.');

  await waitForExpectedText(page, 'මම කැමති නමුත් මම බිසි.');
});

/* ---------------- POS_Fun_0007 ---------------- */
test('Pos_Fun_0007 – Convert phrase with English word (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('api meeting ekak thiyamu.');

  await waitForExpectedText(page, 'අපි meeting එකක් තියමු.');
});

/* ---------------- POS_Fun_0008 ---------------- */
test('Pos_Fun_0008 – Convert with numbers (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('mama 2ta ennam.');

  await waitForExpectedText(page, 'මම 2ට එන්නම්.');
});

/* ---------------- POS_Fun_0009 ---------------- */
test('Pos_Fun_0009 – Convert with emoji (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('mama happy 😊');

  await waitForExpectedText(page, 'මම happy 😊');
});

/* ---------------- POS_Fun_0010 ---------------- */
test('Pos_Fun_0010 – Convert longer request statement (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('hadhisi avasthaavaka dhii karunaakara apava amathanna');

  await waitForExpectedText(page, 'හදිසි අවස්තාවක දී කරුනාකර අපව අමතන්න');
});

/* ---------------- POS_Fun_0011 ---------------- */
test('Pos_Fun_0011 – Convert complex sentence (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('shrii lQQkaavee niranthara vaesi haa gQQvathura heethuven bohoo janathaavagee nivaasa haa vYAapaara vinaasha vii, hadhisi aaDhaara kriyaamaarga avashYA viya.');

  await waitForExpectedText(page, 'ශ්‍රී ලංකාවේ නිරන්තර වැසි හා ගංවතුර හේතුවෙන් බොහෝ ජනතාවගේ නිවාස හා ව්‍යාපාර විනාශ වී, හදිසි ආධාර ක්‍රියාමාර්ග අවශ්‍ය විය.');
});

/* ---------------- POS_Fun_0012 ---------------- */
test('Pos_Fun_0012 – Convert work efficiency sentence (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('seevakayoo nava upakaraNa Bhaavithaa kaLa nisaa, kaarya kaalaya adu viya, emaGin apata vaadi saarthakathvayak labaagatha haeki viya.');

  await waitForExpectedText(page, 'සේවකයෝ නව උපකරණ භාවිතා කළ නිසා, කාර්ය කාලය අඩු විය, එමඟින් අපට වාඩි සාර්තකත්වයක් ලබාගත හැකි විය.');
});

/* ---------------- POS_Fun_0013 ---------------- */
test('Pos_Fun_0013 – Convert simple question (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('oyaa nava upakaraNa Bhaavithaa karaadha?');

  await waitForExpectedText(page, 'ඔයා නව උපකරණ භාවිතා කරාද?');
});

/* ---------------- POS_Fun_0014 ---------------- */
test('Pos_Fun_0014 – Convert formal notice sentence (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('karuNaakara mema panividaya kiyavanna.');

  await waitForExpectedText(page, 'කරුණාකර මෙම පනිවිඩය කියවන්න.');
});

/* ---------------- POS_Fun_0015 ---------------- */
test('Pos_Fun_0015 – Convert sentence with punctuation (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('mama gedhara yanavaa, haebaeyi dhaen nemei.');

  await waitForExpectedText(page, 'මම ගෙදර යනවා, හැබැයි දැන් නෙමේ.');
});

/* ---------------- POS_Fun_0016 ---------------- */
test('Pos_Fun_0016 – Convert thanks message (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('sthuthiyi oyaata!');

  await waitForExpectedText(page, 'ස්තුතියි ඔයාට!');
});

/* ---------------- POS_Fun_0017 ---------------- */
test('Pos_Fun_0017 – Convert apology (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('samaavenna, mama pramaadha unaa.');

  await waitForExpectedText(page, 'සමාවෙන්න, මම ප්‍රමාද උනා.');
});

/* ---------------- POS_Fun_0018 ---------------- */
test('Pos_Fun_0018 – Convert instruction sentence (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('karuNaakara meeka hoDHAtama karanna.');

  await waitForExpectedText(page, 'කරුණාකර මේක හොඳටම කරන්න.');
});

/* ---------------- POS_Fun_0019 ---------------- */
test('Pos_Fun_0019 – Convert location question (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('oba kohedha innee?');

  await waitForExpectedText(page, 'ඔබ කොහෙද ඉන්නේ?');
});

/* ---------------- POS_Fun_0020 ---------------- */
test('Pos_Fun_0020 – Convert weather statement (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('adha aluth dhavasa​k.');

  await waitForExpectedText(page, 'අද අලුත් දවස​ක්.');
});

/* ---------------- POS_Fun_0021 ---------------- */
test('Pos_Fun_0021 – Convert sentence with quotes (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('eyaa kivvaa "mama ennam" kiyalaa.');

  await waitForExpectedText(page, 'එයා කිව්වා "මම එන්නම්" කියලා.');
});

/* ---------------- POS_Fun_0022 ---------------- */
test('Pos_Fun_0022 – Convert sentence with parentheses (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('mama (adha) ennam.');

  await waitForExpectedText(page, 'මම (අද) එන්නම්.');
});

/* ---------------- POS_Fun_0023 ---------------- */
test('Pos_Fun_0023 – Convert sentence with slash (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('mama tea/coffee dhenna.');

  await waitForExpectedText(page, 'මම tea/coffee දෙන්න.');
});

/* ---------------- POS_Fun_0024 ---------------- */
test('Pos_Fun_0024 – Convert sentence with hyphen (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('mee - hoDHAyi.');

  await waitForExpectedText(page, 'මේ - හොඳයි.');
});

/* ---------------- POS_UI_0001 ---------------- */
test('Pos_UI_0001 – Clear input clears output (PASS)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('mama gedhara yanavaa');

  // wait until at least some Sinhala appears before clearing
  await expect.poll(async () => await page.textContent('body'), { timeout: 10000 })
    .toMatch(/[\u0D80-\u0DFF]/);

  const clearBtn = page.getByRole('button', { name: /clear/i });
  await expect(clearBtn).toBeVisible();
  await clearBtn.click();

  // After clear, the previous Sinhala sentence should not remain
  const pageText = await page.textContent('body');
  expect(pageText).not.toContain('මම ගෙදර යනවා');
});

/* ---------------- NEG_Fun_0001 ---------------- */
test('Neg_Fun_0001 – Joined words cause incorrect conversion (FAIL)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('mamagedharayanawa');

  await page.waitForTimeout(2000);

  const pageText = await page.textContent('body');
  expect(pageText).not.toContain('මම ගෙදර යනවා');
});

/* ---------------- NEG_Fun_0002 ---------------- */
test('Neg_Fun_0002 – Multiple spaces cause formatting issues (FAIL)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('mama   gedhara    yanavaa');

  await page.waitForTimeout(2000);

  const pageText = await page.textContent('body');
  expect(pageText).not.toContain('මම ගෙදර යනවා');
});

/* ---------------- NEG_Fun_0003 ---------------- */
test('Neg_Fun_0003 – Random characters mixed in (FAIL)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('mama@@ gedhara!! yanavaa??');

  await page.waitForTimeout(2000);

  const pageText = await page.textContent('body');
  expect(pageText).not.toContain('මම ගෙදර යනවා');
});

/* ---------------- NEG_Fun_0004 ---------------- */
test('Neg_Fun_0004 – Numbers inside words (FAIL)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('ma2ma ge3dhara yanavaa');

  await page.waitForTimeout(2000);

  const pageText = await page.textContent('body');
  expect(pageText).not.toContain('මම ගෙදර යනවා');
});

/* ---------------- NEG_Fun_0005 ---------------- */
test('Neg_Fun_0005 – Only English input (FAIL)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('I will go home now.');

  await page.waitForTimeout(2000);

  const pageText = await page.textContent('body');
  expect(pageText).not.toContain('මම දැන් ගෙදර යනවා.');
});

/* ---------------- NEG_Fun_0006 ---------------- */
test('Neg_Fun_0006 – Empty input (FAIL)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.waitForTimeout(2000);

  const pageText = await page.textContent('body');
  expect(pageText).not.toContain('මම ගෙදර යනවා');
});

/* ---------------- NEG_Fun_0007 ---------------- */
test('Neg_Fun_0007 – Only symbols (FAIL)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('!!!@@@###');

  await page.waitForTimeout(2000);

  const pageText = await page.textContent('body');
  expect(pageText).not.toContain('මම ගෙදර යනවා');
});

/* ---------------- NEG_Fun_0008 ---------------- */
test('Neg_Fun_0008 – Very long repeated text robustness (FAIL)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('mama gedhara yanavaa '.repeat(40));

  await page.waitForTimeout(2000);

  const pageText = await page.textContent('body');
  expect(pageText).not.toContain('මම ගෙදර යනවා');
});

/* ---------------- NEG_Fun_0009 ---------------- */
test('Neg_Fun_0009 – Mixed Sinhala + Singlish in input (FAIL)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('mama ගෙදර yanavaa');

  await page.waitForTimeout(2000);

  const pageText = await page.textContent('body');
  expect(pageText).not.toContain('මම ගෙදර යනවා');
});

/* ---------------- NEG_Fun_0010 ---------------- */
test('Neg_Fun_0010 – Misspelling stress case (FAIL)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const input = page.locator('textarea');
  await input.fill('mm gedhr ynwa');

  await page.waitForTimeout(2000);

  const pageText = await page.textContent('body');
  expect(pageText).not.toContain('මම ගෙදර යනවා');
});
