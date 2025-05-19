import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const categories = [
  {
    name: "Rules",
    posts: [
      {
        id: 1,
        title: "We accept only couples",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Must be a working class person",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
  },
  {
    name: "Descripition",
    posts: [
      {
        id: 1,
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugiat necessitatibus alias expedita possimus aliquam? Possimus, nisi sit similique officiis, facere accusantium quod corporis sequi aliquam neque eum debitis rerum quasi amet dolore officia asperiores ad ipsa tempore provident itaque?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
    ],
  },
  {
    name: "Owners Contact",
    posts: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
];

const Tabs = () => {
  return (
    <>
      <div className="flex h-[400px] w-full justify-start">
        <div className="w-full max-w-sm">
          <TabGroup>
            <TabList className="flex gap-3 border-b border-gray-200 p-2">
              {categories.map(({ name }) => (
                <Tab
                  key={name}
                  className="rounded-full px-3 py-1 text-sm/6 font-semibold text-gray-600 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-white/5 data-selected:bg-blue-600 data-selected:data-hover:bg-white/10"
                >
                  {name}
                </Tab>
              ))}
            </TabList>
            <TabPanels className="mt-3">
              {categories.map(({ name, posts }) => (
                <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                  <ul>
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5"
                      >
                        <a href="#" className="font-semibold text-grey">
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                        <ul
                          className="flex gap-2 text-white/50"
                          aria-hidden="true"
                        >
                          <li>{post.date}</li>
                          <li aria-hidden="true">&middot;</li>
                          <li>{post.commentCount} likes</li>
                          <li aria-hidden="true">&middot;</li>
                          <li>{post.shareCount} shares</li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </div>
      <div className="w-full md:max-w-md -mt-38 border-t border-gray-200 p-2">
        <div className="flex gap-3">
          <h3 className="font-semibold text-lg">Property Owner</h3>
          <img
            src="/images/owner.jpg"
            alt="owners-pics"
            style={{ borderRadius: "50%", height: "80px", width: "80px" }}
          />
          <div className="mt-5">
            <p className="font-semibold text-lg text-gray-600">
              Alhaji Mukhtar
            </p>
            <p className="font-medium text-md">Engineer</p>
            <p className="font-medium text-md text-gray-500">08143298223</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
