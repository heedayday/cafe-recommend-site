const express = require('express');
const router = express.Router();

router.post('/', function(req, res){
    //넘어온 값 확인 파라미터
    console.log("body 출력 name: "+req.body.name);
    console.log("body 출력 email: "+req.body.email);
    console.log("body 출력 message: "+req.body.message);

    //이메일 전송하는 부분 구현
    const nodemailer = require('nodemailer'); // 모듈 import

    const transporter = nodemailer.createTransport({
        service: 'gmail', // gmail을 사용함
        auth: {
            user: 'heemooncode@gmail.com', // 나의 (작성자) 이메일 주소
            pass: 'vuvztbhzfnmgbzyj' // 이메일의 비밀번호
        }
    });

    const mailOptions = {
        from: 'heemooncode@gmail.com', // 작성자
        to: 'heecode@naver.com', // 수신자
        subject: '문의 이메일 전송', // 메일 제목
        text:
            '문의내용 '+`\n`+
            '작성자: '+ `${req.body.name}`+`\n`+
            '작성자 메일: '+ `${req.body.email}`+`\n`+
            '작성자 문의 내용: '+ `${req.body.message}`        // 메일 내용
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.send(`<script type="text/javascript">alert("문의 메일 전송이 실패하였습니다. 계속 실패하는 경우 관리자에게 문의 바랍니다."); 
            window.location = document.referrer; </script>`);
        } else {
            console.log('Email sent: ' + info.response);
            res.send(`<script type="text/javascript">alert("${req.body.name}님 정상적으로 문의 되었습니다! \\n ${req.body.email} 해당 이메일로 답변 메일 드리도록 하겠습니다. \\n 답변 메일은 1~2주 정도 소요됩니다. 감사합니다."); 
            window.location = document.referrer; </script>`);
        }
    });


});

module.exports = router;