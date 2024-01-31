function addToCollection(albumId) {
    let collection = localStorage.getItem('albumCollection');
    collection = collection ? JSON.parse(collection) : [];

    if (!collection.includes(albumId)) {
        collection.push(albumId);
        localStorage.setItem('albumCollection', JSON.stringify(collection));
        alert(`Альбом "${albumId}" додано до вашої колекції.`);
    } else {
        alert(`Альбом "${albumId}" вже є у вашій колекції.`);
    }
}

document.addEventListener('DOMContentLoaded', init);
