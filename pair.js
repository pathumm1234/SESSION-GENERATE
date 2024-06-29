const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Maher_Zubair,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function SIGMA_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Maher_Zubair = Maher_Zubair({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Maher_Zubair.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Maher_Zubair.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Maher_Zubair.ev.on('creds.update', saveCreds)
            Pair_Code_By_Maher_Zubair.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Maher_Zubair.sendMessage(Pair_Code_By_Maher_Zubair.user.id, { text: "" + b64data });

               let SIGMA_MD_TEXT = `
🄳🄾🄽🅃 🅂🄷🄴🅁🄴 🄸🄳               
┏━━━━━━━━━━━━━━
┃𝐃𝐀𝐑𝐊 𝐒𝐇𝐀𝐃𝐎𝐖 𝐌𝐃 😈😈
┃𝐒𝐄𝐒𝐒𝐈𝐎𝐍 𝐈𝐃 𝐒𝐔𝐂𝐂𝐄𝐒𝐒𝐅𝐔𝐋𝐋𝐘
┃𝐂𝐎𝐍𝐍𝐄𝐂𝐓𝐄𝐃 ✅
┗━━━━━━━━━━━━━━━
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
① || 𝒄𝒓𝒆𝒂𝒕𝒐𝒓 = 𝑷𝒂𝒕𝒉𝒖𝒎 𝑴𝒂𝒍𝒔𝒂𝒓𝒂
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
② || 𝑾𝒉𝒂𝒕𝒔𝒂𝒑 𝑪𝒉𝒂𝒏𝒏𝒆𝒍 = https://whatsapp.com/channel/0029VacTVYIGOj9kr0GJzR1r
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
③ || 𝒔𝒖𝒑𝒑𝒐𝒓𝒕 𝒈𝒓𝒐𝒖𝒑 = https://chat.whatsapp.com/L1gqdGgYN4D6vAeT4Cj2Y6
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
④ || 𝑶𝒘𝒏𝒆𝒓 = https://wa.me/+94773416478
▬▬▬▬▬▬▬▬▬▬▬▬▬▬
𝑪𝒓𝒆𝒂𝒕𝒆𝒅 𝒃𝒚 𝑫𝒂𝒓𝒌 𝑺𝒉𝒂𝒅𝒐𝒘 𝒐𝒇𝒄`
 await Pair_Code_By_Maher_Zubair.sendMessage(Pair_Code_By_Maher_Zubair.user.id,{text:SIGMA_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Maher_Zubair.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    SIGMA_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await SIGMA_MD_PAIR_CODE()
});
module.exports = router
