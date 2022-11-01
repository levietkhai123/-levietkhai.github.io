import db from '../models/index'

let getHomePage = async (req, res, next) =>{
    try{
        let dataUser = await db.User.findAll();
        return res.render('homepage.ejs',{
            dataUser: JSON.stringify(dataUser)
        })
    }catch(e){
        console.error(e)
    }
   
}

let getAboutPage = (req, res, next) =>{
    return res.render('nav/about.ejs')
}

module.exports =  {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
}