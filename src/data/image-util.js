function getImageURL(name, path) {

    // return new URL(`./assets/picture/${name}`, import.meta.url).href;
    return new URL(`${path+name}`, import.meta.url).href;
    // return new URL(`./assets/picture/${name}`, import.meta.url).href;
}

export {getImageURL};


