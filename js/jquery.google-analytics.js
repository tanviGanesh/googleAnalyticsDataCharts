/*************************

	created on 22-01-2015
	by Tanvi Salkar
	
***********/
(function($) {

    $.fn.googleAnalytics = function(options) {

		var settings = $.extend({
            gaEmail         : '',   // gmail email
			gaPassword		:  '', // gmail password
			gaProfileId		:  '', // analytics account profile id
			dimensions	: [],  //dimensions should start with 'ga:' example ['ga:browser' ,'ga:date']
			metrics	: [],  //metrics should start with 'ga:' example ['ga:users' ,'ga:pageviews']	
			startDate: '',  //start date defaults to last 30 days
			endDate: '',	//end date  defaults to current date
			filter: '',  // example 'country == United States && browser == Firefox || browser == Chrome'
			sortMetric: '',  //format -metric example -date
			chartTitle: '',  // title of the chart
			chartType : 'pie',  // chart type: pie,line,bar 
			chartBackgroundColor :	'#FFFFFF',  // chart backgroundcolor
			chartOption : {
								width : '50%',
								height : '75%',
								top : 'none',  //top position top:0
								left : 'none'	//left position left:0
			
							},
			chartWidth: 800,
			chartHeight: 300,
			chartColors:[],  // colors for chart if provided
			chartFontSize: 15,
			pieSliceTextStyle: {
				color: 'black',
				fontName: 'Arial',
				fontSize: 17
			},
			titleTextStyle : { 
					  color: 'black',
					  fontName: 'Times New Roman',
					  fontSize: 20,
					  bold: true,
					  italic: false 
			},
			titlePosition : 'out',  //    in - Draw the title inside the chart area.    out - Draw the title outside the chart area.    none - Omit the title.

			
			pieHole : 0,  // piehole for donut shaped pie chart
			pieStartAngle : 0,  // rotating pie chart
			
			//line graph 
			curveType: 'none',  //for straight lines in line chart curveType: 'function',  for curved lines
			pointSize:0,
			pointShape: "circle", // 'circle', 'triangle', 'square', 'diamond', 'star', or 'polygon'.

			
			
			//bar graph
			bargroupWidth:"35%",  // bar width
			bars:"vertical",  //vertical,horizontal
			
			legend: 'none', //no legend
			legendPosition: 'right', //legend position
			legendStyles: {
					  color: 'black',
					  fontName: 'Arial',
					  fontSize: 16,
					  bold: false,
					  italic: false 
			},
			fontName: 'Times New Roman', //font name
			gapiClassPath: 'lib/',    // path to gapi class 'gapi.class.php'
			ajaxFile: 'retrieveAnalyticsData.php'    // full path to ajax call file for analytics 
			
        }, options);
		
		var chartoptions={};
		
		function handleCoreReportingResults(results, div) {
 			var data = google.visualization.arrayToDataTable(results);
			switch(settings.chartType) {
				case "pie":
					drawPieChartVisualization(data,div);
					break;
				
				case "line":
					drawLineGraphVisualization(data,div);
					break;	
				
				case "bar":
					drawBarGraphVisualization(data,div);
					break;
					
				case "default":
					drawPieChartVisualization(data,div);
					break;
				
			}
			
			
			
		}
		
		// Draws the Pie chart.
		function drawPieChartVisualization(view,div) {
			var chart = new google.visualization.PieChart(document.getElementById(div));
			chartoptions.title=settings.chartTitle;
			chartoptions.is3D=settings.is3D;
			chartoptions.pieHole=settings.pieHole;
			chartoptions.pieStartAngle=settings.pieStartAngle;
			chartoptions.fontName=settings.fontName;
			chartoptions.fontSize=settings.chartFontSize;
			chartoptions.pieSliceTextStyle=settings.pieSliceTextStyle;
			chartoptions.titleTextStyle=settings.titleTextStyle;
			chartoptions.titlePosition=settings.titlePosition;
			chartoptions.width=settings.chartWidth;
			chartoptions.height=settings.chartHeight;
			
			chartoptions.backgroundColor=settings.chartBackgroundColor;
			if(settings.chartColors.length>0)
				chartoptions.colors=settings.chartColors;
			chartoptions.chartArea=settings.chartOption;
			
			if(settings.legend=='none') {
				chartoptions.legend=settings.legend;
			}
			else {				
				chartoptions.legend= {position: settings.legendPosition, textStyle: settings.legendStyles};
			}
			$(window).smartresize(function () {
				chart.draw(view, chartoptions);
			});
			chart.draw(view, chartoptions);
		}
	
	// Draws the Line graph.
	function drawLineGraphVisualization(view,div) {
		 var chart = new google.visualization.LineChart(document.getElementById(div));
		    chartoptions.title=settings.chartTitle;
    		chartoptions.fontName=settings.fontName;
			chartoptions.fontSize=settings.chartFontSize;
			chartoptions.titleTextStyle=settings.titleTextStyle;
			chartoptions.titlePosition=settings.titlePosition;			
			chartoptions.backgroundColor=settings.chartBackgroundColor;
			chartoptions.width=settings.chartWidth;
			chartoptions.height=settings.chartHeight;
			if(settings.chartColors.length>0)
				chartoptions.colors=settings.chartColors;
			chartoptions.chartArea=settings.chartOption;
			
			chartoptions.curveType=settings.curveType;  
			chartoptions.pointSize=settings.pointSize;  
			chartoptions.pointShape=settings.pointShape;  
			
			if(settings.legend=='none') {
					chartoptions.legend=settings.legend;
				}
				else {				
					chartoptions.legend= {position: settings.legendPosition, textStyle: settings.legendStyles};
				}
			chart.draw(view, chartoptions);
		 $(window).smartresize(function () {
				chart.draw(view, chartoptions);
			});
	}
  
  // Draws the Bar graph.
  function drawBarGraphVisualization(view,div) {
	 	 var chart = new google.visualization.ColumnChart(document.getElementById(div));
		   chartoptions.title=settings.chartTitle;
    		chartoptions.fontName=settings.fontName;
			chartoptions.fontSize=settings.chartFontSize;
			chartoptions.titleTextStyle=settings.titleTextStyle;
			chartoptions.titlePosition=settings.titlePosition;			
			chartoptions.backgroundColor=settings.chartBackgroundColor;
			chartoptions.width=settings.chartWidth;
			chartoptions.height=settings.chartHeight;
			if(settings.chartColors.length>0)
				chartoptions.colors=settings.chartColors;
			chartoptions.chartArea=settings.chartOption;
			
			chartoptions.bars=settings.bars;
			
			chartoptions.bar={groupWidth: settings.bargroupWidth};
			
			
			
			if(settings.legend=='none') {
					chartoptions.legend=settings.legend;
				}
				else {				
					chartoptions.legend= {position: settings.legendPosition, textStyle: settings.legendStyles};
				}
				chart.draw(view, chartoptions);
     $(window).smartresize(function () {
				chart.draw(view, chartoptions);
			});
	}

		
		
        return this.each( function() {
			var divId=$(this).attr('id');

			
			var columnRow = settings.dimensions.slice();
			columnRow = columnRow.concat(settings.metrics);
			
			$.post( settings.ajaxFile, { 
				gapiClassPath: settings.gapiClassPath,
				gaEmail: settings.gaEmail,
				gaPassword: settings.gaPassword,
				gaProfileId: settings.gaProfileId,
				dimensions: settings.dimensions,
				metrics: settings.metrics,
				startDate: settings.startDate,
				endDate: settings.endDate,
				filter: settings.filter,
				sortMetric: settings.sortMetric,
				orderData: columnRow
				})
			.done(function( data ) {
				
				var chartData = []; 
				chartData.push(columnRow);
				data=JSON.parse(data);
				for(i in data) { 
					var SubchartData = []; 
					for(k in data[i]) {
						SubchartData.push(data[i][k]);
					}
					chartData.push(SubchartData); 
				} 

				handleCoreReportingResults(chartData,divId);
			});

		});

    }

}(jQuery));