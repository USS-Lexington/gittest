/*
  路由模块
*/
const express = require('express');
const router = express.Router();
const service = require('./service.js');

// 查询图书列表
router.get('/goods', service.getAllBooks);
// 添加图书(提交表单)
router.post('/goods', service.addBook);
// 跳转到编辑图书信息页面
router.get('/goods/:id', service.toEditBook);
// router.get('/toEditBook',service.toEditBook);
// 编辑图书提交表单
router.put('/goods/:id', service.editBook);
// 删除图书信息
router.delete('/goods/:id', service.deleteBook);
// 验证图书名称是否存在
router.get('/goods/good/:name', service.checkName);

module.exports = router;