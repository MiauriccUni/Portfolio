import React from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center py-3">
      <div className="container">
        <div className="row g-4">
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
