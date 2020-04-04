export const RequiredFieldRule = (text) => ({
  required: true,
  message: `กรุณากรอก${text}`,
});
export const phoneRule = () => ({
  pattern: new RegExp(/^0[0-9]-[0-9]{4}-[0-9]{3}[0-9_]$/, 'i'),
  message: 'หมายเลขโทรศัพท์ไม่ถูกต้อง',
});
export const usernameRule = () => ({
  pattern: new RegExp(/^[0-9a-zA-Z_]*$/),
  message: 'does not match ^[0-9a-zA-Z]*$',
});
export const passwordRule = () => ({
  pattern: new RegExp(/.{8,}/),
  message: 'len must >= 8',
});
export const emailRule = () => ({
  pattern: new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
  message: 'not email',
});
