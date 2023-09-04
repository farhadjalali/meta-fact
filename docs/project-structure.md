# Project structure

(Auto generated folders, some boilerplate files and etc are not listed here.)

## Main source files (inside the *src* folder)
- **common** shared components, atomic, business independent components, etc.
  - **card-field** a generic component to show/edit a card field (including caption and value). 
  - **progress-bar** a generic component as a top docked progress bar
  - **error-boundary** a generic component to catch and show errors
- **components** business related components
  - **relation-list** a component to show a list of relations in a grid
  - **relation-card** a component to show and edit a relation in a card
- **config** the app configurations 
- **i18n** multi language support (en and nl)
- **pages** the app pages
  - **home** the home page (just to guide the user to the relations page)
  - **relations** the */relations* page aims to show a list of relations
  - **relation** the */relation/[id]* page aims to show and edit a relation
  - **not-found** the */404* page
- **services** api calls and state management services (utilizing Redux)
  - **store.ts** redux setup and typings file
  - **relation** the *relation* redux module
    - **actions.ts** redux actions. (Subjective, based on the project nature and requirements)
    - **reducers.ts** redux reducers
    - **index.ts** index file to expose the exported functions, types and properties
    - **types.ts** exported types
    - **sample.json** a mock data file simulating delayed loading
- **styles** a modular based styling files separation. (Subjective, based on the project nature and requirements)


## General convention for components folder structure
As the recommended good practice, each component should be in a separate folder, containing all the related files, including component itself, its styles, tests, etc. The component folder name is in *kebab-case* and the component name itself is in *PascalCase* (Subjective). 


## Other files and folders

- **.vscode** Vscode settings
  - **settings.json** configured to use prettier on save. 
- **cypress** End to end testing
    - **e2e/page-relations.cy.ts** sample test scenario
    - **fixtures/relations.json** sample data
- **docs** document files  
- **public** web application public(static) files, such as favicon, manifest, index.html and etc.
- **.env.sample** global environment variables. Just used for SonarQube token file. (Check Code quality section) 
- **.prettierrc** prettier configuration file
- **cypress.config.ts** cypress config file 
- **package.json** check the *scripts* section to see the available commands
- **README.md** documents index 
- **tsconfig.json** typescript configuration file 