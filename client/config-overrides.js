const { override, useBabelRc } = require("customize-cra");
// cau hinh webpack cua customize-cra ghi de webpack cua cra
// eslint-disable-next-line react-hooks/rules-of-hooks
module.exports = override(useBabelRc());
