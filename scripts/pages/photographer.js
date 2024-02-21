class PhotographerApp {
    constructor() {
        this.photographerHeader = document.querySelector(".photograph-header");
        this.photographersApi = new PhotographerApi('data/photographers.json')
        
        var url = window.location.href;
        var params = new URLSearchParams(url.split('?')[1]); // peut etre faire une redirection si rien n'est trouvé
                this.id = params.get('id');

    }

    async main() {
        // const photographerData = await this.photographersApi.getPhotographs()
        // const photographersData = await this.photographersApi.getPhotographs()
        
        // photographersData.forEach((data => {
        //     let photographer = new Photographer(data)
        //     let photographerCard = new PhotographerCard(photographer).createPhotographerIndexCard()
        //     this.photographersSection.appendChild(photographerCard)
        // }));
    }
}

const app = new IndexApp()
app.main()


