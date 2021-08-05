let app = new Vue({
    el:'#app',
    data:{
        inPageArticle:false,
        currentIndex:0,
        posts:[]

    },
    // mounted() permettra d'appeler une méthode, avant le chargement de la page.
    mounted: function() {
        this.updatePost() 
    },
    computed: {
        currentArticle: function(){
            return this.posts.articles[this.posts.currentIndex]
        }
    },
    
    
    methods:{
        // liens par catégorie

        entertainment(){
            axios.get("https://newsapi.org/v2/top-headlines?country=fr&category=entertainment&apiKey=28243b1c938f4b199614fa85217bd50b").then(reponse => this.posts = reponse.data)
            .catch(err => console.log(err));
        },        
        health(){
            axios.get("https://newsapi.org/v2/top-headlines?country=fr&category=health&apiKey=28243b1c938f4b199614fa85217bd50b").then(reponse => this.posts = reponse.data)
            .catch(err => console.log(err));
        },        
        science(){
            axios.get("https://newsapi.org/v2/top-headlines?country=fr&category=science&apiKey=28243b1c938f4b199614fa85217bd50b").then(reponse => this.posts = reponse.data)
            .catch(err => console.log(err));
        },        
        business(){
            axios.get("https://newsapi.org/v2/top-headlines?country=fr&category=business&apiKey=28243b1c938f4b199614fa85217bd50b").then(reponse => this.posts = reponse.data)
            .catch(err => console.log(err));
        },       
        technology(){
            axios.get("https://newsapi.org/v2/top-headlines?country=fr&category=technology&apiKey=28243b1c938f4b199614fa85217bd50b").then(reponse => this.posts = reponse.data)
            .catch(err => console.log(err));
        },
        sport(){
            axios.get("https://newsapi.org/v2/top-headlines?country=fr&category=sports&apiKey=28243b1c938f4b199614fa85217bd50b").then(reponse => this.posts = reponse.data)
            .catch(err => console.log(err));
        },
        
        updatePost(){


            axios.get("https://newsapi.org/v2/top-headlines?country=fr&apiKey=28243b1c938f4b199614fa85217bd50b").then(reponse => this.posts = reponse.data)
            .catch(err => console.log(err));
            
        // // (reponse=> console.log(reponse)


    },
    showArticle: function(i) {

        this.posts.currentIndex = i
        this.inPageArticle = true
    },


}
}) 




