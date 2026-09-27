function getDisplayName(user) {
  if (!user) return "Guest";
  return user.name.toUpperCase();
}
module.exports = { getDisplayName };
