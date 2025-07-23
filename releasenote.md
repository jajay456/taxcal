# Release Note: Improve SonarQube Duplicate Detection
 Date: 2025-07-23
## Summary
This update improves SonarQube configuration to ensure code duplication is detected and reported correctly in analysis reports.

##  What was changed?
### 1. Updated `sonar-project.properties`
```properties
sonar.projectKey=my-angular-app
sonar.projectName=My Angular App
sonar.projectVersion=1.0

sonar.sources=src
sonar.exclusions=**/*.spec.ts,**/node_modules/**,**/*.test.ts
sonar.language=ts
sonar.host.url=http://localhost:9000
sonar.token=sqa_b97c57af640b51c3487c44b1f86b3256c3ef1e79
```
### 2. label linked to input
`taxcal.html`
```
<label>VAT Month</label>
```
```
<label for="vatMonth">VAT Month</label>
```
```
<label>VAT Year/label>
```
```
<label for="vatYear">VAT Year</label>
```
### 3. refactor
No need to use if
```
get penalty(): number {
  if (this.showAdditional && this.filingSubType === 'Late') {
    return 200;
  }
  return 200;
}
```
```
get penalty(): number {
  return 200;
}
```
## Result
<img width="1830" height="916" alt="image2" src="https://github.com/user-attachments/assets/fe3056ca-582c-4ca8-80be-9d18ee989e55" />
