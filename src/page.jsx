import { useState } from "react";

function Page() {
  const [URL, setURL] = useState();

  const hanldeClick = async () => {
    let id = URL.split("/");
    id = id[id.length - 1];
    // window.location.href = `http://localhost:8000?id=${id}`;
    window.location.href = `https://spotify-downloader-ryxm.onrender.com:8000?id=${id}`;
  };

  return (
    <div className="cont">
      <input
        type="text"
        onChange={(e) => {
          setURL(e.target.value);
        }}
        className="inp"
        placeholder="Enter spotify playlist URL or id"
      ></input>
      <button onClick={() => hanldeClick()}>Download playlist</button>
    </div>
  );
}

export default Page;
