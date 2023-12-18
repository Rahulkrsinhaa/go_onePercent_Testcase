
import {NightwatchBrowser } from 'nightwatch';
import { LoginPage } from 'page_object_model/Leaderboardsummary/login';
import {LeadingNasherPage} from 'page_object_model/Leaderboardsummary/leadingNasherPage'
import {SummaryPage} from 'page_object_model/Leaderboardsummary/summary'


describe('UI automation for leaderboard summary page option', function() {

  this.tags = ['LeaderBoardSummary'];
  

  let summaryPage: SummaryPage;
  let leadingPage: LeadingNasherPage;

  beforeEach((client:NightwatchBrowser) => {
    // Create a page object and perform login actions
    const page = client.page.login()as LoginPage;
    page
        .maximizeWindow()
        .navigate()
        .enterCredentials()
        .signIn();

    //Initialize summaryPage and leadingpage page objects
    summaryPage = client.page.summary() as SummaryPage;
    leadingPage = client.page.leadingNasherPage() as LeadingNasherPage;
});

  // Define common actions in the beforeEach hook
  const commonActions = () => {
    summaryPage
      .isLeaderboardVisible()
      .assert.textContains('@summary', 'Summary')
      .SummaryWithAllTheDetails()
  };

  const leadingNasherCommonActions = () => {
    commonActions();
    leadingPage
      .leadingNasherProfilePage()
  };



  /**
   * Test case to check if the dashboard is visible
   */
  it('dashboard is visible', () => {
    // summaryPage.dashboardIsVisible()
    summaryPage
      .waitForElementVisible('@dashboard')
      .assert.textContains('@dashboard', 'DASHBOARD')
  });

  /**
   * Test case to check if the summary is visible in the leaderboard menu
   */
  it('When I expand leaderboard Then I should be able to see summary in leaderboard menu', () => {
    commonActions();
  });

  /**
  * Test case to check if summary page opens with all the details
  */
  it('When I click on summary Then summary page should be open with all the details', () => {
    commonActions();
  });

  /**
 * Test case to ensure that clicking on the navigation arrow allows switching to all other contribution types.
 */
  it('When I click on navigation arrow Then it should let me switch to all other contribution types', () => {
    commonActions();
    summaryPage
      // all contribution section is visible 
      .allContributionSectionIsVisible()
      .assert.textContains('@contributionTypes_1', 'Blogs')
      .assert.textContains('@contributionTypes_2', 'Knolx')
      .assert.textContains('@contributionTypes_3', 'Webinars')
      .assert.textContains('@contributionTypes_4', 'OS Contributions')
      .clickOnNavigationArrow()
      .assert.textContains('@contributionTypes_1', 'Techhub')
      .assert.textContains('@contributionTypes_2', 'Conferences')
      .assert.textContains('@contributionTypes_3', 'Research Papers')
      .assert.textContains('@contributionTypes_4', 'Books')
      .clickOnNavigationArrow()
      .assert.textContains('@contributionTypes_1', 'Meetup')
      .assert.textContains('@contributionTypes_2', 'Proposal')
      .assert.textContains('@contributionTypes_3', 'Process Doc')
      .assert.textContains('@contributionTypes_4', 'PMO Template')
      .clickOnNavigationArrow()
      .assert.textContains('@contributionTypes_1', 'Certifications')
      .assert.textContains('@contributionTypes_2', 'Online Courses')
  });


  /**
 * Test case to confirm visibility of the Leading Nasher list after scrolling down.
 * @test Verifies that scrolling down on the summary page reveals the Leading Nasher list.
 */
  it('When I scroll down Then I should be able to see Leading Nasher list', () => {
    commonActions();
    summaryPage
      //contains leading lasher list
      .containsLeadingnasherList();
  });

  /**
 * Test case to verify switching between "This Mo//asserting skill for allt he labelsnth" and "All Time" buttons and viewing the list of Nashers.
 */
  it('When I am on this month button and click on All time button Then I should be able to switch between both buttons and able to see the list of nasher', () => {
    commonActions();
    summaryPage
      //switch bwtween allTime and date
      .switchBetweenAlltimeandThisMonth()
      .waitForElementVisible('@leadingNasherList')
      .containsLeadingnasherList();
  });

  afterEach((client) => {
    client.end();
  });
});