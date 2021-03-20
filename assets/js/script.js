class Multimedia {
    constructor(url) {
        const _url = url;
        this.getDir = () => _url;
    };
    get getUrl() {
        return this.getDir();
    };
    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
     };
};

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        const _id = id;
        this.getId = () => _id;
    }
    get getterID(){
        return this.getId();
    }
    playMultimedia() {
        media(this.getUrl, this.getterID)

    };
    setInicio(time) {
        const idWeb = document.getElementById(this.getterID);
        if(!idWeb) return;
        idWeb.setAttribute("scr", `${this.getUrl}?start=${time}`)
    };
};

const media = (() => { 
    const addMedia = (url,id) => {
        const idWeb = document.getElementById(id);
        if(!idWeb) return;
        idWeb.setAttribute("src", url)
    };
    const publicAddMedia = (url, id) => addMedia(url, id);
    return publicAddMedia;
})();


const music = new Reproductor("https://www.youtube.com/embed/jWFWazj7Ud8", "iMusic");
music.playMultimedia();

const movie = new Reproductor("https://www.youtube.com/embed/5sXPBIA4zH4", "iMovie");
movie.playMultimedia();

const serie = new Reproductor("https://www.youtube.com/embed/rE92bDAlPXI", "iSerie");
serie.playMultimedia();

