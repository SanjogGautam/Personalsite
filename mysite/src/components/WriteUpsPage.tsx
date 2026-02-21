import { Link } from "react-router-dom";
import { writeups } from "./data/writeups";

const WriteUpsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-32 px-6">
      <h1 className="text-4xl font-bold mb-12">Security Writeups</h1>

      <div className="grid gap-8">
        {writeups.map((writeup) => (
          <Link
            key={writeup.id}
            to={`/writeups/${writeup.id}`}
            className="border border-gray-700 p-6 rounded-xl hover:border-green-500 transition"
          >
            <h2 className="text-2xl font-semibold">{writeup.title}</h2>
            <p className="text-gray-400 mt-2">{writeup.excerpt}</p>
            <p className="text-sm text-gray-500 mt-4">
              {writeup.date} • {writeup.author}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WriteUpsPage;