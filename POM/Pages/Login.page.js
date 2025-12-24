import Basepage from "./Base.page.js";

class Loginpage extends Basepage{
    constructor(page){
        super(page);

        //Locators
        this.emailInput = page.getByPlaceholder('Email Address');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginBtn = page.getByRole('button',{name:'Login'});
    }

    async navigate(){
        await super.navigate('');
    }

    async login(email,password){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
        
    }




}

export default Loginpage;