const express = require('express');
const path = require('path');
const app = express();

// السطر ده ثابت: بيخلي السيرفر يشوف كل ملفاتك (HTML, CSS, Images)
app.use(express.static(__dirname));

// السطر ده ثابت: لما حد يفتح الرابط يوديه لصفحة الـ index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// السيرفر بيشتغل على بورت 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});