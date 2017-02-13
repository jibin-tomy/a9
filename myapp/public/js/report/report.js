REPORT = function(window,document){
	get_menu = function(){
		$.ajax({
            type: "GET",
            url: "report1/menu",
            dataType: 'json',
            success: function(data) {
            	populate_menu(data)
            },
            cache: false,
            error: function(error) {
                console.log("Ajax request has failed.");
            }
        }); // end ajax call
	},
	populate_menu = function(data){
		$.each(data.country, function(key,val){
			$("#country").append(" <option value = '"+val+"' selected='selected'>"+val+"</option>");
		})
		$.each(data.advertiser, function(key,val){
			$("#advertiser").append(" <option value = '"+val+"' selected='selected'>"+val+"</option>");
		})
	},
	options = {
		    chart: {
		        type: 'column',
		    },
		    title: {

		    },
		    xAxis: {
		        crosshair: true
		    },
		    yAxis: {
		        min: 0,
		        title: {
		            text: 'Count'
		        }
		    },
		    tooltip: {
		        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
		            '<td style="padding:0"><b>{point.y} </b></td></tr>',
		        footerFormat: '</table>',
		        shared: true,
		        useHTML: true
		    },
		    plotOptions: {
		        column: {
		            pointPadding: 0.2,
		            borderWidth: 0
		        }
		    }
		},
	build_chart = function(data,chart_data){
		options.xAxis.categories = data.country;
		var bit_series = []
		var imp_series = []
		$.each(chart_data, function( index, value ) {
			if(data.advertiser.indexOf(value.name) > -1){
				var tmp_name = value.name;
				var bit_arr = []
				$.each(value.data_bit, function( index, bit ) {
					if(data.country.indexOf(index) > -1){
						bit_arr.push(bit);
					}
				});
				var imp_arr = [];
				$.each(value.data_imp, function( index, imp ) {
					if(data.country.indexOf(index) > -1){
						imp_arr.push(imp);
					}
				});
				bit_series.push({name:tmp_name,data:bit_arr})
				imp_series.push({name:tmp_name,data:imp_arr})
			}
		});
		options.series = bit_series;
		options.chart.renderTo = 'container_bids';
		options.title. text= 'Bit Count';
		var chart_bits = new Highcharts.chart(options);
		options.series = imp_series;
		options.chart.renderTo = 'container_impressions';
		options.title. text= 'Impressions Count'
		var chart_imp = new Highcharts.chart(options);
	},
	init = function(){
		options.series = {
		        name: '',
		        data: []
		    };
		options.chart.renderTo = 'container_bids';
		options.title. text= 'Bit count';
		var chart_bits = new Highcharts.chart(options);
		options.series = {
		        name: '',
		        data: []
		    };
		options.chart.renderTo = 'container_impressions';
		options.title. text= 'Bit Impressions'
		var chart_imp = new Highcharts.chart(options);
		var chart_imp = new Highcharts.chart(options);
	}
	datepicker = function(){
		$( "#datepicker" ).datepicker({
			inline: true
		});
		$("#datepicker").val($.datepicker.formatDate('mm/dd/yy', new Date()))
	},
	validate = function(){
		var no_error = true;
		if($("#datepicker").val() == '')
			no_error =  false;
		var country = [];
		$('#country :selected').each(function(i, selected){
		  country[i] = $(selected).val();
		});
		if(country.length == 0){
			no_error = false;
			$("#div_country").addClass("has-error");
		}else{
			$("#div_country").removeClass("has-error");
		}
		var advertiser = [];
		$('#advertiser :selected').each(function(i, selected){
		  advertiser[i] = $(selected).val();
		});

		if(advertiser.length == 0){
			no_error = false;
			$("#div_advertiser").addClass("has-error");
		}else{
			$("#div_advertiser").removeClass("has-error");
		}
		return no_error;
	},
	get_chart_data = function(data){
		$.ajax({
            type: "GET",
            url: "report1/get_data",
            dataType: 'json',
            data: data,
            success: function(chart_data) {
            	REPORT.build_chart(data,chart_data);
            },
            cache: false,
            error: function(error) {
                console.log("Ajax request has failed.");
            }
        });
	},
	submit = function() {
            $(document).on("click", "#submit", function(event) {
            	if(validate()){
            		var country = [];
					$('#country :selected').each(function(i, selected){
					  country[i] = $(selected).val();
					});
            		var advertiser = [];
            		$('#advertiser :selected').each(function(i, selected){
					  advertiser[i] = $(selected).val();
					});
            		var date = $( "#datepicker").val();
            		var paramSendObj = {
	                    'country': country,
	                    'advertiser': advertiser,
	                    'date': date
	                };
	                get_chart_data(paramSendObj)
            	}
            });
        }
	return {
        get_menu: get_menu,
        datepicker: datepicker,
        build_chart: build_chart,
        init: init,
        submit: submit
    };
}(this, document);

$(window).load(function() {
    REPORT.get_menu();
    REPORT.datepicker();
    REPORT.submit();
    REPORT.init();
});

