
// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//
 
//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/
 
module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['test','nightwatch'],
 
  // See https://nightwatchjs.org/guide/concepts/page-object-model.html
  page_objects_path: ['./node_modules/page_object_model/Leaderboardsummary'],
 
  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
  custom_commands_path: [],
 
  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
  custom_assertions_path: [],
 
  // See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
  plugins: [],
  
  // See https://nightwatchjs.org/guide/concepts/test-globals.html
  globals_path: '',
  
  webdriver: {},
 
  test_workers: {
    enabled: true
  },
 
 
 
  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'https://nashtechglobal.qa.go1percent.com/my-dashboard',
 
      screenshots: {
        enabled: true,
        path: 'screens',
        on_failure: true
      },
 
      desiredCapabilities: {
        browserName: 'chrome'
      },
 
      webdriver: {
        start_process: true,
        server_path: 'node_modules/.bin/chromedriver'
      }
    },
 
    api_testing: {
      start_session: false,
      webdriver: {
        start_process: false,
      }
    },
 
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        acceptInsecureCerts: true,
        'moz:firefoxOptions': {
          args: [
            // '-headless',
            // '-verbose'
          ]
        }
      },
      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ]
      }
    },
 
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: true,
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
          ]
        }
      },
 
      webdriver: {
        start_process: true,
        server_path: '',
        cli_args: [
          // --verbose
        ]
      }
    },
 
 
 
    edge: {
      desiredCapabilities: {
        browserName: 'MicrosoftEdge',
        'ms:edgeOptions': {
          w3c: true,
          // More info on EdgeDriver: https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/capabilities-edge-options
          args: [
            //'--headless'
          ]
        }
      },
 
      webdriver: {
        start_process: true,
        // Download msedgedriver from https://docs.microsoft.com/en-us/microsoft-edge/webdriver-chromium/
        //  and set the location below:
        server_path: '',
        cli_args: [
          // --verbose
        ]
      }
    },
 
  
  usage_analytics: {
    enabled: true,
    log_path: './logs/analytics',
    client_id: '5d086dff-d1b2-46d7-869e-ac4bc31e7828'
  }
}
  
};
