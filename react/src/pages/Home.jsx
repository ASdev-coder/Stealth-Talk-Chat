import { useState, useContext } from "react";
import { Header } from "../components/layout/Header";
import { Button } from "../components/ui/Button";
import { Tag } from "../components/ui/Tag";
import { Toggle } from "../components/ui/Toggle";
import { LanguageContext } from "../context/LanguageProvider";
import { ThemeContext } from "../context/ThemeProvider";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  const { t, language, setLanguage } = useContext(LanguageContext);
  const { theme, setDarkMode, setLightMode } = useContext(ThemeContext);

  const navigate = useNavigate();

  const [mode, setMode] = useState("textChat");
  const [age, setAge] = useState("18-24");
  const [selectedTags, setSelectedTags] = useState(["#gaming"]);

  const modes = [
    { key: "textChat", icon: "💬" },
    { key: "voiceCall", icon: "📞" },
    { key: "videoCall", icon: "📹" },
  ];

  const ages = ["18-24", "25-34", "35+"];
  const availableTags = ["#gaming", "#music", "#movies", "#tech"];

  const handleTagClick = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  return (
    <div className="app-container">
      <Header />

      <main className="home-main">
        <h1 className="page-title">{t("homeTitle")}</h1>

        <section className="section-block">
          <p className="section-label">{t("modeSelection")}</p>
          <div className="button-group">
            {modes.map((m) => (
              <Button
                key={m.key}
                isActive={mode === m.key}
                onClick={() => setMode(m.key)}
              >
                {m.icon} {t(m.key)}
              </Button>
            ))}
          </div>
        </section>

        <div className="start-chat-wrapper">
          <Button variant="large" onClick={() => navigate("/chat")}>{t("startChat")}</Button>
        </div>

        <div className="filters-card">
          <h3 className="filters-title">{t("filters")}</h3>

          <div className="filter-row">
            <p className="section-label">{t("ageCategory")}</p>
            <div className="button-group">
              {ages.map((a) => (
                <Button key={a} isActive={age === a} onClick={() => setAge(a)}>
                  {a}
                </Button>
              ))}
            </div>
          </div>

          <div className="filter-row">
            <p className="section-label">Tags</p>
            <div className="tag-group">
              {availableTags.map((tag) => (
                <Tag
                  key={tag}
                  label={tag}
                  isActive={selectedTags.includes(tag)}
                  onClick={() => handleTagClick(tag)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="preferences-row">
          <div className="pref-item">
            <label className="section-label">{t("language")}</label>
            <select
              className="select-input"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="uk">Ukrainian</option>
            </select>
          </div>

          <div className="pref-item">
            <label className="section-label">{t("theme")}</label>
            <Toggle
              isActive={theme === "dark"}
              onToggle={() => {
                theme === "dark" ? setLightMode() : setDarkMode();
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};
