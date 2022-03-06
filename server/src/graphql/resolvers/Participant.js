module.exports.Participant = {
  user: (parent, _, { db }) => db.users.find((u) => u.id === parent.user_id)
}
