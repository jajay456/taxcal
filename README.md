# Tax Calculator App 

ระบบคำนวณภาษีมูลค่าเพิ่ม (VAT) สำหรับการยื่นแบบภาษีออนไลน์ พัฒนาโดยใช้ Angular 17 + Standalone Component + Signal พร้อมระบบคำนวณอัตโนมัติ

## คุณสมบัติ

- กรอกข้อมูลประเภทการยื่นแบบ (Filing Type)
- ระบุเดือนและปีภาษี
- ใส่มูลค่าก่อน VAT แล้วระบบคำนวณ VAT ให้อัตโนมัติ
- ตรวจสอบความถูกต้องของ VAT โดยอิงจากช่วงที่กำหนด (min/max)
- คำนวณยอดภาษีรวม (รวม Surcharge + Penalty)
- แสดงข้อผิดพลาดเมื่อ VAT อยู่นอกช่วงที่กำหนด
```
## โครงสร้างโปรเจกต์ (บางส่วน)
src/app/ 
├── taxcal/
│ ├── taxcal.component.ts
│ ├── taxcal.html
│ ├── filing-type/
│ ├── month/
│ ├── year/
│ ├── sale-amount/
│ ├── tax-amount/
│ ├── surcharge/
│ ├── penalty/
│ └── total-amount/
├── app.ts
├── app.routes.ts
└── app.config.ts
```
## Project Specs
Angular CLI: 20.1.0 

Node: 22.17.1

Package Manager: npm 10.9.2

OS: win32 x64


