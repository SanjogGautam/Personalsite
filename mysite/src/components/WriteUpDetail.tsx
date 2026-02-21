import { useParams } from "react-router-dom";
import { writeups } from "./data/writeups";

const WriteUpDetail = () => {
  const { id } = useParams();

  const writeup = writeups.find((w) => w.id === id);

  if (!writeup) {
    return (
      <div className="min-h-screen bg-black text-white p-40">
        Writeup Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6">
      <h1 className="text-4xl font-bold mb-6">{writeup.title}</h1>
      <p className="text-gray-400 mb-8">
        {writeup.date} • {writeup.author}
      </p>

      <div className="whitespace-pre-line text-gray-300 leading-relaxed">
        {writeup.content}
      </div>
    </div>
  );
};

export default WriteUpDetail;