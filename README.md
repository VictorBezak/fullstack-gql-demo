# Fullstack Template

This is intended to be a template for a fresh full-stack app. *caveat* still very much learning myself so some of the inital planning in this README may be naive or incomplete. Will continue to update as I learn more.

The tech-stack featured in this template is:

- package-manager: yarn
- API spec: GraphQL
- Database: undetermined
- Frontend-Framework: undetermined

---
---

## Plans (brain-storming / No committed plan-of-action)

- Keep this template agnostic to the choice of DB and frontend-framework, but build the template out further so that it is easier for someone to plug-in their tools-of-choice

- We also need to decide if we want to provide any boiler-plate in our template to support an HTTP-client, or if we just want to create empty files to designate a place for the user to craft their own implementation

- (idealistic and not a focus for MVP) Once we have a base template complete, perhaps we can explore a setup-script that will prompt you for your option of package-manager, api-spec, db, and front-end framework

  - package-manager
    - npm
    - yarn
    - pnpm

  - API spec
    - REST
    - GraphQL
    - both

  - Database (start with this minimal list. If user wants another DB, it might be safe to assume that they know enough about DB's to implement it themselves)
    - MySQL
    - Postgres
    - MongoDB
    - agnostic (blank template)

  - Frontend-Framework... This script will include the absolute minimal necessities for a user to start from scratch in each of these frameworks. This will be different from the experience if a user chose to run the setup commands for one of these frameworks (eg. `vue create hello-world`, `ng new myNewApp`, etc.). We may find that providing custom minimal boiler-plate for these frameworks is inferior to just internally calling their default setup script after the user selects their option (ie. This approach could make their beginning template bloated and typical, which isn't ideal, but it may be best option to help people hit the ground running in their framework of choice)
    - Vue
    - Svelte
    - React
    - Angular
    - agnostic (blank template)
