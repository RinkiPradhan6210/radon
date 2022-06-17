let axios = require("axios")
let memeCreation=async function (req, res) {
    try {
        let options = {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?template_id=181913649&text0=Rinki&text1=Pradhan&username=chewie12345&password=meme@123`,
            //data:jsonformat
        }
        let result = await axios(options);
        console.log(result)
       
        res.status(200).send({data: result.data})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.memeCreation =memeCreation