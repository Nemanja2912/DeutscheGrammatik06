import Ball from "../UI/Ball";

const subject = [
  ["Ich"],
  ["Du"],
  ["mein Freund", "ein Kind", "seine Frau", "er"],
  ["wir"],
  ["ihr"],
  ["die Nachbarn", "Studenten", "die Eltern"],
];

const balls = [
  ["gehe", "nehme"],
  ["fährst", "isst", "fliegst"],
  ["nimmt", "läuft", "kommt"],
  ["schlafen"],
  ["lauft", "arbeitet", "schreibt", "esst"],
  ["lesen"],
];

const Static = () => {
  return (
    <div className="static">
      <div className="static-line">
        {subject.map((item, index) => (
          <div className="static-group" key={index}>
            {item.map((word, index) => (
              <div className="static-box" key={index}>
                {word}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="static-line">
        {balls.map((item, index) => (
          <div className="static-group" key={index}>
            {item.map((word, index) => (
              <Ball key={index}>{word}</Ball>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Static;
