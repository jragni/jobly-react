#Jobly React Components

# App 
 - Props : None
 - State: 
    - isLoggedIn  // NOTE: token to determine if isLoggedIn
    - isAuthorized
    - currentUser
 - App -> {Nav, Routes}

## Routes
  - Props: {isLoggedIn, isAuthorized, currentUser}
  - State: 
  - Renders: App -> Routes ->
    {
      Homepage,
      LoginForm,
      SignupForm,
      Companies,
      Jobs,
      ProfileDetails,
      CompanyDetail
     } 

## Homepage 
  -Props: { isLoggedIn, 
            isAuthorized,
            firstName, 
            isLoggedIn, 
            isAuthorized, 
            firstName}
  -State:  None
  -Render: Routes -> Homepage NOTE:Change made because Nav should not be siblin

## Nav
  -Props: { isLoggedIn, isAuthorized}
  -Render: App -> Nav

### SignupForm
  - Props: {isLoggedIn,
            isAuthorized}  # NOTE: if logged in -> redirect to Homepage
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
  - Companies -> CompanyList -> CompanyCard

###### CompanyCard
 - Props: {company}     # note{{title, description, logo}}
 - State: None
 - CompanyList -> CompanyCard
 
### CompanyDetail
 - Props: {company, companyJobList} --> render information about specific company and reuse joblist
 - state: None
 - Routes -> CompanyDetail -> Job 

### ProfileDetails
 - Props: {isLoggedIn, isAuthorized, CurrentUser}
 - # Note: user like {username, password, firstname, lastname}
 - State: {formData, isValidPassword}  # Note: formData like {firstName, lastname, email, password}
 - Routes -> ProfileDetails 

### Jobs   
 - Props: { isLoggedIn, isAuthorized}
 - State: jobList 
 - Routes -> Jobs -> {Job, Search}

#### Job
 - Props: {job} # NOTE: {title, salary, company equity}
 - State: {isApplied}
 - {CompanyCard, Jobs} -> Job

