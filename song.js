/* This is a detailed list of all characteristics and attributes of my favorite song called 'Ye' written and played by 'Damini Ebunoluwa Ogalu' popularly known as 'Burna Boy' */

const songTitle = 'ye' // this is the song title
const artist = 'Burna Boy' // artist who sang the song
const genres = 'Afrobeat' // category of song
const songAlbum = 'Outside' // album in which song is recorded
const recordLabel = 'Spaceship Entertainment' // record label artist was signed
const songProducer = 'Phantom' // producer who made the beat used in song
const timeInSeconds = 233 // duration of song's playback
const songsInOutsideAlbum = {
  Track1: 'More Life',
  Track2: 'Ph City Vibration',
  Track3: 'Koni Baje',
  Track4: 'Sekkle Down',
  Track5: 'Heavens Gate',
  Track6: 'Ye',
  Track7: 'Giddem',
  Track8: 'Streets of Africa',
  Track9: 'Rock Your Body',
  Track10: 'Devil in califonia',
  Track11: 'Calm Down',
  Track12: 'Outside'
} // object which consist of all other songs in same album
const releaseYear = {
  YearReleased: 2018
} // the year song was releaesed
const backgroundInfo = {
  BirthName: 'Damini Ebunoluwa Ogulu',
  StageName: 'Burna Boy',
  Born: '2 July 1991',
  Age: 27,
  Origin: 'Ahoada, Rivers State',
  Country: 'Nigeria',
  Instruments: 'Vocals',
  YearActive: '2010 till Present',
  Occupation: 'singer, songwriter, performer'

} // other vital information about the artist

console.log(songTitle) // to view title of song
console.log(songsInOutsideAlbum) // to view all songs in OUTSIDE album
console.log(songsInOutsideAlbum.Track1) // to view first song in the OUTSIDE album and use "TRACK1 through to TRACK12" to see first song through to last song respectively
console.log(backgroundInfo.BirthName) // to view original birth name of artist
console.log(backgroundInfo.Age) // to view real age of artist
