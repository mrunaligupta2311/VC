 export default function CallsPage() {
  const calls = [
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
        <h1 className="text-3xl font-bold">Calls</h1>

        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
          alt="Profile"
          className="w-14 h-14 border border-black object-cover"
        />
      </div>

      {/* Call Actions */}
      <div className="border-b border-black">
        <button className="w-full flex items-center gap-3 p-3 border-b border-black">
          <span className="text-2xl">📞</span>
          <span className="text-lg font-semibold">
            New Call
          </span>
        </button>

        <button className="w-full flex items-center gap-3 p-3">
          <span className="text-2xl">👥</span>
          <span className="text-lg font-semibold">
            New Group Call
          </span>
        </button>
      </div>

      {/* Recent Calls */}
      <div className="px-3 py-2 border-b border-black">
        <h2 className="text-lg font-bold">Recent</h2>
      </div>

      <div className="flex-1 overflow-y-auto">
        {calls.map((call) => (
          <div
            key={call.id}
            className="flex items-center justify-between p-2 border-b border-black"
          >
            <div className="flex gap-3">
              {call.image ? (
                <img
                  src={call.image}
                  alt={call.name}
                  className="w-14 h-14 border border-black object-cover"
                />
              ) : (
                <div className="w-14 h-14 border border-black bg-white flex items-center justify-center text-xs">
                  No Photo
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold">
                  {call.name}
                </h3>

                <p className="text-sm">
                  ↙ {call.phone}
                </p>
              </div>
            </div>

            <button className="text-2xl">
              📞
            </button>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
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