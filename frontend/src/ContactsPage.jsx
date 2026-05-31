 export default function ContactsPage() {
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
        <h1 className="text-3xl font-bold">Contacts</h1>

        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
          alt="Profile"
          className="w-14 h-14 border border-black object-cover"
        />
      </div>

      {/* Top Actions */}
      <div className="border-b border-black flex text-sm">
        <button className="flex-1 px-2 py-2 border-r border-black font-semibold">
          🔍 Search
        </button>

        <button className="px-2 py-2 border-r border-black font-semibold">
          ➕ Contact
        </button>

        <button className="px-2 py-2 border-r border-black font-semibold">
          👥 Group
        </button>

        <button className="w-10 text-lg">
          ⋮
        </button>
      </div>

      {/* Contacts List */}
      <div className="flex-1 overflow-y-auto">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="flex gap-3 p-2 border-b border-black"
          >
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
