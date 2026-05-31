 export default function ChatsPage() {
  const chats = [
    {
      id: 1,
      name: "Mannu",
      message: "Hey",
      time: "6:13 AM",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    },
    {
      id: 2,
      name: "DEVIL",
      message: "Hello",
      time: "Yesterday",
      image: null,
    },
  ];

  return (
    <div className="w-full max-w-[420px] h-screen bg-[#ececec] border border-black mx-auto flex flex-col">
      {/* Header */}
      <div className="h-[65px] border-b border-black flex items-center justify-between px-2">
        <h1 className="text-3xl font-bold">Chit-Chat</h1>

        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
          alt="Profile"
          className="w-14 h-14 border border-black object-cover"
        />
      </div>

      {/* Search */}
      <div className="h-10 border-b border-black flex items-center">
        <div className="w-full h-full flex items-center px-2">
          <span className="text-xl">🔍</span>
          <span className="text-2xl font-bold ml-2">Search</span>
        </div>

        <button className="w-14 h-full border-l border-black text-2xl">
          📅
        </button>
      </div>

      {/* Filters */}
      <div className="flex h-10 border-b border-black">
        {["All", "Unread", "Unreplied", "Group", "Favourite"].map((item) => (
          <button
            key={item}
            className="flex-1 border-r border-black text-sm font-bold"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-start gap-3 p-2 border-b border-black cursor-pointer"
          >
            {chat.image ? (
              <img
                src={chat.image}
                alt={chat.name}
                className="w-14 h-14 border border-black object-cover"
              />
            ) : (
              <div className="w-14 h-14 border border-black bg-white flex items-center justify-center text-xs">
                No Photo
              </div>
            )}

            <div className="flex-1">
              <div className="flex justify-between">
                <h2 className="text-xl font-bold">{chat.name}</h2>

                <span className="font-semibold text-sm">
                  {chat.time}
                </span>
              </div>

              <p className="text-lg">{chat.message}</p>
            </div>
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