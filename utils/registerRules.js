export const RequiredFieldRule = (text) => ({
  required: true,
  message: `กรุณากรอก${text.match(/^[A-Za-z]/) ? ' ' : ''}${text}`,
});
export const phoneRule = () => ({
  pattern: new RegExp(/^0[0-9]-[0-9]{4}-[0-9]{3}[0-9_]$/, 'i'),
  message: 'หมายเลขโทรศัพท์ไม่ถูกต้อง',
});
export const usernameRule = () => ({
  pattern: new RegExp(/^[0-9a-zA-Z_]*$/),
  message: 'กรุณาใช้ a-z, A-Z และเลข 0-9 เท่านั้น',
});
export const passwordRule = () => ({
  pattern: new RegExp(/.{8,}/),
  message: 'รหัสผ่านต้องมีความยาวอย่างน้อย 8 อักขระ',
});
export const emailRule = () => ({
  pattern: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
  message: 'email ไม่ถูกต้อง',
});
