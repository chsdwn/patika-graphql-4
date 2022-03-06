module.exports.Event = {
  location: (parent, _, { db }) => db.locations.find((l) => l.id === parent.location_id),
  user: (parent, _, { db }) => db.users.find((u) => u.id === parent.user_id),
  participants: (parent, _, { db }) => db.participants.filter((p) => p.event_id === parent.id)
}
