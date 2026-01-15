# Clean Architecture – TypeScript

This repository is a **learning and experimentation project** focused on applying **Clean Architecture principles** using a **Hexagonal Architecture (Ports & Adapters)** approach in a Node.js / TypeScript environment.

The goal of this project is to **deeply understand architectural principles**, responsibility boundaries, and dependency management.

---

## 🎯 Project Goals

- Explore and apply:
  - Clean Architecture principles
  - Hexagonal Architecture (Ports & Adapters)
- Focus on:
  - domain independence
  - inversion of dependencies
  - testability and maintainability
- Keep the technical stack intentionally simple to avoid architectural noise

---

## 🧠 Architectural Philosophy

This project follows the core ideas of Clean Architecture:

- The **domain** contains the business rules and has no dependency on frameworks or infrastructure
- **Application logic** expresses use cases and orchestrates the domain
- **Ports** define contracts at the boundaries of the system
- **Adapters** implement these contracts for technical concerns (I/O, persistence, delivery mechanisms)
- All dependencies **point inward**

Hexagonal Architecture is used here as a **concrete way to implement these principles**, not as a goal in itself.
