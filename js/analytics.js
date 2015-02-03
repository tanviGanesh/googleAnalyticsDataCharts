$(document).ready(function(){
					/* example1 */
			$('#stats1').googleAnalytics({
				gaEmail         : 'your email here',   // gmail email id of analytics account
				gaPassword		:  'your password here',  // gmail password
				gaProfileId		:  'your analytics profile id',
				chartType : 'bar',
				dimensions	: ['date'],  //dimensions should start with 'ga:' example ['ga:browser' ,'ga:date']
				metrics	: ['pageviews','users'],  //metrics should start with 'ga:' example ['ga:users' ,'ga:pageviews']	
				startDate: '7daysAgo',  //start date
				endDate: '',	//end date
				sortMetric: "-date",
				filter: '',
				chartOption : {
								width : '100%',
								height : '75%',
								top : 'none',  //top position top:0
								left : 'none'	//left position left:0
			
							},
				legend: '',
				chartTitle: 'Pageviews v/s Users'
			});
			
			
			/* example2 */
			$('#stats2').googleAnalytics({
				gaEmail         : 'your email here',   // gmail email id of analytics account
				gaPassword		:  'your password here',  // gmail password
				gaProfileId		:  'your analytics profile id',
				dimensions	: ['browser'],  //dimensions should start with 'ga:' example ['ga:browser' ,'ga:date']
				metrics	: ['users'],  //metrics should start with 'ga:' example ['ga:users' ,'ga:pageviews']	
				startDate: '12monthsAgo',  //start date
				endDate: '',	//end date
				filter: '',
				legend: '',
				legendColor: 'blue', //legend color
				legendFontSize: '20', //legend color
				sortMetric: '',  //format -metric example -date
				chartTitle: 'Browser v/s Users'
			});
			
			
			/* example3 */
			$('#stats3').googleAnalytics({
				gaEmail         : 'your email here',   // gmail email id of analytics account
				gaPassword		:  'your password here',  // gmail password
				gaProfileId		:  'your analytics profile id',
				dimensions	: ['operatingSystem'],  //dimensions should start with 'ga:' example ['ga:browser' ,'ga:date']
				metrics	: ['users'],  //metrics should start with 'ga:' example ['ga:users' ,'ga:pageviews']	
				startDate: '12monthsAgo',  //start date
				endDate: '',	//end date
				filter: '',
				legend: '',
				legendColor: 'blue', //legend color
				legendFontSize: '20', //legend color
				sortMetric: '',  //format -metric example -date
				chartTitle: 'operatingSystem v/s Users'
			});

			
			
});