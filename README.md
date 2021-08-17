#Jobly React Components

# App 
 - Props : None
 - State: 
    - isLoggedIn  // NOTE: token to determine if isLoggedIn
    - isAuthorized
    - currentUser
 - App -> {Nav, Routes}

<!----- TODO: move companyList, Job list to companies, jobs-->
<!--ProfileDetails and User sound like the same  make change to currentUser-->
## Routes
  - Props: {isLoggedIn, isAuthorized, , JobList, ProfileDetails, user}
  - State: 
  - Renders: App -> Routes -> { Homepage, LoginForm, SignupForm, Companies, Jobs, ProfileDetails, CompanyJobs} 

## Homepage 
  -Props: { isLoggedIn, isAuthorized, firstName, isLoggedIn, isAuthorized, firstName}
  -State:  None
  -Render: Routes -> Home NOTE:Change made because Nav should not be sibling

## Nav
  -Props: { isLoggedIn, isAuthorized}
  -Render: App -> Nav

### SignupForm
  - Props: {isLoggedIn, isAuthorized}  # NOTE: if logged in -> redirect to Home
  - State: {formData}  ex: {username, pw, email, fn, ln}
  - Routes -> SignupForm
NOTE: trigger statechange --> function that triggers call and update isLoggedIn, isAuthorized
      -> add functions to props to update state

### LoginForm 
  - Props: isLoggedIn
  - State: {formData } Ex: {username, password}
  - Routes -> LoginForm

### Search
  - Props: None
  - State: {formData} Ex: {searchData}
  - {Companies, Jobs} -> Seach

#### Companies
  - Props: {isLoggedIn, isAuthorized, }  /// will need to change companyList to a state
  - State: companyList
  - Renders: Routes -> Companies -> {CompanyList, Search}

/// consider keeping the companyList 
##### CompanyList
  - Props: {companyList}
  - State: 
  - Companies -> CompanyList -> Company

###### Company 
 - Props: {company}     # note{{title, description, logo}}
 - State: None
 - CompanyList -> Company 
 
### CompanyDetails
 - Props: {company, companyJobList} --> render information about specific company and reuse joblist
 - state: None
 - Routes -> companyJobs -> Job 

### ProfileDetails
 - Props: {isLoggedIn, isAuthorized, user}  # Note: user like {username, password, firstname, lastname}
 - State: {formData, isValidPassword}  # Note: formData like {firstName, lastname, email, password}
 - Routes -> ProfileDetails 

### Jobs   
 - Props: { isLoggedIn, isAuthorized}
 - State: jobList 
 - Routes -> Jobs -> {Job, Search}

#### Job
 - Props: {job} # NOTE: {title, salary, company equity}
 - State: {isApplied}
 - {Company, Jobs} -> Job

     // introduce mid card level to jobcard list --> same function as companiesList --> renderCards
