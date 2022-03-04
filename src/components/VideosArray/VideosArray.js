import "./VideosArray.scss";
import Video from "../Video/Video";
import { Link } from "react-router-dom";

function VideosArray({ videos, currentVideo, handleVideoChange }) {
  // console.log(videos);
  return (
    <section className="videos__container">
      <h2 className="videos__header">NEXT VIDEOS</h2>
      <ul className="videos">
        {videos
          .filter((item) => item.id !== currentVideo.id)
          .map((item) => {
            return (
              <Video
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                channel={item.channel}
                handleVideoChange={handleVideoChange}
              />
            );
          })}
      </ul>
    </section>
  );
}

// below works with old way
// function VideosArray({ videos, currentVideo, handleVideoChange }) {
//   return (
//     <section className="videos__container">
//       <h2 className="videos__header">NEXT VIDEOS</h2>
//       <ul className="videos">
//         {videos
//           .filter((item) => item.id !== currentVideo.id)
//           .map((item) => {
//             return (
//               <Video
//                 key={item.id}
//                 id={item.id}
//                 image={item.image}
//                 title={item.title}
//                 channel={item.channel}
//                 handleVideoChange={handleVideoChange}
//               />
//             );
//           })}
//       </ul>
//     </section>
//   );
// }

export default VideosArray;
