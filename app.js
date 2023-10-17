const express = require ('express')
const cors= require ('cors')
const morgan= require ( 'morgan')
const path= require('node:path')
require('./src/models/post')

// desde base de dados importa
const{sequelize}= require ('./database')
//configuracion ruta del servidor
//se testea en localhost3000
const app = express ()
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(cors())
app.use(morgan('dev'))

app.use(express.static(__dirname + "/public"));

app.set('views', __dirname + '/src' + '/views');

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {

    const Posts = await  PostModel.findAll()

    res.render("index", {
        title: "Foro",
        listaDePosts: posts.reverse(),
      });
    });

    app.get("/crear", async (req, res) => {
        res.render("crear");
      });
     
    app.get("/editar/:id", async (req, res) => {
    
        const postId = req.params.id;
    
        const post = await PostModel.findByPk(postId);
    
        res.render("editar", { post });
    }); 
    app.get("/eliminar/:id", async (req, res) => {

        const postId = req.params.id;
        const {title, content, image} = req.body;
    
        const post = await PostModel.findByPk(postId);
        
        await post.destroy({title, content, image})
    
        res.redirect("/");
    }); 
app.set ('views',path.join(__dirname,'src', 'views'))
//configura las vistas del motor ejs
app.set ('view engine', 'ejs')
app.get('/',(req,res)=> {


    res.render ('index',{title: "pagina principal",})
})



app.use ('/post', require ('./src/routes/post.routes'))
app. listen(3000, ()=> {
  
    sequelize.sync ({ force:false })
    .then(()=> console.log("db is connected"))
    .catch(err=> console.log(err))
    console.log("server on port 3000");
})