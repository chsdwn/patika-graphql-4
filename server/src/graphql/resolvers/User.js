module.exports.User = {
  events: (parent, _, { db }) => db.events.filter((e) => e.user_id === parent.id)
}
