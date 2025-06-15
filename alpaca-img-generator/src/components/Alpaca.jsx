"use client";
import html2canvas from "html2canvas";
import { ArrowDownToLine, LucideDices } from "lucide-react";
import React, { useState } from "react";

const Alpaca = () => {
  const [subBtns, setSubBtns] = useState("backgrounds");
  const [imageF, setImageF] = useState({
    backgrounds: "blue50.png",
    neck: "default.png",
    ears: "default.png",
    mouth: "default.png",
    leg: "default.png",
    hair: "default.png",
    accessories: "headphone.png",
    eyes: "default.png",
  });

  const btns = {
    backgrounds: {
      1: ["Blue-1", "blue50.png"],
      2: ["Blue-2", "blue60.png"],
      3: ["Blue-3", "blue70.png"],
      4: ["Dark_Blue-1", "darkblue30.png"],
      5: ["Dark_Blue-2", "darkblue50.png"],
      6: ["Dark_Blue-3", "darkblue70.png"],
      7: ["Green-1", "green50.png"],
      8: ["Green-2", "green60.png"],
      9: ["Green-3", "green70.png"],
      10: ["Grey-1", "grey40.png"],
      11: ["Grey-2", "grey70.png"],
      12: ["Grey-3", "grey80.png"],
      13: ["Red-1", "red50.png"],
      14: ["Red-2", "red60.png"],
      15: ["Red-3", "red70.png"],
      16: ["Yellow-1", "yellow50.png"],
      17: ["Yellow-2", "yellow60.png"],
      18: ["Yellow-3", "yellow70.png"],
    },

    accessories: {
      1: ["Earings", "earings.png"],
      2: ["Flower", "flower.png"],
      3: ["Glasses", "glasses.png"],
      4: ["Headphones", "headphone.png"],
    },

    ears: {
      1: ["Default", "default.png"],
      2: ["Tilt Backward", "tilt-backward.png"],
      3: ["Tilt Forward", "tilt-forward.png"],
    },

    eyes: {
      1: ["Angry", "angry.png"],
      2: ["Default", "default.png"],
      3: ["Naughty", "naughty.png"],
      4: ["Panda", "panda.png"],
      5: ["Smart", "smart.png"],
      6: ["Star", "star.png"],
    },

    hair: {
      1: ["Bang", "bang.png"],
      2: ["curls", "curls.png"],
      3: ["Default", "default.png"],
      4: ["Elegant", "elegant.png"],
      5: ["Fancy", "fancy.png"],
      6: ["Quiff", "quiff.png"],
      7: ["Short", "short.png"],
    },

    leg: {
      1: ["Bubble Tea", "bubble-tea.png"],
      2: ["Cookie", "cookie.png"],
      3: ["Default", "default.png"],
      4: ["Game Console", "game-console.png"],
      5: ["Tilt Backward", "tilt-backward.png"],
      6: ["Tilt Farward", "tilt-forward.png"],
    },

    mouth: {
      1: ["Astonished", "astonished.png"],
      2: ["Default", "default.png"],
      3: ["Eating", "eating.png"],
      4: ["Laugh", "laugh.png"],
      5: ["Tongue", "tongue.png"],
    },

    neck: {
      1: ["Bend Backward", "bend-backward.png"],
      2: ["Bend Forward", "bend-forward.png"],
      3: ["Default", "default.png"],
      4: ["Thick", "thick.png"],
    },
  };

  const handleRandom = () => {
    const background = Math.ceil(Math.random() * 18);
    const accessories = Math.ceil(Math.random() * 4);
    const ears = Math.ceil(Math.random() * 3);
    const eyes = Math.ceil(Math.random() * 6);
    const hair = Math.ceil(Math.random() * 7);
    const leg = Math.ceil(Math.random() * 6);
    const mouth = Math.ceil(Math.random() * 5);
    const neck = Math.ceil(Math.random() * 4);

    setImageF(() => ({
      backgrounds: `${btns.backgrounds[background][1]}`,
      accessories: `${btns.accessories[accessories][1]}`,
      ears: `${btns.ears[ears][1]}`,
      eyes: `${btns.eyes[eyes][1]}`,
      hair: `${btns.hair[hair][1]}`,
      leg: `${btns.leg[leg][1]}`,
      mouth: `${btns.mouth[mouth][1]}`,
      neck: `${btns.neck[neck][1]}`,
    }));
  };

  const handleDownload = () => {
    const element = document.getElementById("img-preview");
    html2canvas(element, { useCORS: true }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "alpaca.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };

  return (
    <div className=" min-h-screen w-full p-8 items-center flex flex-col justify-center gap-8">
      <h1 className="font-bold text-2xl text-center">Alpaca Image Generator</h1>
      <div className="flex md:flex-row flex-col items-center justify-center gap-8">
        <div className="img-preview">
          <div
            id="img-preview"
            className="md:h-[450px] md:w-[450px] h-[300px] w-[300px] relative overflow-hidden rounded-2xl"
          >
            <img
              className="background absolute z-0 rounded-2xl"
              src={`/alpaca/backgrounds/${imageF.backgrounds}`}
            />
            <img
              className="neck z-[1] absolute"
              src={`/alpaca/neck/${imageF.neck}`}
            />
            <img
              className="ear absolute z-0"
              src={`/alpaca/ears/${imageF.ears}`}
            />
            <img className="nose absolute z-[2]" src={`/alpaca/nose.png`} />
            <img
              className="mouth absolute z-[3]"
              src={`/alpaca/mouth/${imageF.mouth}`}
            />
            <img className="leg absolute" src={`/alpaca/leg/${imageF.leg}`} />
            <img
              className="hair absolute z[3]"
              src={`/alpaca/hair/${imageF.hair}`}
            />
            <img
              className="accessories absolute z-[2]"
              src={`/alpaca/accessories/${imageF.accessories}`}
            />
            <img
              className="eyes absolute z-[10]"
              src={`/alpaca/eyes/${imageF.eyes}`}
            />
          </div>
          <div className="btns bg-[#1f1f1fa9] mt-4 rounded-3xl flex justify-between px-4">
            <button
              className="p-2 cursor-pointer backdrop-blur-xl rounded-full flex gap-2 group transition-all duration-300 active:scale-[0.8]"
              onClick={handleDownload}
            >
              <ArrowDownToLine />
              <span
                className="relative text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
               after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full"
              >
                Download
              </span>
            </button>

            <button
              className="p-2 cursor-pointer backdrop-blur-xl rounded-full flex gap-2 group transition-all duration-300 active:scale-[0.8]"
              onClick={handleRandom}
            >
              <LucideDices />
              <span
                className="relative text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
               after:bg-green-500 after:transition-all after:duration-300 group-hover:after:w-full"
              >
                Random
              </span>
            </button>
          </div>
        </div>
        <div
          id="edit-options"
          className="edit-options md:h-[450px] md:w-[450px] h-[300px] w-[300px]"
        >
          <h1 className="uppercase font-black text-lg mb-8 underline underline-offset-8">
            Accessorize the alpaca
          </h1>
          <div className="changeAbles flex gap-6 flex-wrap">
            {Object.entries(btns).map((items) => {
              return (
                <button
                  key={items[0]}
                  className="text-amber-100 button"
                  onClick={() => setSubBtns(items[0])}
                >
                  {items[0]}
                </button>
              );
            })}
          </div>
          <h1 className="uppercase font-black text-lg mb-8 underline underline-offset-8 mt-10">
            {subBtns}
          </h1>
          <div className="features flex gap-6 flex-wrap">
            {Object.entries(btns[subBtns]).map((items) => {
              return (
                <button
                  key={items[0]}
                  className="text-amber-100 button"
                  onClick={() => {
                    setImageF((prev) => ({
                      ...prev,
                      [subBtns]: `${items[1][1]}`,
                    }));
                  }}
                >
                  {items[1][0]}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alpaca;
