/*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

const playlist = {
    name: 'my playlist',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3'],
    trackCount: 3,
    // 1.a
    getName: function() {
        console.log('это гетнейм');
    },
    // 1.b
    getName(a) {
        console.log('это гетнейм', a);
    },
    // 2.
    changeName(newName) {
        this.name = newName;
    },
    // 3
    addTrack(track) {
        this.tracks.push(track);
        // this.trackCount = this.tracks.length;
    },
    // 4
    updateRating(newRating) {
        this.rating = newRating;
    },
    // 5
    getTrackCount() {
        return this.tracks.length;
    }
}

// 1
playlist.getName(5);

// 2
playlist.changeName('новое имя');

// 3
playlist.addTrack('новый трек');

// 4
playlist.updateRating(4);

// 5
console.log(playlist.getTrackCount());

console.log(playlist);