import Image from 'next/image';
import Head from 'next/head';

function MeetTheDevelopersPage() {
  const saifUrl =
    'https://media-exp1.licdn.com/dms/image/C5603AQEwfThqCOxOzg/profile-displayphoto-shrink_100_100/0/1630575342297?e=1641427200&v=beta&t=jdSJRxSf4pMwQcLZRVeZ5iHhmqVqcFJ9PB-G78TKU_U';

  const geoUrl =
    'https://media-exp1.licdn.com/dms/image/C5603AQG-dy6nIY8CLg/profile-displayphoto-shrink_400_400/0/1635856807943?e=1641427200&v=beta&t=Ws4j2GN0ZpcJ_e-X2us7tLEevDCX_eu242LbhF2c9qA';

  const amishaUrl =
    'https://instagram.fpnq10-1.fna.fbcdn.net/v/t51.2885-19/s320x320/136993775_487356958917140_1809878205885646764_n.jpg?_nc_ht=instagram.fpnq10-1.fna.fbcdn.net&_nc_ohc=H1fTwe6zNywAX_yEEoY&edm=ABfd0MgBAAAA&ccb=7-4&oh=2ea8eb478067a9574b66575c37edc87b&oe=61887CE9&_nc_sid=7bff83';

  return (
    <section className="text-gray-600 body-font">
      <Head>
        <title>Meet the minds behind!</title>
        <meta
          name="description"
          content="Meet the minds behind this open-source project!"
        />
      </Head>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 flex-shrink-0">
            {/* Image */}
            <Image
              src={geoUrl}
              className="rounded-full"
              layout="intrinsic"
              width="200"
              height="200"
              alt="Image"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Georgey V B
            </h2>
            <p className="leading-relaxed text-base">
              Full-Stack and JamStack developer
            </p>
            <a className="mt-3 text-pink-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              The Catalyzer
            </h2>
            <p className="leading-relaxed text-base">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine.
            </p>
            <a className="mt-3 text-pink-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 flex-shrink-0">
            <Image
              src={saifUrl}
              className="rounded-full"
              layout="intrinsic"
              width="200"
              height="200"
              alt="Image"
            />
          </div>
        </div>
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 flex-shrink-0">
            <Image
              src={amishaUrl}
              className="rounded-full"
              layout="intrinsic"
              width="200"
              height="200"
              alt="Image"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              The 400 Blows
            </h2>
            <p className="leading-relaxed text-base">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine.
            </p>
            <a className="mt-3 text-pink-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetTheDevelopersPage;
