export default class instaService {
    constructor(params) {
        this._apiBase = 'http://localhost:3000'
    }

    getResource = async (url) => {
        const resp = await fetch(`${this._apiBase}${url}`);

        if (!resp.ok) {
            throw new Error(`Could not fetch ${url}; recived ${resp.status}`)
        }

        return await resp.json();
    }

    getAllPosts = async () => {
        const res = await this.getResource('/posts/');
        return res;
    }

    getAllPhotos = async () => {
        const res = await this.getResource('/posts/');
        return res.map(this._transformPosts);
    }

    _transformPosts = (post) => {
        return {
            src: post.src,
            alt: post.alt
        }
    }
}