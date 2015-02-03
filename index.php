<!DOCTYPE>
<html>
  <head>
    <title>Hello Google Analytics API</title>
	<link rel="stylesheet" href="http://code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css">
	 <script type="text/javascript"
    src="http://www.google.com/jsapi"></script>

	 <script type="text/javascript"
          src="https://www.google.com/jsapi?autoload={
            'modules':[{
              'name':'visualization',
              'version':'1',
              'packages':['corechart']
            }]
          }"></script>

	<script src="http://code.jquery.com/jquery-1.10.2.js"></script>
	<script src="http://code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
	<script src="js/debounce.js"></script>  <!-- needed for charts responsiveness -->
	<script src="js/jquery.google-analytics.js"></script>

	<script src="js/analytics.js"></script>  
  </head>
  <body>
  <h2>google charts</h2>
	<div id="stats1" style="width:100%;height:300px;">Loading Analytics.........</div>
	<div id="stats2" style="width:100%;height:300px;">Loading Analytics.........</div>
	<div id="stats3" style="width:100%;height:300px;">Loading Analytics.........</div>
</body>

</html>