    class IndexApp {
        constructor() {
            this.photographersSection = document.querySelector(".photographer_section")
            this.photographersApi = new PhotographerApi('data/photographers.json')
            

        }
    
        async main() {
            const photographersData = await this.photographersApi.getPhotographs()
            
            photographersData.forEach((data => {
                let photographer = new Photographer(data)
                let photographerCard = new PhotographerCard(photographer).createPhotographerIndexCard()
                this.photographersSection.appendChild(photographerCard)
            }));
        }
    }
    
    const app = new IndexApp()
    app.main()
    
    
