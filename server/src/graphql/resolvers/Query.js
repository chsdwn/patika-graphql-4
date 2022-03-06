
module.exports.Query = {
  user: (_, args, { db }) => db.users.find((u) => u.id === Number(args.id)),
  users: (_, __, { db }) => db.users,

  event: (_, args, { db }) => db.events.find((e) => e.id === Number(args.id)),
  events: (_, __, { db }) => db.events,

  location: (_, args, { db }) => db.locations.find((l) => l.id === Number(args.id)),
  locations: (_, __, { db }) => db.locations,

  participant: (_, args, { db }) => db.participants.find((p) => p.id === Number(args.id)),
  participants: (_, __, { db }) => db.participants
}
