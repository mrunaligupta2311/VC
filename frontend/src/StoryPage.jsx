 export default function StoryPage() {
  const stories = [
    { id: 1, city: "Mumbai" },
    { id: 2, city: "Goa" },
    { id: 3, city: "Manali" },
    { id: 4, city: "USA" },
    { id: 5, city: "UK" },
  ];

  const contacts = [
    {
      id: 1,
      name: "Mannu",
      phone: "7359898797",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    },
    {
      id: 2,
      name: "DEVIL",
      phone: "7046074088",
      image: null,
    },
  ];

  return (
    <div className="w-full max-w-[420px] h-screen bg-[#ececec] border border-black mx-auto flex flex-col">
      {/* Header */}
      <div className="h-[65px] border-b border-black flex items-center justify-between px-2">
        <h1 className="text-3xl font-bold">Stories</h1>

        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
          alt="Profile"
          className="w-14 h-14 border border-black object-cover"
        />
      </div>

      {/* Share Story */}
      <div className="h-14 border-b border-black flex items-center px-2 gap-3">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
          alt="Profile"
          className="w-10 h-10 border border-black object-cover"
        />

        <div className="flex-1 font-semibold">
          ✨ Share a New Pal
        </div>

        <button className="text-xl">
          ⋮
        </button>
      </div>

      {/* Story Row */}
      <div className="border-b border-black py-3">
        <p className="text-center text-sm font-semibold mb-3">
          Lamhe ✨
        </p>

        <div className="flex justify-around px-2">
          {stories.map((story) => (
            <div
              key={story.id}
              className="flex flex-col items-center"
            >
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200"
                alt={story.city}
                className="w-12 h-12 rounded-md border border-black object-cover"
              />

              <span className="text-xs font-bold mt-1">
                {story.city}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Contacts With Stories */}
      <div className="flex-1 overflow-y-auto">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex items-center justify-between p-2 border-b border-black"
          >
            <div className="flex gap-3">
              {contact.image ? (
                <img
                  src={contact.image}
                  alt={contact.name}
                  className="w-14 h-14 border border-black object-cover"
                />
              ) : (
                <div className="w-14 h-14 border border-black bg-white flex items-center justify-center text-xs">
                  No Photo
                </div>
              )}

              <div>
                <h2 className="text-xl font-bold">
                  {contact.name}
                </h2>

                <p className="text-sm">
                  {contact.phone}
                </p>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
              alt="Story"
              className="w-12 h-12 rounded-full border border-black object-cover"
            />
          </div>
        ))}
      </div>

      {/* Bottom Nav */}
      <div className="h-16 border-t border-black flex">
        {["Chat", "Contacts", "Story", "Calls"].map((item) => (
          <button
            key={item}
            className="flex-1 border-r border-black font-bold text-lg"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}