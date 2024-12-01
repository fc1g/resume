import { NavigationPage } from '@/helpers/navigationPage';
import { expect, test } from '@playwright/test';

const api = 'http://localhost:4321/';

test.beforeEach(async ({ page }) => {
  await page.goto(api);
});

test.describe('header', () => {
  test('page navigation. On each page, the navigation menu item should be highlighted with a background', async ({
    page,
  }) => {
    /* Arrange */
    const nav = page.getByLabel('navigation');
    const navTo = new NavigationPage(page);

    /* Act */ /* & */ /* Assert */
    await navTo.homepage();
    await expect(nav.locator('li.bg-primary')).toContainText('Home');
    await navTo.projectsPage();

    await expect(nav.locator('li.bg-primary')).toContainText('Projects');

    await navTo.contactsPage();
    await expect(nav.locator('li.bg-primary')).toContainText('Contacts');
  });

  test('the theme switcher. Each of the theme options in the menu changes the background of the document.', async ({
    page,
  }) => {
    /* Arrange */
    const themeMenuItems = ['Light', 'Dark', 'System'];
    const colors = {
      Light: 'rgb(255, 255, 255)',
      Dark: 'rgb(2, 8, 23)',
      System: 'rgb(255, 255, 255)',
    };
    const darkModeBtn = page.locator('button', { hasText: 'Toggle theme' });

    /* Act */
    await darkModeBtn.click();
    const listItems = page.getByRole('menuitem');

    /* Assert */
    await expect(listItems).toHaveText(themeMenuItems);
    for (const color in colors) {
      await listItems.filter({ hasText: color }).click();
      await expect(page.locator('body')).toHaveCSS(
        'background-color',
        colors[color as keyof typeof colors],
      );
      await page.waitForTimeout(500);
      if (color !== 'System') await darkModeBtn.click();
    }
  });
});

test.describe('main', () => {
  test('homepage should contain heading with text Shapoval Artem', async ({
    page,
  }) => {
    // Arrange
    const headingValue = ' Shapoval Artem ';

    // Act
    const titleValue = await page.locator('h2').textContent();

    // Assert
    expect(titleValue).toEqual(headingValue);
  });

  test('homepage should contain button which redirect user to the projects page', async ({
    page,
  }) => {
    // Arrange
    const buttonValue = 'My projects';

    // Act
    const button = page.getByRole('button', { name: buttonValue });
    await button.click();

    // Assert
    await expect(page).toHaveURL(`${api}en/projects`);
  });
});

test.describe('footer', () => {
  test.describe('homepage should contain a footer with links to the tools used to create this project', () => {
    test('link to the Astro web site', async ({ page }) => {
      /* Arrange */
      const headingValue = ' The web framework for content-driven websites ';
      const astroLinkHref = (await page
        .locator('footer')
        .getByRole('link', { name: 'Astro' })
        .getAttribute('href')) as string;

      /* Act */
      await page.goto(astroLinkHref);

      /* Assert */
      await expect(page.locator('h1')).toContainText(headingValue);
    });

    test('link to the TailwindCSS web site', async ({ page }) => {
      /* Arrange */
      const headingValue =
        'Rapidly build modern websites without ever leaving your HTML.';
      const astroLinkHref = (await page
        .locator('footer')
        .getByRole('link', { name: 'Tailwind CSS' })
        .getAttribute('href')) as string;

      /* Act */
      await page.goto(astroLinkHref);

      /* Assert */
      await expect(page.locator('h1')).toContainText(headingValue);
    });
  });

  test('homepage should contain a footer with social media links', async ({
    page,
  }) => {
    /* Arrange */
    const socialMedias = ['GitHub', 'HackerRank', 'Linkedin'];
    const socialLinks = page.locator('footer li.group');

    /* Assert */
    await expect(socialLinks).toContainText(socialMedias);
  });
});
