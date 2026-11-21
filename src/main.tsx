import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { ExternalLink, Plus } from "lucide-react";
import { events } from "./content";
import "./style.css";

function App() {
  useEffect(() => {
    document.title = "Mind Money: проблемы у брокера. А платить - клиенту?";
    // Keep links from the previous multipage version useful.
    if (window.location.hash.startsWith("#/")) {
      const old = window.location.hash.slice(2).split("?")[0];
      const target =
        old === "home"
          ? "top"
          : old === "sources" || old === "contacts"
            ? "materials"
            : old === "response"
              ? "questions"
              : old === "story"
                ? "story"
                : "events";
      window.history.replaceState(null, "", `#${target}`);
      document.getElementById(target)?.scrollIntoView();
    }
  }, []);

  return (
    <>
      <a className="skip-link" href="#story">
        К содержимому
      </a>
      <main>
        <section id="top" className="hero wrap">
          <div className="hero-topline">
            <p className="eyebrow">ЛИЧНЫЙ ОПЫТ С MIND MONEY LIMITED</p>
            <span className="edition">Ноябрь 2024 - август 2026</span>
          </div>
          <h1>
            Проблемы у брокера.
            <br />А платить - <span>клиенту?</span>
          </h1>
          <div className="hero-bottom">
            <div>
              <p className="hero-lead">
                Я доверил брокеру свои активы.
                <br />
                Но почему я должен нести финансовые последствия его
                корпоративных и регуляторных проблем, связанных с деятельностью,
                которая вызывает у меня вопросы?
                <br />
                Думало ли руководство брокера о том, что будет с клиентами?
                Ответ, на мой взгляд, на поверхности.
              </p>
              <a className="read-link" href="#story">
                Вот моя история <Plus size={18} />
              </a>
            </div>
            <aside className="broker-label">
              <span>О КАКОМ БРОКЕРЕ ЭТА ИСТОРИЯ</span>
              <div className="broker-logo">
                <img
                  src="/mind-money-logo.svg"
                  alt="Mind Money - логотип брокера"
                  width="204"
                  height="32"
                />
              </div>
            </aside>
          </div>
        </section>

        <section id="story" className="story-section">
          <div className="reading-wrap">
            <p className="eyebrow">СНАЧАЛА БЫЛО ДОВЕРИЕ</p>
            <h2>
              Я пришёл инвестировать.
              <br />
              Не разбираться с проблемами брокера.
            </h2>
            <p>
              В ноябре 2024 года я стал клиентом Mind Money и перевёл ценные
              бумаги из EXANTE. Я рассчитывал управлять своим портфелем,
              торговать и распоряжаться деньгами.
            </p>
            <p>
              В 2026 году всё изменилось: сообщения о расследовании, рассылка с
              данными клиентов, приостановка лицензии, сложности с выводом и
              вопросы к валютной операции.
            </p>
            <p className="story-emphasis">
              Рыночный риск я понимаю.
              <br />
              Но где заканчивается мой риск и начинается ответственность
              брокера?
            </p>
          </div>
        </section>

        <section id="events" className="events-section wrap">
          <div className="section-intro">
            <p className="eyebrow">ЧТО ПРОИЗОШЛО</p>
            <h2>
              Несколько месяцев.
              <br />
              Слишком много вопросов.
            </h2>
          </div>
          <div className="events-list">
            {events.map((event) => (
              <article className="event" key={event.date}>
                <div className="event-date">{event.date}</div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  {event.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {event.question && (
                    <p className="event-question">{event.question}</p>
                  )}
                  {event.source && (
                    <a
                      className="inline-source"
                      href={event.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {event.source.label}
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="questions" className="questions-section">
          <div className="reading-wrap">
            <p className="eyebrow">МОЙ ВОПРОС - К MIND MONEY</p>
            <h2>
              Ваши проблемы.
              <br />
              Мои последствия.
              <br />
              <span>Почему?</span>
            </h2>
            <p className="questions-lead">
              Кто объяснит принятые решения?
              <br />
              Кто ответит за подтверждённые финансовые последствия?
              <br />И почему искать ответы должен сам клиент?
            </p>
          </div>
        </section>

        <section id="collective" className="collective-section reading-wrap">
          <p className="eyebrow">КОЛЛЕКТИВНОЕ ОБРАЩЕНИЕ</p>
          <h2>
            Один клиент задаёт вопросы.
            <br />А если нас несколько?
          </h2>
          <p>
            Я собираю коллективное письмо регулятору CySEC по всей этой истории:
            обращение с персональными данными, конвертация, сложности с выводом
            средств и коммуникация с клиентами.
          </p>
          <p className="collective-note">
            Письмо готовится. Здесь не утверждается, что коллективное обращение
            уже направлено регулятору.
          </p>
          <a
            className="read-link"
            href="https://t.me/makemitos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Присоединиться · @makemitos <ExternalLink size={16} />
          </a>
        </section>

        <section id="materials" className="materials-section reading-wrap">
          <h2>Документы - по запросу.</h2>
          <p>
            Переписка, выписки и другие личные материалы не выкладываются в
            открытый доступ. Подтверждающие материалы предоставляются по запросу
            с защитой персональных данных.
          </p>
          <details>
            <summary>
              О предоставлении документов <Plus size={17} />
            </summary>
            <div className="request-info">
              <p>
                Чтобы запросить документы или присоединиться к коллективному
                письму, напишите мне в Telegram:{" "}
                <a
                  className="inline-source"
                  href="https://t.me/makemitos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @makemitos <ExternalLink size={13} />
                </a>
                .
              </p>
              <p>
                Кратко опишите свой вопрос или обстоятельства. Документы
                предоставляются с защитой персональных данных третьих лиц.
              </p>
            </div>
          </details>
        </section>
      </main>

      <footer>
        <div className="wrap footer-contact">
          <a
            href="https://t.me/makemitos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Запросить документы · Telegram
          </a>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
