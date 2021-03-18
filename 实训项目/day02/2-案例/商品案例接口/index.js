const express = require('express');
const path = require('path');
const router = require('./router.js');
const bodyParser = require('body-parser');
const app = express();
const  cors =  require('cors')
app.use(cors())
// 启动静态资源服务
app.use(express.static('public'));

// 处理请求参数
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 配置路由
app.use(router);



const fs = require('fs')
app.get('/reset', (req, res) => {
    fs.readFile(path.join(__dirname, 'data1.json'), 'utf8', (err, result) => {
        console.log(result)
        fs.writeFile(path.join(__dirname, 'data.json'), result, (err) => {
            if (err) {
                return res.send({ msg: "重置失败" })
            }
            res.send({ msg: "重置成功" })
        })
    })
})




app.use((err,req,res,next)=>{
    res.send(err.message)
})


// 监听端口
app.listen(3001,()=>{
    console.log('running.3001..' +    new  Date);
});




