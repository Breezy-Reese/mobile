# TODO List for Job App Screens Implementation

## 1. Update Job Data
- [x] Expand job data in landing.js to include description, requirements, salary, etc.

## 2. Create Job Details Screen
- [x] Create `app/job/[id].js` for displaying detailed job information.
- [x] Add navigation button to apply screen.

## 3. Create Job Application Screen
- [x] Create `app/apply/[id].js` for job application form.
- [x] Include fields like resume upload, cover letter, etc.
- [x] Submit application and update applied jobs state.

## 4. Create Application Status Screen
- [x] Create `app/status.js` for listing applied jobs and application status.
- [x] Include account verification status (mock as boolean).

## 5. Modify Landing Screen
- [x] Make job cards tappable to navigate to job details.
- [x] Add button to navigate to status screen.

## 6. Implement Navigation and State Management
- [x] Use router params to pass job data between screens.
- [x] Ensure applied jobs state is shared or persisted across screens.

## 7. Testing and Followup
- [x] Test navigation between all screens.
- [x] Verify apply functionality updates status.
- [x] Add any missing UI components if needed.
