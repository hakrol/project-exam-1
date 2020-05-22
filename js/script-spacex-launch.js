const latestSpacexLaunch = "https://api.spacexdata.com/v3/launches/latest";

fetch(latestSpacexLaunch)
  .then(handleAPI)
  .then(importLatestLaunchInformation)
  .catch(handleError);

function handleAPI(response) {
  return response.json();
}

function handleError(error) {
  console.log("Error");
}
function importLatestLaunchInformation(json) {
  console.dir(json);

  const iframeContainer = document.querySelector(".latest-launch-info");

  let HTML = "";

  HTML += `
  <div class="launch-information">
  <div class="launch-information-1">
  <h3><span id="underline-text">Information</span></h3>
  <p>Name: ${json.mission_name}</p>
  <p>Rocket type: ${json.rocket.rocket_name}</p>
  <p>Flight number: ${json.flight_number}</p>
  <p>Launch site: ${json.launch_site.site_name}</p>
  </div>
  <div class="launch-information-2">
  <h3><span id="underline-text">Launch Mission</span></h3>
  <p>${json.details}</p>
  </div>
  </div>
  <iframe src="http://www.youtube.com/embed/${json.links.youtube_id}"></iframe>`;

  iframeContainer.innerHTML = HTML;
}
