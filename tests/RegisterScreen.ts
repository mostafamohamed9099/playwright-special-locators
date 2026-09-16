import { type Page , Locator} from "@playwright/test"
import { BaseAcademy } from "./BaseAcademy";


export class RegisterScreen extends BaseAcademy{

    readonly Name:Locator;
    readonly Email : Locator;
    readonly Password : Locator ;
    readonly Checkbox : Locator ;
    readonly Gender : Locator ;
    readonly Radiobutton : Locator;
    readonly Submitbutton : Locator ;
    readonly Shoplink : Locator ; 
    readonly Cardiphone : Locator;
    readonly Cardnokia : Locator ; 
    readonly Checkbutton : Locator ; 



    constructor (page :Page){
        super(page);

        this.Name = page.locator("input[name='name']").first();
        this.Email = page.locator("input[name='email']");
        this.Password = page.getByPlaceholder("password");
        this.Checkbox = page.getByLabel("Check me out if you Love IceCreams!");
        this.Gender = page.getByLabel("Gender");
        this.Radiobutton = page.getByLabel("Employed");
        this.Submitbutton = page.getByRole("button" , {name : "Submit"});
        this.Shoplink = page.getByRole ("link" , {name : "Shop"});
        this.Cardiphone = page.locator("app-card").filter({ hasText : "iphone X"}).getByRole("button" , {name : "Add "});
        this.Cardnokia = page.locator("app-card").filter({ hasText : "Nokia Edge"}).getByRole("button" , {name :"Add "});
        this.Checkbutton = page.getByText("Checkout");


    }
    
    async open(): Promise<void>{

        await super.opensite();
    }

    async fill():Promise<void>{
         await this.Name.fill("Mostafa Farghly");
         await this.Email.fill("mostafa.mohamed9099@gmail.com");
         await this.Password.fill("Aa@12345");
         await this.Checkbox.check();
         await this.Gender.selectOption("Female");
         await this.Radiobutton.check();
         await this.Submitbutton.click();
        
         


    }



}