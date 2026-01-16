# Authentication Page Implementation Plan

## Overview
This document outlines the plan for implementing a single-page authentication system with Sign In and Sign Up functionality using Supabase, React Hook Form, and Sonner (shadcn toast component).

## Requirements Summary
- Single page with tabs to switch between Sign In and Sign Up
- Supabase authentication integration
- Email confirmation on signup
- Form fields: Name, Email, Password, Confirm Password (for signup)
- Password validation: min 8 chars, 1 uppercase, 1 lowercase, 1 special char, 1 number
- Validation on submit only (no immediate validation)
- Use react-hook-form for form management
- Use Sonner (shadcn toast component) for error notifications
- Use existing shadcn/ui components
- Match overall theme/design

---

## Phase 1: Setup & Dependencies

### Task 1.1: Install Required Dependencies
**Status:** ✅ Completed

**Files to Modify:**
- `package.json`

**Actions:**
- Install `react-hook-form`
- Add Sonner component from shadcn/ui (uses `sonner` package)
- Install `@hookform/resolvers` (for Zod validation if needed, or use Yup)

**Commands:**
```bash
# Install form dependencies
npm install react-hook-form @hookform/resolvers zod

# Add Sonner component from shadcn/ui
npx shadcn@latest add sonner
```

**Note:** Sonner component will be added via shadcn CLI, which will install the `sonner` package and create the component files.

---

### Task 1.2: Create Supabase Client Utility
**Status:** ✅ Completed

**Files to Create:**
- `src/lib/supabase/client.ts` (for client-side Supabase client)

**Actions:**
- Create Supabase client using environment variables
- Export client for use in components
- Handle both browser and server environments

**Environment Variables Required:**
- `NEXT_PUBLIC_SUPABASE_URL` (already exists in .env)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` (needs to be added to .env)

---

## Phase 2: UI Components

### Task 2.1: Check/Create Tabs Component
**Status:** ✅ Completed

**Files to Check:**
- `src/components/ui/` (check if tabs.tsx exists)

**Actions:**
- If tabs component doesn't exist, check if we need to install from shadcn/ui
- If needed, ask user before creating
- Create reusable tabs component matching theme

**Decision Point:**
- If tabs component doesn't exist, ask user: "Tabs component not found in ui folder. Should I add it from shadcn/ui or create a custom one matching the existing tabs pattern?"

---

### Task 2.2: Add Sonner Toast Component
**Status:** ✅ Completed

**Files to Create:**
- `src/components/ui/sonner.tsx` (created by shadcn CLI)

**Actions:**
- Add Sonner component using shadcn CLI (from Task 1.1)
- Sonner component will include the Toaster wrapper
- Add Toaster component to root layout for global toast notifications

**Files to Modify:**
- `src/app/layout.tsx` (add Toaster component from sonner)

**Note:** Sonner uses `toast()` function from `sonner` package for displaying toasts.

---

## Phase 3: Authentication Page

### Task 3.1: Create Auth Page Route
**Status:** ⏳ Pending

**Files to Create:**
- `src/app/(public)/auth/page.tsx`

**Actions:**
- Create new page route for authentication
- Place in (public) route group to match existing structure
- Page should render Auth component

---

### Task 3.2: Create Auth Component with Tabs
**Status:** ⏳ Pending

**Files to Create:**
- `src/components/auth/Auth.tsx`

**Actions:**
- Create main Auth component
- Implement tab switching between Sign In and Sign Up
- Use tabs component (from Task 2.1)
- Match existing design theme (check globals.css and existing components)

**Design Considerations:**
- Use existing color scheme from globals.css
- Match button, input, and label styles from existing UI components
- Use Poppins/Inter fonts (already configured)
- Follow spacing and border radius patterns

---

### Task 3.3: Create Sign Up Form Component
**Status:** ⏳ Pending

**Files to Create:**
- `src/components/auth/SignUpForm.tsx`

**Actions:**
- Implement form using react-hook-form
- Fields: Name, Email, Password, Confirm Password
- Password validation:
  - Minimum 8 characters
  - At least 1 uppercase letter
  - At least 1 lowercase letter
  - At least 1 special character
  - At least 1 number
- Confirm Password must match Password
- Validation only on submit (mode: "onSubmit")
- Use existing Input, Label, and Button components
- Show validation errors below fields after submit attempt

**Form Schema:**
```typescript
{
  name: string (required, min 2 chars)
  email: string (required, valid email format)
  password: string (required, meets all password requirements)
  confirmPassword: string (required, must match password)
}
```

---

### Task 3.4: Create Sign In Form Component
**Status:** ⏳ Pending

**Files to Create:**
- `src/components/auth/SignInForm.tsx`

**Actions:**
- Implement form using react-hook-form
- Fields: Email, Password
- Validation only on submit
- Use existing Input, Label, and Button components
- Show validation errors below fields after submit attempt

**Form Schema:**
```typescript
{
  email: string (required, valid email format)
  password: string (required)
}
```

---

## Phase 4: Supabase Integration

### Task 4.1: Implement Sign Up Logic
**Status:** ⏳ Pending

**Files to Modify:**
- `src/components/auth/SignUpForm.tsx`

**Actions:**
- Use Supabase client to sign up user
- Call `supabase.auth.signUp()` with email and password
- Include user metadata (name) in signup
- Configure to send confirmation email
- Handle errors and display via Sonner toast
- Show success message after signup (email confirmation sent)

**Supabase Call:**
```typescript
const { data, error } = await supabase.auth.signUp({
  email,
  password,
  options: {
    data: {
      name: name
    },
    emailRedirectTo: `${window.location.origin}/auth/callback`
  }
})
```

---

### Task 4.2: Implement Sign In Logic
**Status:** ⏳ Pending

**Files to Modify:**
- `src/components/auth/SignInForm.tsx`

**Actions:**
- Use Supabase client to sign in user
- Call `supabase.auth.signInWithPassword()` with email and password
- Handle errors and display via Sonner toast
- On success, redirect to appropriate page (home or dashboard)
- Update AuthContext if needed

**Supabase Call:**
```typescript
const { data, error } = await supabase.auth.signInWithPassword({
  email,
  password
})
```

---

### Task 4.3: Handle Email Confirmation Callback
**Status:** ⏳ Pending

**Files to Create:**
- `src/app/(public)/auth/callback/route.ts` (API route for email confirmation)

**Actions:**
- Create callback route to handle email confirmation
- Verify token from Supabase
- Redirect to sign in page with success message
- Handle errors appropriately

---

## Phase 5: Error Handling & Toast Integration

### Task 5.1: Integrate Sonner Toast
**Status:** ⏳ Pending

**Files to Modify:**
- `src/app/layout.tsx` (add Toaster component from sonner)
- `src/components/auth/SignUpForm.tsx`
- `src/components/auth/SignInForm.tsx`

**Actions:**
- Add Toaster component from Sonner to root layout
- Import `toast` from `sonner` package in form components
- Show error toasts for Supabase errors using `toast.error()`
- Show success toasts for successful operations using `toast.success()`
- Format error messages appropriately

**Error Handling:**
- Parse Supabase error messages
- Display user-friendly error messages
- Handle network errors
- Handle validation errors separately from Supabase errors

**Sonner Usage Example:**
```typescript
import { toast } from "sonner"

// Success toast
toast.success("Account created successfully! Please check your email.")

// Error toast
toast.error("Invalid credentials. Please try again.")
```

---

## Phase 6: Testing Strategy

### Task 6.1: Manual Testing Checklist
**Status:** ⏳ Pending

**Test Cases:**

1. **Sign Up Flow:**
   - [ ] Navigate to /auth page
   - [ ] Switch to Sign Up tab
   - [ ] Submit empty form - should show validation errors
   - [ ] Enter invalid email - should show error on submit
   - [ ] Enter weak password (less than 8 chars) - should show error
   - [ ] Enter password without uppercase - should show error
   - [ ] Enter password without lowercase - should show error
   - [ ] Enter password without special char - should show error
   - [ ] Enter password without number - should show error
   - [ ] Enter mismatched confirm password - should show error
   - [ ] Enter valid data - should submit successfully
   - [ ] Check email for confirmation link
   - [ ] Click confirmation link - should redirect and confirm

2. **Sign In Flow:**
   - [ ] Navigate to /auth page
   - [ ] Switch to Sign In tab
   - [ ] Submit empty form - should show validation errors
   - [ ] Enter invalid email format - should show error on submit
   - [ ] Enter wrong credentials - should show Supabase error toast
   - [ ] Enter correct credentials - should sign in successfully
   - [ ] Verify redirect after successful sign in

3. **Error Handling:**
   - [ ] Test with network disconnected - should show appropriate error
   - [ ] Test with invalid Supabase credentials - should show error
   - [ ] Test duplicate email signup - should show error toast
   - [ ] Test unconfirmed email sign in - should show appropriate message

4. **UI/UX:**
   - [ ] Verify tab switching works smoothly
   - [ ] Verify form fields match theme
   - [ ] Verify buttons match theme
   - [ ] Verify error messages are clear
   - [ ] Verify toast notifications appear correctly
   - [ ] Test on mobile viewport
   - [ ] Test on desktop viewport

---

### Task 6.2: Edge Cases Testing
**Status:** ⏳ Pending

**Edge Cases:**
- [ ] Very long email addresses
- [ ] Special characters in name field
- [ ] Password with all requirements at minimum (exactly 8 chars, 1 of each type)
- [ ] Copy-paste password into confirm password
- [ ] Tab switching while form has data
- [ ] Multiple rapid form submissions
- [ ] Browser back/forward navigation

---

## Phase 7: Integration & Polish

### Task 7.1: Update Auth Context (if needed)
**Status:** ⏳ Pending

**Files to Modify:**
- `src/context/Auth.tsx`

**Actions:**
- Check if AuthContext needs to be updated to handle user state from Supabase
- Integrate Supabase auth state listener if needed
- Update user state on sign in/sign up

---

### Task 7.2: Add Route Protection (Optional for this phase)
**Status:** ⏳ Pending

**Note:** This may be out of scope for initial implementation, but consider:
- Protecting admin routes
- Redirecting authenticated users away from auth page
- Handling session persistence

---

## Files Summary

### Files to Create:
1. `src/lib/supabase/client.ts` - Supabase client utility
2. `src/components/ui/sonner.tsx` - Sonner toast component (added via shadcn CLI)
3. `src/components/ui/tabs.tsx` - Tabs component (if not exists, ask first)
4. `src/app/(public)/auth/page.tsx` - Auth page route
5. `src/components/auth/Auth.tsx` - Main auth component with tabs
6. `src/components/auth/SignUpForm.tsx` - Sign up form component
7. `src/components/auth/SignInForm.tsx` - Sign in form component
8. `src/app/(public)/auth/callback/route.ts` - Email confirmation callback

### Files to Modify:
1. `package.json` - Add dependencies
2. `.env` - Add `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. `src/app/layout.tsx` - Add Toaster component
4. `src/context/Auth.tsx` - Update if needed for Supabase integration

### Files to Read (for reference):
1. `src/app/globals.css` - Theme colors and styles
2. `src/components/ui/button.tsx` - Button component reference
3. `src/components/ui/input.tsx` - Input component reference
4. `src/components/ui/label.tsx` - Label component reference
5. `src/components/home/product-tabs/tabs.tsx` - Existing tabs pattern
6. `src/lib/utils.ts` - Utility functions (cn helper)

---

## Dependencies to Install

```json
{
  "react-hook-form": "^7.x.x",
  "sonner": "^1.x.x",
  "@hookform/resolvers": "^3.x.x",
  "zod": "^3.x.x"
}
```

**Note:** Sonner will be installed automatically when adding the component via shadcn CLI (`npx shadcn@latest add sonner`).

---

## Environment Variables Required

Add to `.env` file:
```
NEXT_PUBLIC_SUPABASE_URL=https://qbxbamxyxeqeawywumzx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
```

---

## Notes

1. **Password Validation:** All conditions are "at least" requirements, meaning a password can have more than the minimum requirements.

2. **Validation Timing:** Validation should only occur on form submission, not while typing. This means `mode: "onSubmit"` in react-hook-form.

3. **Theme Consistency:** All components should use existing Tailwind classes and CSS variables from globals.css. No custom colors or styles outside the theme.

4. **Error Messages:** Supabase errors should be displayed in Sonner toast notifications. Form validation errors should be displayed below the respective input fields.

5. **Email Confirmation:** Supabase should be configured to send confirmation emails. The callback route will handle the email confirmation flow.

---

## Status Legend

- ⏳ Pending - Not started
- 🔄 In Progress - Currently working on
- ✅ Completed - Finished and tested
- ❌ Blocked - Waiting on dependency or decision
- ⚠️ Needs Review - Completed but needs review

---

## Progress Tracking

**Overall Progress:** 27% (4/15 tasks completed)

**Phase 1 (Setup):** 2/2 tasks ✅
**Phase 2 (UI Components):** 2/2 tasks ✅
**Phase 3 (Auth Page):** 0/4 tasks
**Phase 4 (Supabase Integration):** 0/3 tasks
**Phase 5 (Error Handling):** 0/1 tasks
**Phase 6 (Testing):** 0/2 tasks
**Phase 7 (Integration):** 0/2 tasks

---

*Last Updated: [Will be updated as tasks progress]*

