import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center py-3">
      <div className="container">
        <div className="row g-4">
          <div className="row g-4">
            <div className="col-lg-4">
              <h5>Contacto</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-envelope-fill"></i>
                  San Jose, Costa Rica
                </li>
                <li className="mb-2">
                  <i className="bi bi-envelope me-2"></i>
                  r.valverde117730382@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-4" />
          <div className="text-center">
            <p className="mb-0">
              @{currentYear} Ricardo Valverde. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
