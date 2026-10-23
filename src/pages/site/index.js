import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, intro, projects, skills, contactConfig, socialprofils } from "../../content_option";
import "./style.css";

const pad = (n) => String(n).padStart(2, "0");

export const Site = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("I reply within two days.");
  const [sending, setSending] = useState(false);

  const onField = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const send = (e) => {
    e.preventDefault();
    if (!form.email || !form.message) return setStatus("Add your email and a message.");
    const { YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, YOUR_USER_ID: PUBLIC_KEY, YOUR_EMAIL } = contactConfig;
    if (YOUR_SERVICE_ID && YOUR_TEMPLATE_ID && PUBLIC_KEY) {
      setSending(true);
      emailjs
        .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, { from_name: form.email, user_name: form.name, to_name: YOUR_EMAIL, message: form.message, reply_to: form.email }, { publicKey: PUBLIC_KEY })
        .then(
          () => { setStatus("Sent. Thank you — I'll be in touch."); setForm({ name: "", email: "", message: "" }); },
          (err) => setStatus(`Couldn't send: ${err.text || err.message}`)
        )
        .finally(() => setSending(false));
    } else {
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${YOUR_EMAIL}?subject=${encodeURIComponent("Hello from " + (form.name || "your site"))}&body=${body}`;
      setStatus("Opening your mail app…");
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <div className="site">
        <div className="wrap">
          <nav className="nav">
            <a href="#top" className="nav__brand">{intro.name}</a>
            <div className="nav__links">
              <a href="#work">Work</a>
              <a href="#skills">Skills</a>
              <a href="#contact" className="nav__cta">Contact →</a>
            </div>
          </nav>

          <header id="top" className="hero">
            <div className="hero__status"><span className="square" /><span>{intro.status}</span></div>
            <h1 className="hero__title">AI engineer. I build LLM systems that <em>hold up</em>.</h1>
            <p className="hero__lede">{intro.lede}</p>
            <div className="hero__actions">
              <a href="#contact" className="btn btn--dark">Get in touch <span>→</span></a>
              <a href="#work" className="btn btn--outline">See work</a>
            </div>
          </header>

          <section id="work" className="block">
            <div className="block__head">
              <h2>Selected work</h2>
              <span className="caption">{pad(projects.length)} projects</span>
            </div>
            {projects.map((p, i) => (
              <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="project">
                <span className="project__n">{pad(i + 1)}</span>
                <div className="project__name">
                  <h3>{p.title}</h3>
                  <p className="caption caption--olive">{p.tag}</p>
                </div>
                <p className="project__desc">{p.desc}</p>
                <span className="project__arrow">↗</span>
              </a>
            ))}
          </section>

          <section id="skills" className="block">
            <div className="block__head">
              <h2>Skills</h2>
              <span className="caption">What I work with</span>
            </div>
            <div className="skills">
              {skills.map((g) => (
                <div key={g.title} className="skills__col">
                  <div className="skills__title"><span className="square" /><span className="caption caption--olive">{g.title}</span></div>
                  <ul>{g.items.map((it) => <li key={it}>{it}</li>)}</ul>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section id="contact" className="contact">
          <div className="contact__inner">
            <div className="contact__info">
              <span className="caption caption--light">Contact</span>
              <h2>Building something ambitious? <em>Let’s talk.</em></h2>
              <p>{contactConfig.description}</p>
              <div className="contact__links">
                <a href={`mailto:${contactConfig.YOUR_EMAIL}`}><span>Email</span><span>{contactConfig.YOUR_EMAIL}</span></a>
                <a href={socialprofils.linkedin.url} target="_blank" rel="noreferrer"><span>LinkedIn</span><span>{socialprofils.linkedin.label} ↗</span></a>
                <a href={socialprofils.github.url} target="_blank" rel="noreferrer"><span>GitHub</span><span>{socialprofils.github.label} ↗</span></a>
              </div>
            </div>
            <form className="form" onSubmit={send}>
              <div className="form__row">
                <label>Name<input name="name" placeholder="Your name" value={form.name} onChange={onField} /></label>
                <label>Email<input type="email" name="email" placeholder="you@company.com" value={form.email} onChange={onField} required /></label>
              </div>
              <label>Message<textarea name="message" rows="5" placeholder="What are you working on?" value={form.message} onChange={onField} required /></label>
              <div className="form__foot">
                <span>{status}</span>
                <button type="submit" disabled={sending}>{sending ? "Sending…" : "Send message"} <span>→</span></button>
              </div>
            </form>
            <div className="contact__legal">
              <span>© {new Date().getFullYear()} {intro.name}</span>
              <span>Bengaluru, India</span>
            </div>
          </div>
        </section>
      </div>
    </HelmetProvider>
  );
};
