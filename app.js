const app = Vue.createApp({ // this is the "root" component   
    data() {
        return {
            
            url: "https://google.com", 
            showBooks: true,
            
            // replace the following 'book' with the books array below
            // title: 'Fuzzy moosepants', 
            // author: 'stormy', 

            books: [
                {title: "fuzzyness", author: "stormy", img: 'assets/fuzzyness.jpg', isFav: true},
                {title: "fuzzy", author: "forrest", img: 'assets/fuzzy.jpg', isFav: true},
                {title: "muscle mooses", author: "forrest", img: 'assets/musclemoose.jpg', isFav: false},
                {title: "feather toes", author: "stormy", img: 'assets/feathertoes.jpg', isFav: true},
                {title: "buttoks", author: "forrest", img: 'assets/bigbutt.jpg', isFav: false},
                {title: "whiskers", author: "stormy", img: 'assets/whiskers.jpg', isFav: true},
            ], 
            x: 0,
            y: 0,
        }
    },
    methods: {
        changeTitle(t) {
            // this.title = "Fuzzywuzzy moosepants"
            this.title = t
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        
        // handleEvent(e, data) {        // pass event and data, see index.html
        //     console.log(e)
        //     console.log(e.type)
        //     if (data) {
        //         console.log(data)
        //     }
        // }, 
        
        // handleMouseMove(e) {
        //     this.x = e.offsetX
        //     this.y = e.offsetY
        // },
        toggleFav(book) {
            book.isFav = !book.isFav
        },
    }, 

    // computed property depends on other data
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }

})

app.mount("#app")
