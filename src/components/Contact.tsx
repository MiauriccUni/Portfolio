import React from "react";

import { useState, type FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null as string | null },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, Enviando: true }));

    // Replace these with your actual EmailJS credentials
    const serviceId = "service_i4bqic6";
    const templateId = "template_5e5hcde";
    const publicKey = "H34rJZ4wGjLrK-OsH";

    emailjs
      .sendForm(serviceId, templateId, form.current!, publicKey)
      .then((result) => {
        console.log("Email successfully sent!", result.text);
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: "¡Correo enviado Exitosamente!" },
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setStatus({
          submitted: false,
          submitting: false,
          info: {
            error: true,
            msg: "Algo salio mal, por favor intente mas tarde.",
          },
        });
      });
  };
  return (
    <section>
      <div className="row justify-content-center mb-5">
        <div className="col-lg-20 contaiber-fluid center">
          <div className="card h-100 shadow-sm">
            <h2 className="display-5 fw-bold mb-3">¡Hablemos!</h2>
            <div className="card-body p-4">
              <h3 className="h4 mb-3">Ponte en contacto.</h3>
              <p>
                Llena el formulario y me pondre en contacto contigo lo antes
                posible.
              </p>

              {status.info.msg && (
                <div
                  className={`alert ${
                    status.info.error ? "alert-danger" : "alert-success"
                  } mb-4`}
                  role="alert"
                >
                  {status.info.msg}
                </div>
              )}
              <form ref={form} onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="name">Su nombre</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email">Su correo</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="subject">Asunto del Mensaje</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        style={{ height: "150px" }}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <label htmlFor="message">Su mensaje</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      id="buttonCV"
                      className="btn  w-100 py-3"
                      disabled={status.submitting}
                    >
                      {status.submitting ? (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-send me-2"></i>Enviar
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
