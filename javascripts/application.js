getNextBusinessDay = function(today){
  dayOfMonth = today.getDate();
  tomorrow = new Date(new Date().setDate(today.getDate()+1));
  while (tomorrow.getDay() == 0 || tomorrow.getDay() == 6) {
    getNextBusinessDay(tomorrow);
  }
  return tomorrow;
}

$( document ).ready(function() {

  // *** --- *** //
  // Map
  // *** --- *** //


  // Create the map
  var map = L.map('map').setView([49.64882,5.82359], 11);

  // Set up the OSM layer
  L.tileLayer(
      'https://api.mapbox.com/styles/v1/cedricgreenlabcoworking/cipe33k7l007ldima6fw52u4p/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2VkcmljZ3JlZW5sYWJjb3dvcmtpbmciLCJhIjoiY2lwZTJ3cWg3MDAxbnV5bmYwbmFrNDlrbiJ9.Q8oeuC2Rns5LZnmWzbI9qA',
      {maxZoom: 18}).addTo(map);

  // add a marker in the given location
  L.marker([36.83711,-2.464459]).addTo(map);

  var greenIcon = L.icon({
    iconUrl: '/images/map-icon.png',
    // shadowUrl: 'leaf-shadow.png',

    iconSize:     [70, 70], // size of the icon
    shadowSize:   [0, 0],   // size of the shadow
    iconAnchor:   [40, 60],   // point of the icon which will correspond to marker's location
    shadowAnchor: [0, 0],   // the same for the shadow
    popupAnchor:  [0, 0]    // point from which the popup should open relative to the iconAnchor
  });

  L.marker([49.64882,5.82359], {icon: greenIcon}).addTo(map);

  // *** --- *** //
  // Date Picker
  // *** --- *** //

  $('.datepicker').datepicker({
      language: 'fr',
      daysOfWeekDisabled: [0,6],
      startDate: getNextBusinessDay(new Date())
  });

  $('#free_trial_datepicker').on("changeDate", function() {

    date = $('#free_trial_datepicker').datepicker('getFormattedDate');
    splited_date = date.split('/')
    $("#mce-MMERGE3-day").val(splited_date[0])
    $("#mce-MMERGE3-month").val(splited_date[1])
    $("#mce-MMERGE3-year").val(splited_date[2])
  });

});
