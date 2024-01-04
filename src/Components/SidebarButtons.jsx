import likedLogo from "../Image/likedlogo.jpg";
import gym from "../Image/gym.png";
import meltingvibes from '../Image/meltingvibes.png'
import mood from "../Image/mood.png"
import citylights from "../Image/citylights.png"
import anime from "../Image/anime.png"
import lofisad from '../Image/lofisad.png'
import nepalisad from '../Image/neplaisad.png'
import walikums from "../Image/wallikums.png"
import popmix from "../Image/popmix.png"

const buttonsData = [
  { src: likedLogo, text: "Liked Songs", subtext: "Playlists . Spotify" },
  { src: gym, text: "Gym Playlists", subtext: "Playlists . Spotify" },
  { src: meltingvibes, text: "Melting Vibes", subtext: "Playlists . Spotify" },
  { src: mood, text: "Mood Check", subtext: "Playlists . Spotify" },
  { src: citylights, text: "City Lightsss", subtext: "Playlists . Spotify" },
  { src: anime, text: "Anime Songs", subtext: "Playlists . Spotify" },
  { src: nepalisad, text: "Neplai Songs", subtext: "Playlists . Spotify" },
  { src: lofisad, text: "Lofi SadSong", subtext: "Playlists . Spotify" },
  { src: walikums, text: "Wallikums Jin", subtext: "Playlists . Spotify" },
  { src: popmix, text: "Pop mix + Mood", subtext: "Playlists . Spotify" },
  { src: gym, text: "Gym Playlists", subtext: "Playlists . Spotify" },
  { src: meltingvibes, text: "Melting Vibes", subtext: "Playlists . Spotify" },
  { src: mood, text: "Mood Check", subtext: "Playlists . Spotify" },
  { src: citylights, text: "City Lightsss", subtext: "Playlists . Spotify" },
  { src: anime, text: "Anime Songs", subtext: "Playlists . Spotify" },
  { src: nepalisad, text: "Neplai Songs", subtext: "Playlists . Spotify" },
  { src: lofisad, text: "Lofi SadSong", subtext: "Playlists . Spotify" },
  { src: walikums, text: "Wallikums Jin", subtext: "Playlists . Spotify" },
  { src: likedLogo, text: "Favou Songs", subtext: "Playlists . Spotify" },
  // Add more button data as needed
];

const SidebarButtons = () => (
  <>
    {buttonsData.map((button, index) => (
      <button
        key={index}
        className=" w-full text-sm items-center justify-start ml-3 mt-2 flex opacity-90 hover:bg-light hover:bg-opacity-75 rounded-lg" style={{overflowY:'hidden'}}
      >
        <img src={button.src} className="w-12 rounded-lg mt-1 pl-1 mb-1" alt={button.text} />
        <p className=" font-semibold ml-1">
          {button.text}
          <br />
          <p className="text-xs opacity-65 font-normal">
            &nbsp;&nbsp;{button.subtext}
          </p>
        </p>
      </button>
    ))}
  </>
);

export default SidebarButtons;
