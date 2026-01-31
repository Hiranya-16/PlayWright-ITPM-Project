const { test, expect } = require('@playwright/test');

// Test Data
const testData = {
  positive: [
    // 1. Sentence Structures (3 cases)
    {
      id: 'Pos_Fun_0001',
      name: 'Simple sentence',
      input: 'whatsapp message eka.',
      expected: 'whatsapp message එක.',
      length: 'S', // 14 characters
    },
    {
      id: 'Pos_Fun_0002',
      name: 'Compound sentence',
      input: 'mee, udhe 9.30 ta kalin message eka dhaanna naeththan absent vaetenavaa.',
      expected: 'මේ, උදෙ 9.30 ට කලින් message එක දාන්න නැත්තන් absent වැටෙනවා.',
      length: 'S', // 15 characters
    },
    {
      id: 'Pos_Fun_0003',
      name: 'Compound sentence',
      input: 'oyaata adha daily task ekak thiyanavadha?',
      expected: 'ඔයාට අද daily task එකක් තියනවද?',
      length: 'S', // 15 characters
    },
    {
      id: 'Pos_Fun_0004',
      name: 'Compound sentence',
      input: 'oya adha gedharadha? naeththan boodimedha inne?',
      expected: 'ඔය අද ගෙදරද? නැත්තන් බෝඩිමෙද ඉන්නේ?',
      length: 'S', // 15 characters
    },
    {
      id: 'Pos_Fun_0005',
      name: 'Compound sentence',
      input: 'mamanam gedhara',
      expected: 'මමනම් ගෙදර',
      length: 'S', // 15 characters
    },
    {
      id: 'Pos_Fun_0006',
      name: 'Compound sentence',
      input: 'adha meeting ekak thiyanava nedha?',
      expected: 'අද meeting එකක් තියනව නේද?',
      length: 'S', // 15 characters
    },
    {
      id: 'Pos_Fun_0007',
      name: 'Compound sentence',
      input: 'meeting eka Zoom valin thiyenavaa kiyala email ekak aavaa.',
      expected: 'meeting එක Zoom වලින් තියෙනවා කියල email එකක් ආවා.',
      length: 'S', // 15 characters
    },
    {
      id: 'Pos_Fun_0008',
      name: 'Compound sentence',
      input: 'Oyaata mail ekak aavadha?',
      expected: 'ඔයාට mail එකක් ආවද?',
      length: 'S', // 15 characters
    },
    {
      id: 'Pos_Fun_0009',
      name: 'Compound sentence',
      input: 'anee naeene.',
      expected: 'අනේ නෑනෙ.',
      length: 'S', // 15 characters
    },
    {
      id: 'Pos_Fun_0010',
      name: 'Compound sentence',
      input: 'adha udhee vaessa vahina nisaa mama gedhara inne. office yanna hithuvath traffic saha bus prashna nisaa work tika online valin karanna kiyala manager ta message ekak yaevuuvaa.',
      expected: 'අද උදේ වැස්ස වහින නිසා මම ගෙදර ඉන්නේ. office යන්න හිතුවත් traffic සහ bus ප්‍රශ්න නිසා work ටික online වලින් කරන්න කියල manager ට message එකක් යැවූවා.',
      length: 'S', // 15 characters
    },
    {
      id: 'Pos_Fun_0011',
      name: 'Compound sentence',
      input: 'avulak vena ekak naee needha?',
      expected: 'අවුලක් වෙන එකක් නෑ නේද?',
      length: 'S', // 15 characters
    },
    {
      id: 'Pos_Fun_0012',
      name: 'Compound sentence',
      input: 'mama vaediya leave aragenath naene.',
      expected: 'මම වැඩිය leave අරගෙනත් නැනෙ.',
      length: 'S', // 15 characters
    },
    {
      id: 'Pos_Fun_0013',
      name: 'Compound sentence',
      input: 'oyagen sir mangaena ahuvoth kiyanna haridha. mata vaessa nisaa enna vidhihak naeththe kiyala.',
      expected: 'ඔයගෙන් sir මන්ගැන අහුවොත් කියන්න හරිද. මට වැස්ස නිසා එන්න විදිහක් නැත්තෙ කියල.',
      length: 'S', // 15 characters
    },
    {
      id: 'Pos_Fun_0014',
      name: 'Compound sentence',
      input: 'oheta vahinne naedhdha?',
      expected: 'ඔහෙට වහින්නෙ නැද්ද?',
      length: 'S', // 15 characters
    },
    {
      id: 'Pos_Fun_0015',
      name: 'Compound sentence',
      input: 'Mehetanam hodhatama vahinnavaa.',
      expected: 'මෙහෙටනම් හොදටම වහින්නවා.',
      length: 'S', // 15 characters
    },
    {
      id: 'Pos_Fun_0016',
      name: 'Compound sentence',
      input: 'aeyi ee venas kare. kalin thibba eka lassanayi.',
      expected: 'ඇයි ඒ වෙනස් කරෙ. කලින් තිබ්බ එක ලස්සනයි.',
      length: 'S', // 15 characters
    },
    {
      id: 'Pos_Fun_0017',
      name: 'Compound sentence',
      input: 'Oyaata sanipanaee kiyala kive.',
      expected: 'ඔයාට සනිපනෑ කියල කිවෙ.',
      length: 'S', // 15 characters
    },
    {
      id: 'Pos_Fun_0018',
      name: 'Compound sentence',
      input: 'dhaen oyaata kohomadha? aduyidha?',
      expected: 'දැන් ඔයාට කොහොමද? අඩුයිද?',
      length: 'S', // 15 characters
    },
    {
      id: 'Pos_Fun_0019',
      name: 'Compound sentence',
      input: 'beheth gaththadha?',
      expected: 'බෙහෙත් ගත්තද?',
      length: 'S', // 15 characters
    },
    {
      id: 'Pos_Fun_0020',
      name: 'Compound sentence',
      input: 'vaedi venakan inne naethuva beheth ganna e hindha.',
      expected: 'වැඩි වෙනකන් ඉන්නේ නැතුව බෙහෙත් ගන්න එ හින්ද.',
      length: 'S', // 15 characters
    },
    {
      id: 'Pos_Fun_0021',
      name: 'Compound sentence',
      input: 'Mail eka dhaemmaa oyaata.',
      expected: 'Mail එක දැම්මා ඔයාට.',
      length: 'S', // 15 characters
    },
    {
      id: 'Pos_Fun_0022',
      name: 'Compound sentence',
      input: '10am meeting eka thiyenne.',
      expected: '10am meeting එක තියෙන්නෙ.',
      length: 'S', // 15 characters
    },
    {
      id: 'Pos_Fun_0023',
      name: 'Compound sentence',
      input: 'parakku venna epaa.',
      expected: 'පරක්කු වෙන්න එපා.',
      length: 'S', // 15 characters
    },
    {
      id: 'Pos_Fun_0024',
      name: 'Compound sentence',
      input: 'adha madam ehemath enavaa.',
      expected: 'අද madam එහෙමත් එනවා.',
      length: 'S', // 15 characters
    }






   
  ],

  negative: [
    // 1. Joined words issue
    {
      id: 'Neg_Fun_0001',
      name: 'Missing spaces',
      input:
        'Good morning ! Attendenc mark karada?',
      expected:
        'Good morning ! attendens mark  කරාද?',
      length: 'M', // 376 characters
      issue: 'Missing spaces between words',
    },

    // 2. Mixed language
    {
      id: 'Neg_Fun_0002',
      name: 'English abbreviation',
      input:
        'karunaakara ane mata zoom link eka dhenna puluvanandha? Mage mail eke mokakhari avuulak vela man hithanne. iiye bank eke money transfer karana velaveth mail eka awe nee. mokak veladha dhanne naee.',
      expected:
        'කරුනාකර අනෙ මට zoom link එක දෙන්න පුලුවනන්ද? මගෙ mail ඵකේ මොකක්හරි අවූලක් වෙල මන් හිතන්නෙ. ඊයෙ bank eke money transfer කරන වෙලවෙත් mail එක ආවෙ නෑ. මොකක් වෙලද දන්නෙ නෑ.',
      length: 'M', // 80 characters
      issue: 'English abbreviations may not convert',
    },

    {
      id: 'Neg_Fun_0003',
      name: 'Missing spaces',
      input:
        'mata labana sathiye poject eke presentation ekath karanna thiyanavaa.',
      expected:
        'මට ලබන සතියෙ project ඵකේ presentation එකත් කරන්න තියනවා.',
      length: 'M', // 376 characters
      issue: 'Missing spaces between words',
    },
    {
      id: 'Neg_Fun_0004',
      name: 'Missing spaces',
      input:
        'mama daily task eke vaeda patangaththa. Oya?',
      expected:
        'මම daily task ඵකේ වැඩ පටන්ගත්ත. ඔය?',
      length: 'M', // 376 characters
      issue: 'Missing spaces between words',
    },
    {
      id: 'Neg_Fun_0005',
      name: 'Missing spaces',
      input:
        'me eka neme. Oya instgram eke username eka venas karadha?',
      expected:
        'මෙ එක නෙමෙ. ඔය Instagram එකේ username එක වෙනස් කරද?',
      length: 'M', // 376 characters
      issue: 'Missing spaces between words',
    },
    {
      id: 'Neg_Fun_0006',
      name: 'Missing spaces',
      input:
        'sadu2002@ meeka ne?',
      expected:
        'sadu2002@ මේක නේ?',
      length: 'M', // 376 characters
      issue: 'Missing spaces between words',
    },
    {
      id: 'Neg_Fun_0007',
      name: 'Missing spaces',
      input:
        'Ammo me semester ekenm vaeda wadi needha. Intern ekka vaedayi, projectvala vaedayi needha. apita thibbe giya sem eke intern eka karanna. ehema karaanam tikak free eke karanna thibba. giya sem eke vaedatikak aduyine.',
      expected:
        'අම්මො මෙ semester එකෙන්ම් වැඩ වැඩී නේද. Intern eke වැඩයි, projectටල වැඩයි නේද. අපිට තිබ්බෙ ගිය සෙම් ඵකේ ඉන්ටෙන් එක කරන්න. එහෙම කරන්ම් ටිකක් free eke කරන්න තිබ්බ ගිය සෙම් ඵකේ වැඩටිකක් අඩුයිනෙ.',
      length: 'M', // 376 characters
      issue: 'Missing spaces between words',
    },
    {
      id: 'Neg_Fun_0008',
      name: 'Missing spaces',
      input:
        'medhavasvala vAIras ekak thiyanava mage yaluvektath una haedhila thibila eyata godak amaru unaa..',
      expected:
        'මෙදවස්වල වෛරස් එකක් තියනව මගෙ යලුවෙක්ටත් උන හැදිල තිබිල එයට ගොඩක් අමරු උනා.',
      length: 'M', // 376 characters
      issue: 'Missing spaces between words',
    },
    {
      id: 'Neg_Fun_0009',
      name: 'Missing spaces',
      input:
        'maQQ hithanne week end eka hindha progress meeting eka. venna one',
      expected:
        'මං හිතන්නෙ week end එක හින්ද progress meeting එක. වෙන්න ඕනෙ.',
      length: 'M', // 376 characters
      issue: 'Missing spaces between words',
    },
     {
      id: 'Neg_Fun_0010',
      name: 'Missing spaces',
      input:
        'man hithanne.',
      expected:
        'මන් හිතන්නෙ.',
      length: 'M', // 376 characters
      issue: 'Missing spaces between words',
    }

  
  ],
};

test.describe('Singlish to Sinhala Translator Tests', () => {
  let page;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://www.swifttranslator.com/');
  });

  test.afterEach(async () => {
    await page.close();
  });

  // Helper function to execute test
  async function runTest(inputText) {
    // Find the textarea by its class
    const inputField = page.locator('textarea.w-full.h-80').first();

    // Clear and type
    await inputField.clear();
    await inputField.type(inputText);
    await page.keyboard.press('Space'); // Trigger conversion

    // Find output field
    const outputField = page.locator('.w-full.h-80').nth(1);

    // Wait for text to appear using polling
    await expect
      .poll(
        async () => {
          const text = await outputField.innerText();
          return text && text.trim().length > 0;
        },
        {
          message: 'Waited for translation to appear',
          timeout: 100000,
        },
      )
      .toBe(true);

    return (await outputField.innerText()).trim();
  }

  // POSITIVE TESTS
  for (const testCase of testData.positive) {
    test(`Positive Test ${testCase.id}: ${testCase.name}`, async () => {
      const actualOutput = await runTest(testCase.input);

      console.log(`Test: ${testCase.name}`);
      console.log(`Input: ${testCase.input}`);
      console.log(`Expected: ${testCase.expected}`);
      console.log(`Actual: ${actualOutput}`);

      const fs = require('fs');
      fs.appendFileSync(
        'test-debug.log',
        `\nTest: ${testCase.name}\nExpected: "${testCase.expected}"\nActual:   "${actualOutput}"\n`,
      );

      // Check if output is not empty
      expect(
        actualOutput,
        `Output was empty for input: ${testCase.input}`,
      ).toBeTruthy();

      // Strict check with trim
      expect(
        actualOutput.trim(),
        `Expected "${testCase.expected}" but got "${actualOutput.trim()}"`,
      ).toBe(testCase.expected);

      // For simple verification, we check if output contains Sinhala characters
      const sinhalaRegex = /[\u0D80-\u0DFF]/;
      expect(sinhalaRegex.test(actualOutput)).toBeTruthy();
    });
  }

  // NEGATIVE TESTS
  for (const testCase of testData.negative) {
    test(`Negative Test ${testCase.id}: ${testCase.name}`, async () => {
      const actualOutput = await runTest(testCase.input);

      console.log(`Negative Test: ${testCase.name}`);
      console.log(`Input: ${testCase.input}`);
      console.log(`Expected Issue: ${testCase.issue}`);
      console.log(`Actual: ${actualOutput}`);

      // For negative tests, we might expect:
      // 1. Output to be empty or incorrect
      // 2. English terms to remain unchanged
      // 3. Formatting issues

      if (testCase.expected) {
        // If we have expected value, check if it matches
        expect(
          actualOutput,
          `Output was empty for input: ${testCase.input}`,
        ).toBeTruthy();
        expect(
          actualOutput,
          `Expected "${testCase.expected}" but got "${actualOutput}"`,
        ).toBe(testCase.expected);
      }
    });
  }

  // UI TEST - Real-time conversion
  test('Pos_UI_0001', async () => {
    // Find input textarea
    const inputField = page.locator('textarea.w-full.h-80').first();
    const outputField = page.locator('.w-full.h-80').nth(1);

    // Test 1: Type character by character
    console.log('Testing real-time conversion...');

    await inputField.clear();
    await inputField.type('m');
    await page.keyboard.press('Space'); // Trigger
    await expect
      .poll(async () => (await outputField.innerText()).trim())
      .not.toBe('');

    const output1 = (await outputField.innerText()).trim();
    console.log('After typing "m ":', output1);

    await inputField.type('a');
    await page.keyboard.press('Space'); // Trigger again
    await expect
      .poll(async () => (await outputField.innerText()).trim())
      .not.toBe(output1);

    const output2 = (await outputField.innerText()).trim();
    console.log('After typing "ma ":', output2);

    // Check that output is updating
    expect(output1).not.toBe(output2);
  });
});