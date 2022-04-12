const uploadImage = require('../lib/uploadImage')
let fetch = require('node-fetch')

let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    let caption = `
Limit: *${user.limit}*
EXP: *${user.exp}*
Level: *${user.level}*
Role: *${user.role}*
`.trim()
    let pp = './src/avatar_contact.png'
    try {
      pp = await ( await fetch(await conn.getProfilePicture(who))).buffer()
    } catch (e) {
    } finally {
      await conn.reply(m.chat, caption, m, { contextInfo: {
        externalAdReply: {
          mediaUrl: 'https://youtu.be/-tKVN2mAKRI',
          title: user.name,
          body: 'R-Txzy',
          thumbnail: pp
        }
    }})
  }
}
handler.help = ['my [@62XXXX]']
handler.tags = ['xp']
handler.command = /^(my|limit)$/i
module.exports = handler
