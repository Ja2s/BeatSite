// Initialisation des éléments
const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const volumeSlider = document.getElementById('volume');

const tracks = [
  { title: 'TEMPS', file: '/audios/TEMPS.mp3', logo: '/images/TEMPS.png' },
  { title: 'RETROCITY', file: '/audios/RETROCITY.mp3', logo: '/images/RETROCITY.png' },
  { title: 'ELECTRO_NSTLG', file: '/audios/ELECTRO_NSTLG.mp3', logo: '/images/ELECTRO_NSTLG.png' }
];

let currentTrackIndex = 0;

function updatePlayer() {
    const currentTrack = tracks[currentTrackIndex];
    audio.src = currentTrack.file;

    document.getElementById('current-track').innerText = currentTrack.title;
    document.getElementById('prev-track').innerText = tracks[(currentTrackIndex - 1 + tracks.length) % tracks.length].title;
    document.getElementById('next-track').innerText = tracks[(currentTrackIndex + 1) % tracks.length].title;

    // Mettre à jour les classes pour chaque logo
    document.querySelector('.sound1 img').src = tracks[(currentTrackIndex - 1 + tracks.length) % tracks.length].logo;
    document.querySelector('.sound2 img').src = tracks[currentTrackIndex].logo;
    document.querySelector('.sound3 img').src = tracks[(currentTrackIndex + 1) % tracks.length].logo;
}

// Fonction pour jouer ou mettre en pause
playButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playButton.innerText = '⏸';  // Changer le bouton en pause
  } else {
    audio.pause();
    playButton.innerText = '▶';  // Changer le bouton en lecture
  }
});

// Passer à la piste précédente
prevButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    updatePlayer();
    audio.play();
    playButton.innerText = '⏸';
});

// Passer à la piste suivante
nextButton.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    updatePlayer();
    audio.play();
    playButton.innerText = '⏸';
});

// Changer le volume
volumeSlider.addEventListener('input', (e) => {
  audio.volume = e.target.value;
});

// Initialiser le lecteur avec la première piste
updatePlayer();
