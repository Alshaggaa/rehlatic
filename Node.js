const express = require('express');
const app = express();
const port = 3000;

// وظيفة لتسجيل رحلة جديدة
app.post('/register-trip', (req, res) => {
    const driverName = req.body.driverName;
    const driverPhone = req.body.driverPhone;
    const driverEmail = req.body.driverEmail;
    const driverBirthdate = req.body.driverBirthdate;
    const carColor = req.body.carColor;
    const carModel = req.body.carModel;
    const carType = req.body.carType;
    const carSeats = req.body.carSeats;
    const departurePlace = req.body.departurePlace;
    const destinationCity = req.body.destinationCity;
    const departureDate = req.body.departureDate;
    const departureTime = req.body.departureTime;

    // قم بإنشاء رحلة جديدة
    const trip = {
        driverName,
        driverPhone,
        driverEmail,
        driverBirthdate,
        carColor,
        carModel,
        carType,
        carSeats,
        departurePlace,
        destinationCity,
        departureDate,
        departureTime
    };

    // تخزين الرحلة في قاعدة بيانات (اختياري)
    // يمكنك استخدام قاعدة بيانات محلية مثل IndexedDB أو قاعدة بيانات خارجية مثل Firebase
    // سأترك هذا الجزء فارغًا في هذا المثال

    // إرسال رسالة تأكيد إلى العميل
    res.json({ message: 'تم تسجيل رحلتك بنجاح!' });
});

// وظيفة للبحث عن رحلات
app.get('/search-trips', (req, res) => {
    const departurePlaceSearch = req.query.departurePlaceSearch;
    const destinationCitySearch = req.query.destinationCitySearch;
    const departureDateSearch = req.query.departureDateSearch;

    // ابحث عن رحلات مطابقة في قاعدة بيانات (اختياري)
    // يمكنك استخدام قاعدة البيانات المحلية أو الخارجية التي اخترتها
    // سأترك هذا الجزء فارغًا في هذا المثال

    // إرسال قائمة الرحلات المتاحة إلى العميل
    const trips = [
        // ... رحلة 1
        // ... رحلة 2
        // ...
    ];

    res.json(trips);
});

// وظيفة لعرض تفاصيل رحلة
app.get('/trip-details/:tripId', (req, res) => {
    const tripId = req.params.tripId;

    // احصل على تفاصيل الرحلة من قاعدة البيانات (اختياري)
    // يمكنك استخدام قاعدة البيانات المحلية أو الخارجية التي اخترتها
    // سأترك هذا الجزء فارغًا في هذا المثال

    // إرسال تفاصيل الرحلة إلى العميل
    const trip = {
        // ... تفاصيل الرحلة
    };

    res.json(trip);
});

// تشغيل خادم Node.js
app.listen(port, () => {
    console.log(`خادم Node.js يعمل على المنفذ ${port}`);
});

