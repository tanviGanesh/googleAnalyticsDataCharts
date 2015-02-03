<?php
// define('ga_email','staff.common@gmail.com');
// define('ga_password','cricket93');
// define('ga_profile_id','13031704');
define('ga_email',$_POST['gaEmail']);
define('ga_password',$_POST['gaPassword']);
define('ga_profile_id',$_POST['gaProfileId']);

require $_POST['gapiClassPath'].'gapi.class.php';

$ga = new gapi(ga_email,ga_password);

/**
 * Note: OR || operators are calculated first, before AND &&.
 * There are no brackets () for precedence and no quotes are
 * required around parameters.
 * 
 * Do not use brackets () for precedence, these are only valid for 
 * use in regular expressions operators!
 * 
 * The below filter represented in normal PHP logic would be:
 * country == 'United States' && ( browser == 'Firefox || browser == 'Chrome')
 
 login into the account 
 https://www.google.com/settings/security/lesssecureapps   make it less secure
 */

// $filter = 'country == United States && browser == Firefox || browser == Chrome';

// print_r($_POST['dimensions']);
$ga->requestReportData(ga_profile_id,$_POST['dimensions'],$_POST['metrics'],$_POST['sortMetric'],$_POST['filter'],$_POST['startDate'],$_POST['endDate']);

$dataArr=array();
foreach($ga->getResults() as $result) {
	$dataVal=array();
	foreach($_POST['orderData'] as $k=>$v) {
		$cat="get".ucfirst($v);
		array_push($dataVal,$result->$cat());
	}
	// array_push($dataVal,strval($result->getDeviceCategory()));
	array_push($dataArr,$dataVal);
}
print_r(json_encode($dataArr));
?>