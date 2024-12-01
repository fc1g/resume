import type { Locator, Page } from '@playwright/test';

export class NavigationPage {
  protected readonly homeMenuItem: Locator;
  protected readonly projectsMenuItem: Locator;
  protected readonly contactsMenuItem: Locator;

  constructor(private readonly page: Page) {
    const nav = this.page.getByLabel('navigation');

    this.homeMenuItem = nav.getByText('Home');
    this.projectsMenuItem = nav.getByText('Projects');
    this.contactsMenuItem = nav.getByText('Contacts');
  }
  async homepage() {
    await this.homeMenuItem.click();
  }

  async projectsPage() {
    await this.projectsMenuItem.click();
  }

  async contactsPage() {
    await this.contactsMenuItem.click();
  }
}
