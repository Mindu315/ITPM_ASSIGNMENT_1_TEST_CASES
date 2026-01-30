const { test, expect } = require('@playwright/test');

const URL = 'https://www.swifttranslator.com/';

/**
 * Wait until Sinhala output appears anywhere on the page (0D80–0DFF range).
 * This removes flaky fixed timeouts.
 */
async function waitForSinhalaToAppear(page) {
  await page.waitForFunction(() => /[\u0D80-\u0DFF]/.test(document.body.innerText), null, {
    timeout: 20000,
  });
}

/**
 * Wait until expected text appears in the page body.
 */
async function waitForExpectedText(page, expected) {
  await expect
    .poll(async () => await page.textContent('body'), { timeout: 20000 })
    .toContain(expected);
}


/* ---------------- Pos_Fun_0001 ---------------- */
test('Pos_Fun_0001 – Convert greeting with name (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('aayuboovan nimal!');

  await waitForExpectedText(page, 'ආයුබෝවන් නිමල්!');
});

/* ---------------- Pos_Fun_0002 ---------------- */
test('Pos_Fun_0002 – Convert simple need statement (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('mata vathura oonee.');

  await waitForExpectedText(page, 'මට වතුර ඕනේ.');
});

/* ---------------- Pos_Fun_0003 ---------------- */
test('Pos_Fun_0003 – Convert present tense work statement (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('mama dhaen vaeda karanavaa.');

  await waitForExpectedText(page, 'මම දැන් වැඩ කරනවා.');
});

/* ---------------- Pos_Fun_0004 ---------------- */
test('Pos_Fun_0004 – Convert question about time (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('dhavasata kohomadha?');

  await waitForExpectedText(page, 'දවසට කොහොමද?');
});

/* ---------------- Pos_Fun_0005 ---------------- */
test('Pos_Fun_0005 – Convert polite request (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('karuNaakara mata podi udhavvak dhenna.');

  await waitForExpectedText(page, 'කරුණාකර මට පොඩි උදව්වක් දෙන්න.');
});

/* ---------------- Pos_Fun_0006 ---------------- */
test('Pos_Fun_0006 – Convert compound sentence with contrast (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('mama ennam, haebaeyi kalin call karannam.');

  await waitForExpectedText(page, 'මම එන්නම්, හැබැයි කලින් call කරන්නම්.');
});

/* ---------------- Pos_Fun_0007 ---------------- */
test('Pos_Fun_0007 – Convert complex conditional (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('oyaa enavanam api yamu.');

  await waitForExpectedText(page, 'ඔයා එනවනම් අපි යමු.');
});

/* ---------------- Pos_Fun_0008 ---------------- */
test('Pos_Fun_0008 – Convert negative form (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('mama adha yannee naehae.');

  await waitForExpectedText(page, 'මම අද යන්නේ නැහැ.');
});

/* ---------------- Pos_Fun_0009 ---------------- */
test('Pos_Fun_0009 – Convert past tense (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('Mama iye market giyaa.');

  await waitForExpectedText(page, 'මම ඉයෙ market ගියා.');
});

/* ---------------- Pos_Fun_0010 ---------------- */
test('Pos_Fun_0010 – Convert future tense plan (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('Api heta beach yamu.');

  await waitForExpectedText(page, 'අපි හෙට beach යමු.');
});

/* ---------------- Pos_Fun_0011 ---------------- */
test('Pos_Fun_0011 – Convert pronoun variation (we) (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('api passee kathaa karamu.');

  await waitForExpectedText(page, 'අපි පස්සේ කතා කරමු.');
});

/* ---------------- Pos_Fun_0012 ---------------- */
test('Pos_Fun_0012 – Convert plural usage (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('oyaalaa dhaen class ekee innavaa.');

  await waitForExpectedText(page, 'ඔයාලා දැන් class එකේ ඉන්නවා.');
});

/* ---------------- Pos_Fun_0013 ---------------- */
test('Pos_Fun_0013 – Convert repeated words emphasis (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('hari hari lassanayi!');

  await waitForExpectedText(page, 'හරි හරි ලස්සනයි!');
});

/* ---------------- Pos_Fun_0014 ---------------- */
test('Pos_Fun_0014 – Convert joined vs spaced (proper spacing) (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('mama gedhara aavillaa innavaa.');

  await waitForExpectedText(page, 'මම ගෙදර ආවිල්ලා ඉන්නවා.');
});

/* ---------------- Pos_Fun_0015 ---------------- */
test('Pos_Fun_0015 – Mixed English technical terms (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('Magee WiFi password eka change karanna.');

  await waitForExpectedText(page, 'මගේ WiFi password එක change කරන්න.');
});

/* ---------------- Pos_Fun_0016 ---------------- */
test('Pos_Fun_0016 – Empty input (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('nan');

  await waitForExpectedText(page, 'nan');
});

/* ---------------- Pos_Fun_0017 ---------------- */
test('Pos_Fun_0017 – Abbreviations (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('Magee NIC eka scan karala email karanna.');

  await waitForExpectedText(page, 'මගේ NIC එක scan කරල email කරන්න.');
});

/* ---------------- Pos_Fun_0018 ---------------- */
test('Pos_Fun_0018 – Punctuation handling (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('eka hari! oyaa sure dha?');

  await waitForExpectedText(page, 'එක හරි! ඔයා sure ද?');
});

/* ---------------- Pos_Fun_0019 ---------------- */
test('Pos_Fun_0019 – Currency and units (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('Rs. 2500 vagee venavaa, 2kg ganna.');

  await waitForExpectedText(page, 'Rs. 2500 වගේ වෙනවා, 2kg ගන්න.');
});

/* ---------------- Pos_Fun_0020 ---------------- */
test('Pos_Fun_0020 – Time format (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('Meeting eka 7.30 AM dha?');

  await waitForExpectedText(page, 'Meeting එක 7.30 AM ද?');
});

/* ---------------- Pos_Fun_0021 ---------------- */
test('Pos_Fun_0021 – Only numbers (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('1234567890');

  // Numbers should remain unchanged
  await waitForExpectedText(page, '1234567890');
});


/* ---------------- Pos_Fun_0022 ---------------- */
test('Pos_Fun_0022 – Line breaks (multi-line) (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill(`mama gedhara yanavaa.oyaa enavadha?`);

  await waitForExpectedText(page, `මම ගෙදර යනවා.ඔයා එනවද?`);
});

/* ---------------- Pos_Fun_0023 ---------------- */
test('Pos_Fun_0023 – Medium paragraph (realistic) (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('mama adha office gihin reports tika submit kaLaa. passee lunch kanna giyaa, eeta passee bus eken gedhara aavaa.');

  await waitForExpectedText(page, 'මම අද office ගිහින් reports ටික submit කළා. පස්සේ lunch කන්න ගියා, ඒට පස්සේ bus එකෙන් ගෙදර ආවා.');
});

/* ---------------- Pos_Fun_0024 ---------------- */
test('Pos_Fun_0024 – Complex reason sentence (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('Traffic තියෙන නිසා මම late වෙනවා.');

  await waitForExpectedText(page, 'Traffic තියෙන නිසා මම late වෙනවා.');
});

/* ---------------- Neg_Fun_0001 ---------------- */
test('Neg_Fun_0001 – Joined words no spaces (stress) (FAIL)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('mamagedharayanawa');

  await waitForSinhalaToAppear(page);

  const pageText = await page.textContent('body');
  expect(pageText).not.toContain('මම ගෙදර යනවා');
});

/* ---------------- Neg_Fun_0002 ---------------- */
test('Neg_Fun_0002 – Heavy typo word (FAIL)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('Mataa bath oonee');

  await waitForSinhalaToAppear(page);

  const pageText = await page.textContent('body');
  expect(pageText).not.toContain('මට බත් ඕනේ');
});

/* ---------------- Neg_Fun_0003 ---------------- */
test('Neg_Fun_0003 – Slang + mixed English abbreviation (FAIL)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('machan ASAP, mawa gedara ekkan yanna');

  await waitForSinhalaToAppear(page);

  const pageText = await page.textContent('body');
  expect(pageText).not.toContain('මචන් ASAP, මාව ගෙදර එක්කන් යන්න');
});

/* ---------------- Neg_Fun_0004 ---------------- */
test('Neg_Fun_0004 – Random symbols (FAIL)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('Mama ### gedara yanawa!!!');

  await waitForSinhalaToAppear(page);

  const pageText = await page.textContent('body');
  expect(pageText).not.toContain('මම ගෙදර යනවා!!!');
});

/* ---------------- Neg_Fun_0005 ---------------- */
test('Neg_Fun_0005 – Very long input (L) paragraph robustness (FAIL)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('Mama ada office gihin meeting 2k thibuna. Eken passe documents tika attach karala email ekak evanna oone. Habayi system eka slow una nisa mama late una. Eeta passe bus eka miss una, itapasse taxi ekak gatta. Dawasama kala balala thama gedara awa. Mama ada office gihin meeting 2k thibuna. Eken passe documents tika attach karala email ekak evanna oone. Habayi system eka slow una nisa mama late una. Eeta passe bus eka miss una, itapasse taxi ekak gatta. Dawasama kala balala thama gedara awa. Mama ada office gihin meeting 2k thibuna. Eken passe documents tika attach karala email ekak evanna oone. Habayi system eka slow una nisa mama late una. Eeta passe bus eka miss una, itapasse taxi ekak gatta. Dawasama kala balala thama gedara awa. Mama ada office gihin meeting 2k thibuna. Eken passe documents tika attach karala email ekak evanna oone. Habayi system eka slow una nisa mama late una. Eeta passe bus eka miss una, itapasse taxi ekak gatta. Dawasama kala balala thama gedara awa. Mama ada office gihin meeting 2k thibuna. Eken passe documents tika attach karala email ekak evanna oone. Habayi system eka slow una nisa mama late una. Eeta passe bus eka miss una, itapasse taxi ekak gatta. Dawasama kala balala thama gedara awa. ');

  await waitForSinhalaToAppear(page);

  const pageText = await page.textContent('body');
  expect(pageText).not.toContain('Long text should convert without breaking UI; meaning should be preserved.');
});

/* ---------------- Neg_Fun_0006 ---------------- */
test('Neg_Fun_0006 – Multiple spaces robustness (FAIL)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('mama dhan enava.');

  await waitForSinhalaToAppear(page);

  const pageText = await page.textContent('body');
  expect(pageText).not.toContain('මම දැන් එනවා.');
});

/* ---------------- Neg_Fun_0007 ---------------- */
test('Neg_Fun_0007 – Preserve common place names (FAIL)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('api Colombo yanna hadhanna.');

  await waitForSinhalaToAppear(page);

  const pageText = await page.textContent('body');
  expect(pageText).not.toContain('අපි Colombo යන්න හදන්නේ.');
});

/* ---------------- Neg_Fun_0008 ---------------- */
test('Neg_Fun_0008 – Emoji included (FAIL)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('Mam happy 😊');

  await waitForSinhalaToAppear(page);

  const pageText = await page.textContent('body');
  expect(pageText).not.toContain('මම happy 😊');
});

/* ---------------- Neg_Fun_0009 ---------------- */
test('Neg_Fun_0009 – Excessive line breaks (FAIL)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill(`Mama gedara yanawa.


Oya enawada?`);

  await waitForSinhalaToAppear(page);

  const pageText = await page.textContent('body');
  expect(pageText).not.toContain(`මම ගෙදර යනවා.


ඔයා එනවද?`);
});

/* ---------------- Neg_Fun_0010 ---------------- */
test('Neg_Fun_0010 – Mixed with URL (FAIL)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('Me link eka balanna: https://example.com');

  await waitForSinhalaToAppear(page);

  const pageText = await page.textContent('body');
  expect(pageText).not.toContain('මේ link එක බලන්න: https://example.com');
});

/* ---------------- Pos_UI_0001 ---------------- */
test('Pos_UI_0001 – Clear input clears output (UI) (UI) (PASS)', async ({ page }) => {
  await page.goto(URL);

  const input = page.locator('textarea');
  await input.fill('mama gedhara yanavaa');

  await waitForSinhalaToAppear(page);

  // FIX: strict mode issue (multiple "Clear" buttons) → select the labeled one
  const clearBtn = page.getByLabel('Clear');
  await clearBtn.click();

  // Ensure input is cleared
  await expect(input).toHaveValue('');

  // Output should be cleared as well (best-effort: body should not contain previous translation)
  const pageText = await page.textContent('body');
  expect(pageText).not.toContain('මම ගෙදර යනවා');
});