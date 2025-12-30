
class Basepage{
    constructor(page){
        
        this.page=page;
        this.baseURl=process.env.BASE_URL;
    }

    async navigate(path){
        await this.page.goto(this.baseURl + path)
    }

    async getByText(text){
        return this.page.getByText(text);
    }

   

}

export default Basepage;