class PhotographerApp {
    constructor() {
        this.photographersApi = new PhotographerApi('data/photographers.json')

        this.photographerHeader = document.querySelector(".photograph-header")
        this.sectionBannerPhotographer = document.getElementById('banner-photographer')
        this.sectionMedias = document.getElementById('medias-thumbnail')
        this.contactTitle = document.getElementById('contact-title')
        this.sortSelect = document.getElementById('sort-picture')

        this.photographerMedias = ''
        this.photographer = ''
        
        var url = window.location.href
        var params = new URLSearchParams(url.split('?')[1]) // peut etre faire une redirection si rien n'est trouvé
        this.id = params.get('id')

    }

    async main(){
        const photographerData = (await this.photographersApi.getPhotographs()).find(photograph => photograph.id == this.id);
        this.photographerMedias = (await this.photographersApi.getMedia()).filter(media => media.photographerId == this.id);
        
        this.photographer = new Photographer(photographerData)
        let bannerPhotograph = new PhotographerCard(this.photographer).bannerPhotograph()
        this.sectionBannerPhotographer.appendChild(bannerPhotograph)

        this.contactTitle.innerHTML += ` ${this.photographer.name}<br>` //modale contact

        this._sortPopularity()
        
        this.sortSelect.addEventListener('change', (event) => {
            var selectedValue = this.sortSelect.value
            
            switch(selectedValue){
                case 'date':
                    this._sortDate()
                    break
                case 'popularity':
                    this._sortPopularity()
                    break
                case 'title':
                    this._sortTitle()
                    break
            }
        })
    }

    _initializeMedia(){
        this.sectionMedias.innerHTML = ''
        const lightbox = new LightBox()

        this.photographerMedias.forEach((elem, index)=> {
            let media = new Media(elem, this.photographer.name, index, this.photographerMedias)
            let mediaThumbnail = new MediaCard(media).createThumbnail()
            lightbox.addMedia(media)
            this.sectionMedias.appendChild(mediaThumbnail)
        });

        const staticLikePrice = new StaticLikePrice(this.photographer.price).createElem()    

        lightbox.init()
    }

    _sortPopularity(){
       this.photographerMedias.sort((media1, media2) => media2.likes - media1.likes) // décroissant
       this._initializeMedia()
    }

    _sortDate(){
        this.photographerMedias.sort((media1, media2) => Date.parse(media2.date) - Date.parse(media1.date)) // décroissant
        this._initializeMedia()
    }

    _sortTitle(){
        this.photographerMedias.sort((media1, media2) => media1.title.localeCompare(media2.title))
        this._initializeMedia()
    }
}
const app = new PhotographerApp()
app.main()
    





