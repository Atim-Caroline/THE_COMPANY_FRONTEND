# Team Roles and Dependencies - Liquor Market Frontend

## Team Members

### Carol - Frontend Lead & UI/UX Developer
**Responsibilities:**
- Overall frontend architecture and design decisions
- UI/UX design implementation
- Component library management
- Code review and quality assurance
- Project coordination

**Dependencies:**
- Relies on Mercy for backend API integration
- Relies on Yonah for user experience testing and feedback

### Yonah - Frontend Developer & Testing Specialist
**Responsibilities:**
- Component development and implementation
- Unit and integration testing
- Performance optimization
- User experience testing
- Bug fixing and maintenance

**Dependencies:**
- Relies on Carol for design guidelines and component standards
- Relies on Mercy for API specifications and data structure

### Mercy - Frontend Developer & API Integration Specialist
**Responsibilities:**
- API integration and data management
- State management implementation
- Authentication and authorization
- Database connectivity
- Error handling and validation

**Dependencies:**
- Relies on Carol for frontend architecture decisions
- Relies on Yonah for testing the integrated features

## Workflow Dependencies

```
Carol (Design & Architecture)
    ↓
Mercy (API Integration) ← → Yonah (Testing & Implementation)
    ↓
Final Product Integration
```

## Folder Structure Responsibilities

### Carol's Primary Areas:
- `src/design/` - Design system and guidelines
- `src/components/common/` - Reusable UI components
- `src/styles/` - Global styles and themes

### Yonah's Primary Areas:
- `src/components/features/` - Feature-specific components
- `src/__tests__/` - Testing files
- `src/utils/` - Utility functions and helpers

### Mercy's Primary Areas:
- `src/services/` - API services and data fetching
- `src/context/` - State management and context
- `src/hooks/` - Custom React hooks
