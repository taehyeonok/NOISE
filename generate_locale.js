const { PrismaClient } = require("./prisma/client/lats_cmn");
const fs = require("fs");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "./.env") });

async function generateCommonJson() {
  const client = new PrismaClient();
  const locales = [
    "english",
    "chinese",
    "czech",
    "polish",
    "german",
    "french",
    "russian",
    "hungarian",
    "lb_romana",
    "ukrainian",
    "portugal",
    "brazilian",
    "italiano",
    "korean",
    "spanish",
    "turkish",
  ];
  try {
    for (const locale of locales) {
      // 데이터베이스에서 데이터를 조회합니다.
      const dataList = await client.V_CMN_LANGUAGE.findMany({
        where: {
          LOCALE: locale,
        },
      });

      // 조회된 데이터를 적절한 형식의 JSON으로 변환합니다.
      const translations = dataList.reduce((result, item) => {
        result[item.CODE.replaceAll(".", "_")] = item.MESSAGE === "" ? null : item.MESSAGE;
        return result;
      }, {});
      // console.log(translations);

      // JSON 데이터를 파일로 저장합니다.
      let folderName = locale;
      if (folderName === "polish") folderName = "pl";
      else if (folderName === "portugal") folderName = "pt";
      else if (folderName === "turkish") folderName = "tr";
      else if (folderName === "lb_romana") folderName = "ro";

      const dirPath = path.join(__dirname, `app/i18n/locales/${folderName.substring(0, 2)}`);
      fs.mkdirSync(dirPath, { recursive: true });
      fs.writeFileSync(path.join(dirPath, "common.json"), JSON.stringify(translations, null, 2));
    }
  } catch (error) {
    console.error("Error generating common.json:", error);
  } finally {
    await client.$disconnect();
  }
}

generateCommonJson();
