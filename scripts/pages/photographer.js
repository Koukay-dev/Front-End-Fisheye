class PhotographerApp {
    constructor() {
        this.photographerHeader = document.querySelector(".photograph-header")
        this.photographersApi = new PhotographerApi('data/photographers.json')
        this.sectionBannerPhotographer = document.getElementById('banner-photographer')
        this.sectionMedias = document.getElementById('medias-thumbnail')
        this.contactTitle = document.getElementById('contact-title')
        
        var url = window.location.href
        var params = new URLSearchParams(url.split('?')[1]) // peut etre faire une redirection si rien n'est trouvé
        this.id = params.get('id')

    }

    async main() {
        const photographerData = (await this.photographersApi.getPhotographs()).find(photograph => photograph.id == this.id);
        const photographerMedias = (await this.photographersApi.getMedia()).filter(media => media.photographerId == this.id);
        
        
        let photographer = new Photographer(photographerData)
        let bannerPhotograph = new PhotographerCard(photographer).bannerPhotograph()
        this.sectionBannerPhotographer.appendChild(bannerPhotograph)

        this.contactTitle.innerHTML += ` ${photographer.name}<br>`

        photographerMedias.forEach(elem => {
            let media = new Media(elem, photographer.name)
            let mediaThumbnail = new MediaCard(media).createThumbnail()
            this.sectionMedias.appendChild(mediaThumbnail)
        });
    }
}

const app = new PhotographerApp()
app.main()


