const { test, expect } = require("@playwright/test");
/*
test.describe('Grafikart', () => {
    test('one', async ({ page }) => {
        await page.goto ('https://grafikart.fr/tutoriels/cypress-993')
    }); 
});
*/



test ('Connect sur grafikart', async ({page})=>{
    await page.goto('https://grafikart.fr/tutoriels/cypress-993'); 
    await page.route('**/api/comments', route=> route.fulfill({
        status: 200, 
        body: '[]',
    }));



     //scroller
    // await page.evaluate(() =>window.scrollTo(0, document.scrollHeight)) 
    // console.log('OK')
    // await expect(page.locator('comments__title')).toHaveText('7');
});

test ('Afficher 7 commentaires ', async ({page})=>{
    //NetWork  MOCKER response
    await page.goto('https://grafikart.fr/tutoriels/cypress-993'); 
    await page.route('**/api/comments', route=> route.fulfill({
        status: 200, 
        body: '[
    {
        "id": 46546,
        "username": "betaWeb",
        "html": "\u003Cp\u003EVraiment sympa cet outil, je vais m\u0027y pencher. Merci pour cette d\u00e9couverte ;)\u003C\/p\u003E",
        "content": "Vraiment sympa cet outil, je vais m\u0027y pencher. Merci pour cette d\u00e9couverte ;)",
        "avatar": "\/images\/default.png",
        "target": null,
        "createdAt": 1521116837,
        "parent": 0,
        "userId": 47855
    },
    {
        "id": 47818,
        "username": "UnPassionn\u00e9",
        "html": "\u003Cp\u003EMerci pour cette d\u00e9couverte int\u00e9ressante, je vais pouvoir utiliser ce framework pour mes futurs projets.\u003C\/p\u003E",
        "content": "Merci pour cette d\u00e9couverte int\u00e9ressante, je vais pouvoir utiliser ce framework pour mes futurs projets.",
        "avatar": "\/images\/default.png",
        "target": null,
        "createdAt": 1542124028,
        "parent": 0,
        "userId": 123283
    },
    {
        "id": 51913,
        "username": "L\u00e9o95",
        "html": "\u003Cp\u003EBonjour, la vid\u00e9o est vraiment tr\u00e8s claire et bien expliqu\u00e9, j\u0027ai juste une petite question pour ce qui est du comportement sur un canvas Cypress est-il bien adapt\u00e9 ?\nMerci bien\u003C\/p\u003E",
        "content": "Bonjour, la vid\u00e9o est vraiment tr\u00e8s claire et bien expliqu\u00e9, j\u0027ai juste une petite question pour ce qui est du comportement sur un canvas Cypress est-il bien adapt\u00e9 ?\r\nMerci bien",
        "avatar": "\/images\/default.png",
        "target": null,
        "createdAt": 1614265802,
        "parent": 0,
        "userId": null
    },
    {
        "id": 55845,
        "username": "ninanoel",
        "html": "\u003Cp\u003EMerci pour la vid\u00e9o. Explication clair et pr\u00e9cise.\u003C\/p\u003E",
        "content": "Merci pour la vid\u00e9o. Explication clair et pr\u00e9cise.",
        "avatar": "\/images\/default.png",
        "target": null,
        "createdAt": 1646129660,
        "parent": 0,
        "userId": null
    },
    {
        "id": 55846,
        "username": "Alberto69",
        "html": "\u003Cp\u003ELa vid\u00e9o est tr\u00e8s int\u00e9ressante. Il serait sans doute int\u00e9ressant de traiter le cas des fen\u00eatres modales et des popup qui peuvent exister sur certains sites ou logiciels.\u003C\/p\u003E",
        "content": "La vid\u00e9o est tr\u00e8s int\u00e9ressante. Il serait sans doute int\u00e9ressant de traiter le cas des fen\u00eatres modales et des popup qui peuvent exister sur certains sites ou logiciels.\n",
        "avatar": "\/images\/default.png",
        "target": null,
        "createdAt": 1646130382,
        "parent": 0,
        "userId": null
    },
    {
        "id": 59108,
        "username": "stephanie",
        "html": "\u003Cp\u003Etest\u003C\/p\u003E",
        "content": "test",
        "avatar": "\/images\/default.png",
        "target": null,
        "createdAt": 1698153846,
        "parent": 0,
        "userId": null
    },
    {
        "id": 60180,
        "username": "Dam3316",
        "html": "\u003Cp\u003EVid\u00e9o super interessante, mais visiblement l\u0027arborescence de Cypress a chang\u00e9... Et impossible de trouver les dossier int\u00e9gration et autre... Seul le dossier Plugin est pr\u00e9sent.\u003C\/p\u003E",
        "content": "Vid\u00e9o super interessante, mais visiblement l\u0027arborescence de Cypress a chang\u00e9... Et impossible de trouver les dossier int\u00e9gration et autre... Seul le dossier Plugin est pr\u00e9sent.",
        "avatar": "\/images\/default.png",
        "target": null,
        "createdAt": 1715085571,
        "parent": 0,
        "userId": null
    }
]',
    }));



     //scroller
    // await page.evaluate(() =>window.scrollTo(0, document.scrollHeight)) 
    // console.log('OK')
    // await expect(page.locator('comments__title')).toHaveText('7');
});


