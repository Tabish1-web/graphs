//[Dashboard Javascript]

//Project:	Lion Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';

	
//webticker
	 if ($('#webticker-1').length) {   
			$("#webticker-1").webTicker({
				height:'auto', 
				duplicate:true, 
				startEmpty:false, 
				rssfrequency:5
			});
		}
	
	// Morris-chart

	Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010',
            btc: 50,
            neo: 80,
            dash: 20
        }, {
            period: '2011',
            btc: 230,
            neo: 200,
            dash: 180
        }, {
            period: '2012',
            btc: 80,
            neo: 160,
            dash: 70
        }, {
            period: '2013',
            btc: 270,
            neo: 200,
            dash: 100
        }, {
            period: '2014',
            btc: 220,
            neo: 180,
            dash: 190
        }, {
            period: '2015',
            btc: 185,
            neo: 180,
            dash: 140
        },
         {
            period: '2016',
            btc: 50,
            neo: 280,
            dash: 210
        }],
        xkey: 'period',
        ykeys: ['btc', 'neo', 'dash'],
        labels: ['BTC', 'NEO', 'DASH'],
        pointSize: 3,
        fillOpacity: 0.5,
        pointStrokeColors:['#48b0f7', '#f96197', '#465161'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 3,
        hideHover: 'auto',
        lineColors: ['#06d79c', '#398bf7', '#926dde'],
        resize: true
        
    });
	
	 // WeatherIcon
	
	WeatherIcon.add('icon1'	, WeatherIcon.SLEET , {stroke:false , shadow:false , animated:true } );


	//am chart ----chartdiv3
	var chart = AmCharts.makeChart( "chartdiv3", {
	  "type": "gauge",
	  "theme": "black",
	  "startDuration": 0.1,
	  "marginTop": 20,
	  "marginBottom": 50,
	  "axes": [ {
		"id": "axis1",
		"axisAlpha": 0,
		"endAngle": 360,
		"endValue": 12,
		"minorTickInterval": 0.2,
		"showFirstLabel": false,
		"startAngle": 0,
		"topTextYOffset": 100,
		"valueInterval": 1
	  }, {
		"id": "axis2",
		"axisAlpha": 0,
		"endAngle": 360,
		"endValue": 60,
		"radius": 60,
		"showFirstLabel": false,
		"startAngle": 0,
		"valueInterval": 5,
		"labelFrequency": 0,
		"tickLength": 10
	  } ],
	  "arrows": [ {
		"innerRadius": 70,
		"nailRadius": 0,
		"radius": "80%",
		"startWidth": 10,
		"endWidth": 10
	  }, {
		"innerRadius": 70,
		"nailRadius": 0,
		"radius": "100%",
		"startWidth": 6,
		"endWidth": 6
	  }, {
		"axis": "axis2",
		"color": "#CC0000",
		"innerRadius": 50,
		"nailRadius": 0,
		"radius": "100%",
		"startWidth": 6,
		"endWidth": 6,
		"alpha": 1
	  } ],
	  "export": {
		"enabled": true
	  }
	} );

	interval = setInterval( updateClock, 1000 );


	// update clock
	function updateClock() {
	  // get date
	  var date = new Date();
	  var hours = date.getHours();
	  var minutes = date.getMinutes();
	  var seconds = date.getSeconds();

	  if(chart.arrows[ 0 ].setValue){
		// update hours
		chart.arrows[ 0 ].setValue( hours + minutes / 60 );
		// update minutes
		chart.arrows[ 1 ].setValue( 12 * ( minutes + seconds / 60 ) / 60 );
		// update seconds
		chart.arrows[ 2 ].setValue( date.getSeconds() );

		// update date
		var dateString = AmCharts.formatDate( date, "DD MMM" );
		chart.axes[ 0 ].setTopText( dateString );
	  }
	}
	
}); // End of use strict

	