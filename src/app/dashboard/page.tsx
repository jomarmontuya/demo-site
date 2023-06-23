import Image from "next/image";
import Link from "next/link";

const DashboardPage = async () => {
  const resp = await fetch(
    "https://media-api-ten.vercel.app/meta/anilist/trending"
  );

  const data = await resp.json();
  return (
    <>
      <div className="grid grid-cols-3">
        {data.results.map((item) => {
          return (
            <div className="p-4" key={item.id}>
              <Link href={`/dashboard/${item.id}`}>
                <Image
                  width={350}
                  height={350}
                  alt={item.image}
                  src={item.image}
                />
              </Link>
              <h1>{item.title.english}</h1>
              <p className="text-sm leading-4">{item.description}</p>
              <p className="text-sm leading-4- flex space-x-4 mt-2">
                {item.genres.map((genre) => {
                  return (
                    <span className="bg-blue-200 p-2 text-black" key={genre}>
                      {genre}
                    </span>
                  );
                })}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DashboardPage;
