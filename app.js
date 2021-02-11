const app = Vue.createApp({ // this is the "root" component   
    data() {
        return {
            showBooks: true,
            title: 'Fuzzy moosepants', 
            author: 'stormy', 
            age: 3
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
    }

})

app.mount("#app")
