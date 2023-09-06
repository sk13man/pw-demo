import type { Locator, Page } from '@playwright/test';
import { Chance } from 'chance';

const random = new Chance();

export default class LoginPage {
  private page: Page;
  private loginInput: Locator;
  private passInput: Locator;
  private otpInput: Locator;
  private loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginInput = this.page.getByLabel('Логин *');
    this.passInput = this.page.getByLabel('Пароль *', { exact: true });
    this.otpInput = this.page.getByLabel('Единоразовый OTP пароль *');
    this.loginBtn = this.page.getByRole('button', { name: 'Войти' });
  }

  async login(login: string, pass: string) {
    await this.loginInput.type(login);
    await this.passInput.type(pass);
    await this.otpInput.type(random.word({ length: 5 }));
    await this.loginBtn.click();
  }

  async open() {
    await this.page.goto(process.env.BASEURL, { waitUntil: 'networkidle' });
  }
}
