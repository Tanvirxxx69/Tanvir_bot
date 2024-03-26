setTimeout(() => {a({body: "Hi তানভীর এর জারজ মেয়ে মাগির মেয়ে  💔!" + " " + name, mentions: arraytag})}, 9000);
    name: "setdatagroup",
    version: "1.0",
    permission: 2,
    credits: "ryuko",
    prefix: false,
    description: "set new data of boxes into data",
    category: "admin",
    usages: "",
    cooldowns: 5,
    
};
module.exports.run = async function ({ event, args, api, Threads }) { 
const { threadID } = event;
const { setData, getData } = Threads;
var inbox = await api.getThreadList(100, null, ['INBOX']);
  let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);
  const lengthGroup = list.length
  for (var groupInfo of list) {
    console.log(`data has been updated group id : ${groupInfo.threadID}`)
    var threadInfo = await api.getThreadInfo(groupInfo.threadID);
    threadInfo.threadName;
    await Threads.setData(groupInfo.threadID, { threadInfo });
  }
    console.log(`data has been updated ${lengthGroup} group`)
    return api.sendMessage(`data has been updated ${lengthGroup} group`, threadID)
}