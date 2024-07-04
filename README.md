# angular-techs-logos

A list with logos company and techs


<img alt="A list with logos company and techs screenshot" width="100%" src="https://raw.githubusercontent.com/criar-art/angular-techs-logos/master/public/screen-angular-techs-logos.png" />

Install
```bash
npm install angular-techs-logos
```

Usage basic
```ts
import VueTechsLogs from 'angular-techs-logos';
```

```html
<!-- list all logos -->
<angular-techs-logos />

<!-- single icon -->
<angular-techs-logos name="javascript" />

<!-- list limited logos -->
<angular-techs-logos [list]="['angular','javascript', 'react', 'angular']" />

<!-- list all logos with hiddenLogos -->
<angular-techs-logos [hiddenLogos]="['angular','javascript', 'react', 'angular', 'android']" />

<!-- Hidden label -->
<angular-techs-logos name="javascript" [hiddenLabel]="true" />
<angular-techs-logos [hiddenLabel]="true" />

<!-- single change label name -->
<angular-techs-logos name="javascript" label="New JavaScript" />

<!-- Modification of size component -->
<angular-techs-logos name="javascript" size="220px" />
```
