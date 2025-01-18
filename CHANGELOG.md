# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-01-18

### Added

- Improved project structure with separate pages and components directories
- New reusable components: `LoadingMessage` and `ProductCard`
- PropTypes validation for better development experience
- Enhanced styling with responsive design
- Better component organization and separation of concerns

### Changed

- Moved ProductsList to pages directory as ProductsPage
- Refactored product display logic into separate components
- Improved loading state presentation
- Enhanced CSS organization and maintainability

---

## [1.0.0] - 2024-12-26

### Added

- Centralized Axios instance with interceptors for global error handling.
- Modular service layers for reusable API logic.
- Custom `useApi` hook to manage loading, error, and data states.
- Example implementation in `ProductList` component.
- User-friendly error messages with `react-toastify`.
- Full documentation in `README.md`.

---

## [Future Releases]

### Planned Features

- Add support for additional HTTP methods in `useApi`.
- Include custom retry logic with exponential backoff.
- Improve error categorization and parsing for specific use cases.
- Provide more advanced usage examples in the documentation.
- Add component documentation
- Implement unit testing for components
- Consider TypeScript integration
- Add state management if complexity grows

---
