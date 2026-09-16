import { type Page} from "@playwright/test";


export class BaseAcademy {

    constructor (readonly Page:Page){}

   async opensite():Promise<void>{

    await this.Page.goto("https://rahulshettyacademy.com/angularpractice/");

   }

}