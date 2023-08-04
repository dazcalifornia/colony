import { Prompt } from "next/font/google";
import { useTranslation } from "react-i18next";

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  const { t } = useTranslation();

  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <>
      <div className={prompt.className}>
        <h1>{t("welcome.message")}</h1>
        <p>Hello</p>
        <div>
          <button onClick={() => changeLanguage("en")}>English</button>
          <button onClick={() => changeLanguage("th")}>Thai</button>
          <button onClick={() => changeLanguage("jp")}>Japanese</button>
        </div>
      </div>
    </>
  );
}
