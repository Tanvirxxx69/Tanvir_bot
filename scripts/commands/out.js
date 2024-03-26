module.exports = {
  config: {
    name: "out",
  version: "1.0.5",
  credits: "nayan",
  prefix: false,
  permission: 2,
  description: "out bot",
  category: "admin",
  cooldowns: 5
},

start: async function({ nayan, events, args }) {
        if (!args[0]) return nayan.removeUserFromGroup(nayan.getCurrentUserID(), events.threadID);
  nayan.reply("বায় বায় মেয়েদের আই লাভ ইউ ছেলেদের ফাক ইউ গুডবায়", events.threadID)
        if (!isNaN(args[0])) return nayan.removeUserFromGroup(nayan.getCurrentUserID(), args.join(" "));
}
}