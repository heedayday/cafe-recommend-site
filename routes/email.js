const express = require('express');
const router = express.Router();

router.post('/', function(req, res){
    //넘어온 값 확인 파라미터
    console.log("body 출력 name: "+req.body.name);
    console.log("body 출력 email: "+req.body.email);
    console.log("body 출력 message: "+req.body.message);

    //이메일 전송하는 부분 구현
    



    res.send(`<script type="text/javascript">alert("${req.body.name}님 정상적으로 문의 되었습니다! \\n ${req.body.email} 해당 이메일로 답변 메일 드리도록 하겠습니다. \\n 답변 메일은 1~2주 정도 소요됩니다. 감사합니다."); 
    window.location = document.referrer; </script>`);

});

module.exports = router;