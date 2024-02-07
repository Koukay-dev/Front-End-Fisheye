class Api {
    /**
     * @param {string} url 
     */
    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .catch(err => console.log('an error occured', err))
    }
}

class PhotographerApi extends Api {
    /**
     * @param {string} url 
     */
    constructor(url) {
        super(url)
    }

    async getPhotographs() {
        var { photographers } = await this.get()
        return photographers
    }

    async getMedia() {
        var { media } = await this.get()
        return media
    }
}