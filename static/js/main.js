$(document).ready(function () {
  $('.datepicker').datepicker({
    yearRange: 90
  });
  $('select').formSelect();
  $('.tabs').tabs({});
  $('.tooltipped').tooltip();
  $('.sidenav').sidenav();

  $("input[type=radio][name=currently_insured]").click(function () {
    if ($("input[type=radio][name=currently_insured]:checked").val() === "No") {
      jQuery('#pop').hide();

    } else {

      jQuery('#pop').show();
    }
  });

  $("select[name=coverage]").change(function () {
    if ($("select[name=coverage][id=selects_field]").val() == "liability") {
      jQuery('#full_cover').hide();

    } else {

      jQuery('#full_cover').show();
    }
  });

  $("input[type=radio][name=tickets_accidents]").click(function () {
    
    if ($("input[type=radio][name=tickets_accidents]:checked").val() == "No") {
      jQuery('#accidents').hide();

    } else {

      jQuery('#accidents').show();
    }
  });




});





























 // $('input.autocomplete').autocomplete({
  //   data: {
  //     "Alabama":null,
  //    "Alaska": null,
  //     "Arizona": null,
  //     "Arkansas": null,
  //     "California": null,
  //     "Colorado": null,
  //     "Connecticut": null,
  //     "District of Columbia": null,
  //     "Delaware": null,
  //     "Florida": null,
  //     "Georgia": null,
  //     "Hawaii": null,
  //     "Idaho": null,
  //     "Illinois": null,
  //     "Indiana": null,
  //     "Iowa": null,
  //     "Kansas": null,
  //     "Kentucky": null,
  //     "Louisiana": null,
  //     "Maine": null,
  //     "Maryland": null,
  //     "Massachusetts": null,
  //     "Michigan": null,
  //     "Minnesota": null,
  //     "Mississippi": null,
  //     "Missouri": null,
  //     "Montana": null,
  //     "Nebraska": null,
  //     "Nevada": null,
  //     "New Hampshire": null,
  //     "New Jersey": null,
  //     "New Mexico": null,
  //     "New York": null,
  //     "North Carolina": null,
  //     "North Dakota": null,
  //     "Ohio": null,
  //     "Oklahoma": null,
  //     "Oregon": null,
  //     "Pennsylvania": null,
  //     "Rhode Island": null,
  //     "South Carolina": null,
  //     "South Dakota": null,
  //     "Tennessee": null,
  //     "Texas": null,
  //     "Utah": null,
  //     "Vermont": null,
  //     "Virginia": null,
  //     "Washington": null,
  //     "West Virginia": null,
  //     "Wisconsin": null,
  //     "Wyoming": null
  //   }, limit: 20, minLength: 0
  // });
