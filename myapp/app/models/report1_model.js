

exports.get_menu = function(callback) {
	var menu ={
		country:['US','UK','GE','CA'],
		advertiser:['Amazone','Nike','BMW','Apple']
	}
    callback(null,menu);
};

exports.get_data = function(req,callback) {
	var raw_data = return_sample_data();
	  callback(null,raw_data);
	};

function return_sample_data(){
	var sample_data = [{
	        name: 'Amazone',
	        data_bit: {
	        	'US':500,
	        	'UK':600,
	        	'GE':554,
	        	'CA':343
	        },
	        data_imp: {
	        	'US':700,
	        	'UK':800,
	        	'GE':254,
	        	'CA':343
	        }

	    }, {
	        name: 'Nike',
	        data_bit: {
	        	'US':500,
	        	'UK':600,
	        	'GE':554,
	        	'CA':343
	        },
	        data_imp: {
	        	'US':700,
	        	'UK':800,
	        	'GE':254,
	        	'CA':343
	        }

	    }, {
	        name: 'BMW',
	        data_bit: {
	        	'US':500,
	        	'UK':600,
	        	'GE':554,
	        	'CA':343
	        },
	        data_imp: {
	        	'US':700,
	        	'UK':800,
	        	'GE':254,
	        	'CA':343
	        }
	    }, {
	        name: 'Apple',
	        data_bit: {
	        	'US':500,
	        	'UK':600,
	        	'GE':554,
	        	'CA':343
	        },
	        data_imp: {
	        	'US':700,
	        	'UK':800,
	        	'GE':254,
	        	'CA':343
	        }

	    }]
	return sample_data;
}


